
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, FileSpreadsheet, Upload, CheckCircle2, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ApprenantImport } from "@/utils/csvUtils";
import Papa from "papaparse";

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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile.type === "text/csv" || selectedFile.name.endsWith(".csv")) {
      try {
        const parsedData = await processCSVFile(selectedFile);
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
        console.error("Erreur lors de l'analyse du fichier CSV:", error);
        toast({
          variant: "destructive",
          title: "Erreur de fichier",
          description: "Impossible de lire le fichier CSV. Vérifiez le format.",
        });
      }
    } else if (selectedFile.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || 
              selectedFile.type === "application/vnd.ms-excel") {
      // Handle Excel files with Papa Parse
      Papa.parse(selectedFile, {
        complete: function(results) {
          // Skip header row if present
          const hasHeader = results.data && results.data.length > 0 && 
                         results.data[0].some((header: any) => 
                         typeof header === 'string' && 
                         (header.toLowerCase().includes('nom') || 
                          header.toLowerCase().includes('prenom') || 
                          header.toLowerCase().includes('email')));
          
          const startRow = hasHeader ? 1 : 0;
          
          // Process the data
          const data = results.data.slice(startRow).map((row: any) => {
            return {
              nom: row[0] || '',
              prenom: row[1] || '',
              email: row[2] || '',
              phone: row[3] || ''
            };
          }).filter((item: any) => item.nom && item.prenom && item.email); // Filter out empty rows
          
          setParsedData(data);
          
          // Validate each record
          const validationErrors: string[] = [];
          data.forEach((data: any, index: number) => {
            const { isValid, message } = validateApprenant(data);
            if (!isValid) {
              validationErrors.push(`Ligne ${index + 1}: ${message}`);
            }
          });
          
          setErrors(validationErrors);
        },
        error: function(error) {
          console.error("Erreur lors de l'analyse du fichier Excel:", error);
          toast({
            variant: "destructive",
            title: "Erreur de fichier",
            description: "Impossible de lire le fichier Excel. Vérifiez le format.",
          });
        }
      });
    } else {
      toast({
        variant: "destructive",
        title: "Format non supporté",
        description: "Veuillez télécharger un fichier CSV ou Excel.",
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
              email: item.email,
              phone: item.phone,
              ecole: user.ecole._id
            }
          : {
              name: `${item.prenom} ${item.nom}`,
              email: item.email,
              password: "password123", // Temporary password
              statut: "ENSEIGNANT",
              ecole: user.ecole._id
            };
        
        try {
          await axios.post(
            `http://kahoot.nos-apps.com/api/${typeEndpoint}`,
            userData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          successCount++;
        } catch (error) {
          console.error(`Erreur lors de l'ajout du ${typeSingular} ${i+1}:`, error);
          // Continue with other records even if one fails
        }
        
        // Update progress
        setUploadProgress(Math.round(((i + 1) / totalItems) * 100));
      }

      toast({
        title: "Importation terminée",
        description: `${successCount} ${typeLabel} ont été importés avec succès.`,
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
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="flex flex-col items-center py-8">
            <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Importation réussie!</h3>
            <p className="text-center text-muted-foreground">
              Vos {typeLabel} ont été importés avec succès.
            </p>
          </div>
        ) : (
          <>
            {isLoading ? (
              <div className="py-6 space-y-4">
                <h3 className="font-medium text-center">
                  Importation en cours...
                </h3>
                <Progress value={uploadProgress} className="h-2" />
                <p className="text-center text-sm text-muted-foreground">
                  {uploadProgress}% terminé
                </p>
              </div>
            ) : (
              <>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="file">Fichier CSV ou Excel</Label>
                    <div className="flex items-center gap-2">
                      <input
                        id="file"
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById("file")?.click()}
                        className="w-full h-24 border-dashed flex flex-col gap-2"
                      >
                        <Upload className="h-6 w-6" />
                        <span>
                          {file ? file.name : `Cliquez pour sélectionner un fichier`}
                        </span>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Format: Nom, Prénom, Email, Téléphone
                    </p>
                  </div>

                  {errors.length > 0 && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Erreurs détectées</AlertTitle>
                      <AlertDescription>
                        <ul className="list-disc pl-5 text-sm">
                          {errors.slice(0, 3).map((error, idx) => (
                            <li key={idx}>{error}</li>
                          ))}
                          {errors.length > 3 && (
                            <li>...et {errors.length - 3} autres erreurs</li>
                          )}
                        </ul>
                      </AlertDescription>
                    </Alert>
                  )}

                  {parsedData.length > 0 && errors.length === 0 && (
                    <div>
                      <h3 className="font-medium mb-2">Aperçu des données ({parsedData.length} enregistrements)</h3>
                      <div className="border rounded-lg max-h-[200px] overflow-y-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Nom</TableHead>
                              <TableHead>Prénom</TableHead>
                              <TableHead>Email</TableHead>
                              <TableHead>Téléphone</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {parsedData.slice(0, 5).map((item, idx) => (
                              <TableRow key={idx}>
                                <TableCell>{item.nom}</TableCell>
                                <TableCell>{item.prenom}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.phone}</TableCell>
                              </TableRow>
                            ))}
                            {parsedData.length > 5 && (
                              <TableRow>
                                <TableCell colSpan={4} className="text-center text-sm text-muted-foreground">
                                  ... et {parsedData.length - 5} autres enregistrements
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </div>
                    </div>
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
