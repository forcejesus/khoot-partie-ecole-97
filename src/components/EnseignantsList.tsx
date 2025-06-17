
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Enseignant } from "@/types/enseignant";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface EnseignantsListProps {
  onEnseignantChange?: () => void;
  searchTerm?: string;
}

export const EnseignantsList = ({ onEnseignantChange, searchTerm = "" }: EnseignantsListProps) => {
  const [enseignants, setEnseignants] = useState<Enseignant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [enseignantToDelete, setEnseignantToDelete] = useState<string | null>(null);

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

  const confirmDelete = (id: string) => {
    setEnseignantToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!enseignantToDelete) return;
    
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
        `http://kahoot.nos-apps.com/api/user/delete/${enseignantToDelete}`,
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
    } finally {
      setEnseignantToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  useEffect(() => {
    fetchEnseignants();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <p className="text-gray-600 text-sm">
          Total: {filteredEnseignants.length} enseignant{filteredEnseignants.length > 1 ? "s" : ""} 
          {searchTerm && ` (sur ${enseignants.length})`}
        </p>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                </TableRow>
              ))
            ) : filteredEnseignants.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                  {searchTerm ? "Aucun enseignant trouvé pour cette recherche" : "Aucun enseignant enregistré"}
                </TableCell>
              </TableRow>
            ) : (
              filteredEnseignants.map((enseignant) => (
                <TableRow key={enseignant._id}>
                  <TableCell>{enseignant.name}</TableCell>
                  <TableCell>{enseignant.email}</TableCell>
                  <TableCell>{enseignant.phone}</TableCell>
                  <TableCell>{enseignant.statut}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => confirmDelete(enseignant._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation de suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet enseignant ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
