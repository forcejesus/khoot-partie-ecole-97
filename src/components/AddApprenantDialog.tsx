
import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ManualApprenantForm } from "./ManualApprenantForm";
import { CSVImportForm } from "./CSVImportForm";
import { processCSVFile, validateApprenant, type ApprenantImport } from "@/utils/csvUtils";

export const AddApprenantDialog = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    avatar: "Mon avatar",
    ecole: ""
  });

  // Gère la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);
      const dataToSend = {
        ...formData,
        ecole: userData.ecole._id
      };

      const response = await axios.post(
        "http://kahoot.nos-apps.com/api/apprenant",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Apprenant ajouté avec succès",
        });
        setOpen(false);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          phone: "",
          avatar: "Mon avatar",
          ecole: ""
        });
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de l'ajout:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible d'ajouter l'apprenant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Gère l'upload du fichier CSV
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    
    try {
      const apprenants = await processCSVFile(file);
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);
      let successCount = 0;
      let errorCount = 0;
      let errorMessages: string[] = [];

      for (const apprenant of apprenants) {
        const validation = validateApprenant(apprenant);
        
        if (!validation.isValid) {
          errorCount++;
          errorMessages.push(`${apprenant.nom} ${apprenant.prenom}: ${validation.message}`);
          continue;
        }

        try {
          await axios.post(
            "http://kahoot.nos-apps.com/api/apprenant",
            {
              ...apprenant,
              avatar: "Mon avatar",
              ecole: userData.ecole._id
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          successCount++;
        } catch (error: any) {
          errorCount++;
          const errorMessage = error.response?.data?.message || "Erreur inconnue";
          errorMessages.push(`${apprenant.nom} ${apprenant.prenom}: ${errorMessage}`);
        }
      }

      if (errorMessages.length > 0) {
        console.error("Erreurs d'importation:", errorMessages);
      }

      toast({
        title: "Import terminé",
        description: `${successCount} apprenants ajoutés avec succès, ${errorCount} erreurs`,
      });

      if (successCount > 0) {
        setOpen(false);
        onSuccess();
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Erreur lors de l'import du fichier CSV",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un apprenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-white border-orange-200">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-orange-700">Ajouter un nouvel apprenant</DialogTitle>
        </DialogHeader>
        
        <ManualApprenantForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />

        <Separator className="my-4 bg-orange-200" />

        <CSVImportForm
          onFileUpload={handleFileUpload}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};
