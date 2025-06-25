
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2 } from "lucide-react";
import { config } from "@/config/hosts";
import { GameStats } from "./games/GameStats";
import { GameCard } from "./games/GameCard";

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone?: string;
}

interface CreatedBy {
  _id: string;
  nom: string;
  prenom: string;
  matricule: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  adresse: string;
  role: string;
  pays?: {
    _id: string;
    libelle: string;
  };
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  ecole: Ecole;
  date: string;
}

interface JeuxResponse {
  success: boolean;
  message: string;
  data: Jeu[];
  total: number;
}

interface JeuxListProps {
  searchTerm?: string;
}

export const JeuxList = ({ searchTerm = "" }: JeuxListProps) => {
  const [jeux, setJeux] = useState<Jeu[]>([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Image par défaut pour les jeux
  const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center";

  // Filtrage dynamique des jeux
  const filteredJeux = useMemo(() => {
    if (!searchTerm) return jeux;
    
    return jeux.filter(jeu => 
      jeu.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.ecole.libelle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      jeu.ecole.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${jeu.createdBy.prenom} ${jeu.createdBy.nom}`.toLowerCase().includes(searchTerm.toLowerCase())
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
      
      const response = await axios.get<JeuxResponse>(`${config.api.baseUrl}/api/jeux`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      console.log("Réponse API jeux:", response.data);

      if (response.data.success) {
        setJeux(response.data.data);
        setTotal(response.data.total);
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

  return (
    <div className="container mx-auto py-6">
      {/* En-tête avec total mis en valeur */}
      <GameStats 
        searchTerm={searchTerm}
        filteredCount={filteredJeux.length}
        totalCount={total}
      />

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border border-orange-200 rounded-lg p-6">
              <Skeleton className="h-48 w-full rounded-lg mb-4" />
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full mb-3" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredJeux.length === 0 ? (
        <div className="text-center py-12">
          <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">
            {searchTerm ? "Aucun jeu trouvé pour cette recherche" : "Aucun jeu disponible"}
          </p>
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-2">
              Essayez de modifier votre terme de recherche
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJeux.map((jeu) => (
            <GameCard 
              key={jeu._id} 
              jeu={jeu} 
              defaultGameImage={defaultGameImage}
            />
          ))}
        </div>
      )}
    </div>
  );
};
