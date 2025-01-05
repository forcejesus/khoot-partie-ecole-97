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
import { useToast } from "@/components/ui/use-toast";
import { AddApprenantDialog } from "./AddApprenantDialog";
import { Apprenant } from "@/types/apprenant";
import { Skeleton } from "@/components/ui/skeleton";

export const ApprenantsList = () => {
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchApprenants = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des apprenants",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/apprenant",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Filtrer les apprenants pour ne garder que ceux de l'école de l'utilisateur connecté
        const filteredApprenants = response.data.data.filter(
          (apprenant: Apprenant) => apprenant.ecole._id === userData.ecole._id
        );
        setApprenants(filteredApprenants);
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
        `http://kahoot.nos-apps.com/api/apprenant/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Apprenant supprimé avec succès",
        });
        fetchApprenants();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer l'apprenant",
      });
    }
  };

  useEffect(() => {
    fetchApprenants();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Liste des apprenants</h1>
          <p className="text-gray-600 mt-1">
            Total: {apprenants.length} apprenant{apprenants.length > 1 ? "s" : ""}
          </p>
        </div>
        <AddApprenantDialog onSuccess={fetchApprenants} />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>École</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              // Affichage du loader
              [...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                </TableRow>
              ))
            ) : (
              apprenants.map((apprenant) => (
                <TableRow key={apprenant._id}>
                  <TableCell>{apprenant.nom}</TableCell>
                  <TableCell>{apprenant.prenom}</TableCell>
                  <TableCell>{apprenant.email}</TableCell>
                  <TableCell>{apprenant.phone}</TableCell>
                  <TableCell>{apprenant.ecole.libelle}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleDelete(apprenant._id)}
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