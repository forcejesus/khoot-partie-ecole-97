import React, { useState, useEffect } from "react";
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
import { AddEnseignantDialog } from "./AddEnseignantDialog";
import { Enseignant } from "@/types/enseignant";
import { Skeleton } from "@/components/ui/skeleton";

interface EnseignantsListProps {
  onEnseignantChange?: () => void;
}

export const EnseignantsList = ({ onEnseignantChange }: EnseignantsListProps) => {
  const [enseignants, setEnseignants] = useState<Enseignant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

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
        `http://kahoot.nos-apps.com/api/users/delete/${id}`,
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

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Liste des enseignants</h1>
          <p className="text-gray-600 mt-1">
            Total: {enseignants.length} enseignant{enseignants.length > 1 ? "s" : ""}
          </p>
        </div>
        <AddEnseignantDialog onSuccess={fetchEnseignants} />
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
            ) : (
              enseignants.map((enseignant) => (
                <TableRow key={enseignant._id}>
                  <TableCell>{enseignant.name}</TableCell>
                  <TableCell>{enseignant.email}</TableCell>
                  <TableCell>{enseignant.phone}</TableCell>
                  <TableCell>{enseignant.statut}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(enseignant._id)}
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
    </div>
  );
};