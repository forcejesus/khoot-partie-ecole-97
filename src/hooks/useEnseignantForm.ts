
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { enseignantService, CreateEnseignantRequest } from "@/services/enseignantService";

export const useEnseignantForm = (onSuccess: () => void) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CreateEnseignantRequest>({
    nom: "",
    prenom: "",
    genre: "",
    statut: "actif",
    phone: "",
    email: "",
    adresse: "",
    pays: "6707bfa699095a5b8d491bf5",
    role: "enseignant",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (field: keyof CreateEnseignantRequest, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateStep1 = () => {
    return formData.nom && formData.prenom && formData.genre && formData.phone && 
           formData.email && formData.adresse;
  };

  const validateStep2 = () => {
    return formData.password && confirmPassword && formData.password === confirmPassword;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
      });
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await enseignantService.createEnseignant(formData);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Enseignant ajouté avec succès",
        });
        resetForm();
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de l'ajout:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible d'ajouter l'enseignant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      nom: "",
      prenom: "",
      genre: "",
      statut: "actif",
      phone: "",
      email: "",
      adresse: "",
      pays: "6707bfa699095a5b8d491bf5",
      role: "enseignant",
      password: "",
    });
    setConfirmPassword("");
  };

  return {
    formData,
    confirmPassword,
    currentStep,
    isLoading,
    handleInputChange,
    setConfirmPassword,
    validateStep1,
    validateStep2,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
    resetForm,
  };
};
