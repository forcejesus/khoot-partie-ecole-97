
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Enseignant } from "@/types/enseignant";

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
      enseignant.statut.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [enseignants, searchTerm]);

  const fetchEnseignants = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des enseignants",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Filtrer uniquement les utilisateurs avec le statut "enseignant" ou "Enseignant"
        const filteredEnseignants = response.data.data.filter(
          (enseignant: Enseignant) => 
            enseignant.ecole === userData.ecole._id && 
            (enseignant.statut.toLowerCase() === "enseignant")
        );
        setEnseignants(filteredEnseignants);
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

      const response = await axios.delete(
        `http://kahoot.nos-apps.com/api/user/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
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
