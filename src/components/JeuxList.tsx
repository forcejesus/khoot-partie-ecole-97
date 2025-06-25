
import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2, Users, Clock, Calendar, Eye, User, Loader2 } from "lucide-react";
import { config } from "@/config/hosts";

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

const GameImageWithLoader = ({ src, alt, fallbackSrc }: { src: string | null, alt: string, fallbackSrc: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    if (src) {
      // Construire l'URL complète de l'image
      const imageUrl = `${config.api.baseUrl}/${src}`;
      setImageSrc(imageUrl);
    } else {
      setImageSrc(fallbackSrc);
      setIsLoading(false);
    }
  }, [src, fallbackSrc]);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <div className="relative h-48 rounded-lg overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
        </div>
      )}
      
      {!src && !isLoading && (
        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex flex-col items-center justify-center text-white">
          <Gamepad2 className="h-12 w-12 mb-2" />
          <p className="text-sm font-medium">Jeu sans image</p>
        </div>
      )}
      
      {(src || hasError) && (
        <>
          <img
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </>
      )}
    </div>
  );
};

export const JeuxList = ({ searchTerm = "" }: JeuxListProps) => {
  const navigate = useNavigate();
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

  const handleViewDetails = (jeuId: string) => {
    navigate(`/jeux/${jeuId}`);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'enseignant':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'admin':
        return 'Admin';
      case 'enseignant':
        return 'Enseignant';
      default:
        return role;
    }
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
                {/* Image du jeu avec loader */}
                <GameImageWithLoader 
                  src={jeu.image} 
                  alt={jeu.titre}
                  fallbackSrc={defaultGameImage}
                />

                <div className="mt-3">
                  <CardTitle className="text-lg font-bold text-orange-700 line-clamp-2 mb-3">
                    {jeu.titre}
                  </CardTitle>
                  
                  {/* Créateur du jeu mis en valeur */}
                  <div className="mb-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-orange-600" />
                      <span className="text-sm font-medium text-orange-800">Créé par</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">
                          {jeu.createdBy.prenom} {jeu.createdBy.nom}
                        </p>
                        <p className="text-xs text-gray-600">{jeu.createdBy.matricule}</p>
                      </div>
                      <Badge variant="outline" className={getRoleBadgeColor(jeu.createdBy.role)}>
                        {getRoleLabel(jeu.createdBy.role)}
                      </Badge>
                    </div>
                  </div>

                  {/* École */}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{jeu.ecole.libelle}</span>
                    <span className="text-gray-400">•</span>
                    <span>{jeu.ecole.ville}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>Créé le</span>
                  </div>
                  <span className="font-medium text-gray-700">
                    {formatDate(jeu.date)}
                  </span>
                </div>
                
                <Button 
                  onClick={() => handleViewDetails(jeu._id)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  size="sm"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Voir les détails
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
