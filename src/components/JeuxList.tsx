
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2, Users, Clock, Calendar } from "lucide-react";
import { config } from "@/config/hosts";

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: any | null;
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

  return (
    <div className="container mx-auto py-6">
      {/* En-tête avec total mis en valeur */}
      <div className="mb-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-orange-800 mb-2">Bibliothèque de jeux</h2>
            <p className="text-gray-600">
              {searchTerm ? (
                <>
                  <span className="font-semibold text-orange-700">{filteredJeux.length}</span> jeu{filteredJeux.length > 1 ? "x" : ""} trouvé{filteredJeux.length > 1 ? "s" : ""} 
                  <span className="text-sm"> (sur {total} au total)</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-orange-700">{total}</span> jeu{total > 1 ? "x" : ""} disponible{total > 1 ? "s" : ""}
                </>
              )}
            </p>
          </div>
          <div className="bg-orange-500 text-white px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-5 w-5" />
              <span className="font-bold text-lg">{searchTerm ? filteredJeux.length : total}</span>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="border-orange-200">
              <CardHeader>
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-4 w-1/2" />
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
          {searchTerm && (
            <p className="text-gray-400 text-sm mt-2">
              Essayez de modifier votre terme de recherche
            </p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJeux.map((jeu) => (
            <Card key={jeu._id} className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300 bg-white">
              <CardHeader className="pb-3">
                {/* Image du jeu */}
                <div className="relative h-48 rounded-lg overflow-hidden mb-3">
                  <img
                    src={jeu.image || defaultGameImage}
                    alt={jeu.titre}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = defaultGameImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-orange-700 hover:bg-white">
                      <Gamepad2 className="h-3 w-3 mr-1" />
                      Jeu
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-lg font-bold text-orange-700 line-clamp-2">
                  {jeu.titre}
                </CardTitle>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="h-4 w-4" />
                  <span>{jeu.ecole.libelle}</span>
                  <span className="text-gray-400">•</span>
                  <span>{jeu.ecole.ville}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Créé le</span>
                  </div>
                  <span className="font-medium text-gray-700">
                    {formatDate(jeu.date)}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
