
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Edit } from "lucide-react";
import { apprenantService } from "@/services/apprenantService";
import { UpdateApprenantRequest, Apprenant } from "@/types/apprenant";
import { EditApprenantDialogHeader } from "./apprenant/EditApprenantDialogHeader";
import { EditApprenantForm } from "./apprenant/EditApprenantForm";

interface EditApprenantDialogProps {
  apprenant: Apprenant;
  onSuccess: () => void;
}

export const EditApprenantDialog = ({ apprenant, onSuccess }: EditApprenantDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UpdateApprenantRequest>({
    nom: apprenant.nom,
    prenom: apprenant.prenom,
    matricule: apprenant.matricule,
    phone: apprenant.phone,
    email: apprenant.email,
  });

  const handleFormDataChange = (updates: Partial<UpdateApprenantRequest>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Updating apprenant data:", formData);
    
    try {
      const response = await apprenantService.updateApprenant(apprenant._id, formData);
      
      console.log("API Response:", response);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Apprenant modifié avec succès",
        });
        setOpen(false);
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de la modification:", error);
      console.error("Error response data:", error.response?.data);
      console.error("Error status:", error.response?.status);
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || `Erreur ${error.response?.status}: ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl">
        <EditApprenantDialogHeader />
        <EditApprenantForm 
          formData={formData}
          isLoading={isLoading}
          onFormDataChange={handleFormDataChange}
          onSubmit={handleSubmit}
          onCancel={() => setOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
