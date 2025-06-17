
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2, Users, Clock, Star } from "lucide-react";

interface Jeu {
  _id: string;
  nom: string;
  description: string;
  difficulte: string;
  duree: number;
  participants: number;
  statut: string;
}

interface JeuxListProps {
  searchTerm?: string;
}

export const JeuxList = ({ searchTerm = "" }: JeuxListProps) => {
  const [jeux, setJeux] = useState<Jeu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Filtrage dynamique des jeux
  const filteredJeux = useMemo(() => {
    if (!searchTerm) return jeux;
    
    return jeux.filter(jeu => 
      jeu.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.difficulte.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [jeux, searchTerm]);

  const fetchJeux = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des jeux",
        });
        return;
      }

      // Mock data for now since we don't have the API endpoint
      const mockJeux: Jeu[] = [
        {
          _id: "1",
          nom: "Quiz Mathématiques",
          description: "Jeu de quiz pour améliorer les compétences en mathématiques",
          difficulte: "Facile",
          duree: 15,
          participants: 25,
          statut: "Actif"
        },
        {
          _id: "2",
          nom: "Puzzle Logique",
          description: "Résolvez des puzzles pour développer la logique",
          difficulte: "Moyen",
          duree: 30,
          participants: 18,
          statut: "Actif"
        },
        {
          _id: "3",
          nom: "Course aux Mots",
          description: "Jeu de vocabulaire et d'orthographe",
          difficulte: "Difficile",
          duree: 20,
          participants: 12,
          statut: "Inactif"
        }
      ];

      setJeux(mockJeux);
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

  const getDifficultyColor = (difficulte: string) => {
    switch (difficulte.toLowerCase()) {
      case "facile":
        return "bg-green-100 text-green-800";
      case "moyen":
        return "bg-yellow-100 text-yellow-800";
      case "difficile":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatutColor = (statut: string) => {
    return statut === "Actif" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <p className="text-gray-600 text-sm">
          Total: {filteredJeux.length} jeu{filteredJeux.length > 1 ? "x" : ""} 
          {searchTerm && ` (sur ${jeux.length})`}
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="border-orange-200">
              <CardHeader>
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : filteredJeux.length === 0 ? (
        <div className="text-center py-12">
          <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">
            {searchTerm ? "Aucun jeu trouvé pour cette recherche" : "Aucun jeu disponible"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJeux.map((jeu) => (
            <Card key={jeu._id} className="border-orange-200 hover:shadow-lg transition-shadow bg-white">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg font-bold text-orange-700 flex items-center gap-2">
                    <Gamepad2 className="h-5 w-5" />
                    {jeu.nom}
                  </CardTitle>
                  <Badge className={getStatutColor(jeu.statut)}>
                    {jeu.statut}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{jeu.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Difficulté:</span>
                    <Badge className={getDifficultyColor(jeu.difficulte)}>
                      {jeu.difficulte}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Durée:
                    </span>
                    <span className="text-sm font-medium">{jeu.duree} min</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Participants:
                    </span>
                    <span className="text-sm font-medium">{jeu.participants}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
