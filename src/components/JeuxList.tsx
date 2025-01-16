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
import { useToast } from "@/components/ui/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

interface CreatedBy {
  _id: string;
  nom: string;
  email: string;
}

interface Jeu {
  _id: string;
  titre: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreatedBy;
  questions: any[];
  planification?: {
    dateDebut: string;
    dateFin: string;
  };
}

export const JeuxList = () => {
  const [jeux, setJeux] = useState<Jeu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchJeux = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des jeux",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/jeux",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setJeux(response.data.data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des jeux:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des jeux",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJeux();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Liste des jeux</h1>
          <p className="text-gray-600 mt-1">
            Total: {jeux.length} jeu{jeux.length > 1 ? "x" : ""}
          </p>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead>Créé par</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Nombre de questions</TableHead>
              <TableHead>Planifié</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[200px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                </TableRow>
              ))
            ) : (
              jeux.map((jeu) => (
                <TableRow key={jeu._id}>
                  <TableCell className="font-medium">{jeu.titre}</TableCell>
                  <TableCell>{jeu.createdBy?.nom || "Non spécifié"}</TableCell>
                  <TableCell>{jeu.createdBy?.email || "Non spécifié"}</TableCell>
                  <TableCell>{jeu.questions?.length || 0} questions</TableCell>
                  <TableCell>
                    <Badge variant={jeu.planification?.dateDebut && jeu.planification?.dateFin ? "default" : "secondary"}>
                      {jeu.planification?.dateDebut && jeu.planification?.dateFin ? "Oui" : "Non"}
                    </Badge>
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