
import { useState, useEffect, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import { Enseignant } from "@/types/enseignant";
import { enseignantService } from "@/services/enseignantService";

export const useEnseignantsList = (searchTerm: string = "", onEnseignantChange?: () => void) => {
  const [enseignants, setEnseignants] = useState<Enseignant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Filtrage dynamique des enseignants
  const filteredEnseignants = useMemo(() => {
    if (!searchTerm) return enseignants;
    
    return enseignants.filter(enseignant => 
      enseignant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.matricule.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.statut.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [enseignants, searchTerm]);

  const fetchEnseignants = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des enseignants",
        });
        return;
      }

      const response = await enseignantService.getEnseignants();

      if (response.success) {
        // Transformer les données pour ajouter la propriété 'name' pour compatibilité
        const transformedEnseignants = response.data.map(enseignant => ({
          ...enseignant,
          name: `${enseignant.nom} ${enseignant.prenom}`.trim()
        }));
        
        setEnseignants(transformedEnseignants);
        onEnseignantChange?.();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des enseignants:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des enseignants",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const response = await enseignantService.deleteEnseignant(id);

      if (response.success) {
        toast({
          title: "Succès",
          description: "Enseignant supprimé avec succès",
        });
        fetchEnseignants();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer l'enseignant",
      });
    }
  };

  useEffect(() => {
    fetchEnseignants();
  }, []);

  return {
    enseignants,
    filteredEnseignants,
    isLoading,
    handleDelete,
    fetchEnseignants,
  };
};
