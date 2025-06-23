
import { useState, useEffect, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { Apprenant } from "@/types/apprenant";
import { apprenantService } from "@/services/apprenantService";

export const useApprenantsList = (searchTerm: string = "", onApprenantChange?: () => void) => {
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [apprenantToDelete, setApprenantToDelete] = useState<string | null>(null);
  const { toast } = useToast();

  // Filtrage dynamique des apprenants
  const filteredApprenants = useMemo(() => {
    if (!searchTerm) return apprenants;
    
    return apprenants.filter(apprenant => 
      apprenant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.matricule.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apprenants, searchTerm]);

  const fetchApprenants = async () => {
    try {
      setIsLoading(true);
      const response = await apprenantService.getApprenants();
      
      if (response.success) {
        setApprenants(response.data);
        onApprenantChange?.();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des apprenants:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des apprenants",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    setApprenantToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!apprenantToDelete) return;
    
    try {
      setIsDeleting(true);
      const response = await apprenantService.deleteApprenant(apprenantToDelete);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Apprenant supprimé avec succès",
        });
        fetchApprenants();
      }
    } catch (error: any) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Erreur lors de la suppression de l'apprenant",
      });
    } finally {
      setIsDeleting(false);
      setApprenantToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  useEffect(() => {
    fetchApprenants();
  }, []);

  return {
    apprenants: filteredApprenants,
    isLoading,
    isDeleting,
    deleteDialogOpen,
    setDeleteDialogOpen,
    fetchApprenants,
    confirmDelete,
    handleDelete,
  };
};
