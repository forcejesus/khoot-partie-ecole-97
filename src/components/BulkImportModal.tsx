
import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { processCSVFile, validateApprenant } from "@/utils/csvUtils";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileSpreadsheet, Upload } from "lucide-react";
import { ApprenantImport } from "@/utils/csvUtils";
import * as XLSX from "xlsx";

// Import the new components
import { FileUploader } from "@/components/bulkImport/FileUploader";
import { ErrorDisplay } from "@/components/bulkImport/ErrorDisplay";
import { DataPreview } from "@/components/bulkImport/DataPreview";
import { ImportProgress } from "@/components/bulkImport/ImportProgress";
import { SuccessMessage } from "@/components/bulkImport/SuccessMessage";

interface BulkImportModalProps {
  type: "apprenants" | "enseignants";
  onSuccess: () => void;
}

export default function BulkImportModal({ type, onSuccess }: BulkImportModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<ApprenantImport[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();
  
  const typeLabel = type === "apprenants" ? "apprenants" : "enseignants";
  const typeEndpoint = type === "apprenants" ? "apprenant/create" : "users/register";
  const typeSingular = type === "apprenants" ? "apprenant" : "enseignant";

  const processExcelFile = (file: File): Promise<ApprenantImport[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          
          // Vérifier s'il y a un en-tête
          const hasHeader = Array.isArray(jsonData[0]) && 
                           jsonData[0].some((header: any) => 
                           typeof header === 'string' && 
                           (header.toLowerCase().includes('nom') || 
                            header.toLowerCase().includes('prenom') || 
                            header.toLowerCase().includes('email')));
          
          const startRow = hasHeader ? 1 : 0;
          
          const processedData = jsonData.slice(startRow).map((row: any) => {
            if (!Array.isArray(row) || row.length < 2) return null;
            return {
              nom: row[0] ? String(row[0]).trim() : '',
              prenom: row[1] ? String(row[1]).trim() : '',
              email: row[2] ? String(row[2]).trim() : '',
              phone: row[3] ? String(row[3]).trim() : ''
            };
          }).filter((item): item is ApprenantImport => 
            !!item && !!item.nom && !!item.prenom
          );
          
          resolve(processedData);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    try {
      let parsedData: ApprenantImport[] = [];
      
      if (selectedFile.type === "text/csv" || selectedFile.name.endsWith(".csv")) {
        parsedData = await processCSVFile(selectedFile);
      } else if (selectedFile.name.endsWith(".xlsx") || selectedFile.name.endsWith(".xls") || 
                selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
                selectedFile.type === "application/vnd.ms-excel") {
        parsedData = await processExcelFile(selectedFile);
      } else {
        toast({
          variant: "destructive",
          title: "Format non supporté",
          description: "Veuillez télécharger un fichier CSV ou Excel (.xlsx, .xls).",
        });
        return;
      }
      
      setParsedData(parsedData);
      
      // Validate each record
      const validationErrors: string[] = [];
      parsedData.forEach((data, index) => {
        const { isValid, message } = validateApprenant(data);
        if (!isValid) {
          validationErrors.push(`Ligne ${index + 1}: ${message}`);
        }
      });
      
      setErrors(validationErrors);
      
    } catch (error) {
      console.error("Erreur lors de l'analyse du fichier:", error);
      toast({
        variant: "destructive",
        title: "Erreur de fichier",
        description: "Impossible de lire le fichier. Vérifiez le format.",
      });
    }
  };

  const handleImport = async () => {
    if (errors.length > 0) {
      toast({
        variant: "destructive",
        title: "Erreurs détectées",
        description: "Veuillez corriger les erreurs avant d'importer les données.",
      });
      return;
    }

    if (parsedData.length === 0) {
      toast({
        variant: "destructive",
        title: "Aucune donnée",
        description: "Aucune donnée à importer.",
      });
      return;
    }

    try {
      setIsLoading(true);
      setUploadProgress(0);
      
      const token = localStorage.getItem("token");
      if (!token || !user?.ecole?._id) {
        toast({
          variant: "destructive",
          title: "Non autorisé",
          description: "Vous devez être connecté pour effectuer cette action.",
        });
        return;
      }

      let successCount = 0;
      const totalItems = parsedData.length;
      
      for (let i = 0; i < parsedData.length; i++) {
        const item = parsedData[i];
        
        // Prepare data based on type
        const userData = type === "apprenants"
          ? {
              nom: item.nom,
              prenom: item.prenom,
              avatar: "Mon avatar",
              ...(item.email && { email: item.email }),
              ...(item.phone && { phone: item.phone }),
              ecole: user.ecole._id
            }
          : {
              name: `${item.prenom} ${item.nom}`,
              email: item.email || `${item.nom.toLowerCase()}.${item.prenom.toLowerCase()}@temp.com`,
              password: "password123",
              statut: "ENSEIGNANT",
              ecole: user.ecole._id
            };
        
        try {
          const response = await axios.post(
            `http://kahoot.nos-apps.com/api/${typeEndpoint}`,
            userData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(`${typeSingular} ${i+1} créé avec succès:`, response.data);
          successCount++;
        } catch (error: any) {
          console.error(`Erreur lors de l'ajout du ${typeSingular} ${i+1}:`, error.response?.data || error);
        }
        
        // Update progress
        setUploadProgress(Math.round(((i + 1) / totalItems) * 100));
      }

      toast({
        title: "Importation terminée",
        description: `${successCount} ${typeLabel} ont été importés avec succès sur ${totalItems} tentatives.`,
      });
      
      setSuccess(true);
      onSuccess();
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFile(null);
        setParsedData([]);
        setErrors([]);
        setSuccess(false);
        setOpen(false);
      }, 3000);
      
    } catch (error) {
      console.error(`Erreur lors de l'importation des ${typeLabel}:`, error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: `Impossible d'importer les ${typeLabel}.`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <FileSpreadsheet className="h-4 w-4" />
          Importer {typeLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Importer plusieurs {typeLabel}</DialogTitle>
          <DialogDescription>
            Téléchargez un fichier CSV ou Excel contenant les {typeLabel} à importer.
            Format requis: Nom, Prénom, Email (optionnel), Téléphone (optionnel)
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <SuccessMessage type={type} />
        ) : (
          <>
            {isLoading ? (
              <ImportProgress uploadProgress={uploadProgress} />
            ) : (
              <>
                <div className="grid w-full items-center gap-4">
                  <FileUploader onFileChange={handleFileChange} file={file} />
                  <ErrorDisplay errors={errors} />
                  {parsedData.length > 0 && errors.length === 0 && (
                    <DataPreview parsedData={parsedData} />
                  )}
                </div>
              </>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
                Annuler
              </Button>
              <Button 
                onClick={handleImport} 
                disabled={isLoading || parsedData.length === 0 || errors.length > 0}
                className="gap-2"
              >
                <Upload className="h-4 w-4" />
                {isLoading ? "Importation..." : "Importer"}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
