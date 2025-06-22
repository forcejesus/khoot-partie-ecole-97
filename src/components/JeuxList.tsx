
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2, Users, Clock, Star } from "lucide-react";
import { config } from "@/config/hosts";

interface Ecole {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
  telephone: string;
  email: string;
  fichier: string;
  pays: string;
  apprenants: any[];
  abonnementActuel: string;
  abonnementHistorique: any[];
  __v: number;
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: any | null;
  planification: any[];
  questions: any[];
  ecole: Ecole;
  date: string;
  __v: number;
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
      jeu.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.ecole.libelle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.ecole.ville.toLowerCase().includes(searchTerm.toLowerCase())
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

      console.log("Récupération des jeux depuis:", `${config.api.baseUrl}/api/jeux`);
      
      const response = await axios.get(`${config.api.baseUrl}/api/jeux`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log("Réponse API jeux:", response.data);

      if (response.data.success) {
        setJeux(response.data.data);
      } else {
        throw new Error(response.data.message || "Erreur lors de la récupération des jeux");
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatutColor = (jeu: Jeu) => {
    const hasPlanification = jeu.planification && jeu.planification.length > 0;
    return hasPlanification ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800";
  };

  const getStatutText = (jeu: Jeu) => {
    const hasPlanification = jeu.planification && jeu.planification.length > 0;
    return hasPlanification ? "Planifié" : "Non planifié";
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
                    {jeu.titre}
                  </CardTitle>
                  <Badge className={getStatutColor(jeu)}>
                    {getStatutText(jeu)}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">
                  École: {jeu.ecole.libelle} - {jeu.ecole.ville}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Questions:
                    </span>
                    <span className="text-sm font-medium">{jeu.questions?.length || 0}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      Planifications:
                    </span>
                    <span className="text-sm font-medium">{jeu.planification?.length || 0}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Créé le:</span>
                    <span className="text-sm font-medium">{formatDate(jeu.date)}</span>
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
