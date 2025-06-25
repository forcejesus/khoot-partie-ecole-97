
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Input } from "@/components/ui/input";
import { Search, Gamepad2, User, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { enseignantJeuxService } from "@/services/enseignantJeuxService";
import { GameCard } from "@/components/games/GameCard";
import { GameStats } from "@/components/games/GameStats";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone?: string;
}

interface EnseignantJeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  ecole: Ecole;
  date: string;
}

interface EnseignantInfo {
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
  ecole: Ecole;
}

const EnseignantJeuxContent = () => {
  const { enseignantId } = useParams<{ enseignantId: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [jeux, setJeux] = useState<EnseignantJeu[]>([]);
  const [enseignant, setEnseignant] = useState<EnseignantInfo | null>(null);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center";

  // Filtrage dynamique des jeux
  const filteredJeux = jeux.filter(jeu => 
    jeu.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jeu.ecole.libelle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    jeu.ecole.ville.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchEnseignantJeux = async () => {
    if (!enseignantId) return;

    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");

      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir cette page",
        });
        return;
      }

      const response = await enseignantJeuxService.getEnseignantJeux(enseignantId);

      if (response.success) {
        setJeux(response.data);
        setTotal(response.total);
        setEnseignant(response.enseignant);
      } else {
        throw new Error(response.message || "Erreur lors de la récupération des jeux");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des jeux:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des jeux de cet enseignant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEnseignantJeux();
  }, [enseignantId]);

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

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-32 w-full rounded-2xl" />
        <Skeleton className="h-20 w-full rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-96 w-full rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec informations de l'enseignant */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              Jeux de {enseignant?.prenom} {enseignant?.nom}
            </h1>
            <p className="text-orange-100 text-lg font-medium">
              Tous les jeux créés par cet enseignant
            </p>
          </div>
        </div>

        {/* Informations de l'enseignant en évidence */}
        {enseignant && (
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <User className="h-6 w-6 text-white" />
                <span className="text-lg font-semibold text-white">Informations de l'enseignant</span>
              </div>
              <Badge variant="outline" className={`${getRoleBadgeColor(enseignant.role)} bg-white/20 text-white border-white/30`}>
                {getRoleLabel(enseignant.role)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div>
                <p className="text-orange-100 text-sm">Matricule</p>
                <p className="font-semibold text-lg">{enseignant.matricule}</p>
              </div>
              <div>
                <p className="text-orange-100 text-sm">Email</p>
                <p className="font-semibold">{enseignant.email}</p>
              </div>
              <div>
                <p className="text-orange-100 text-sm">École</p>
                <p className="font-semibold">{enseignant.ecole.libelle}</p>
                <p className="text-orange-100 text-sm">{enseignant.ecole.ville}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Barre de recherche */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
            <Input
              placeholder="Rechercher un jeu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-16 pr-6 border-3 border-orange-300 focus:border-orange-500 bg-gray-50 text-lg py-4 h-16 rounded-xl font-medium text-black placeholder:text-gray-500 focus:bg-white transition-all"
            />
          </div>
          <p className="text-center text-gray-600 mt-3 text-sm">
            Tapez pour rechercher parmi les jeux de cet enseignant
          </p>
        </div>
      </div>

      {/* Statistiques et liste des jeux */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
        <div className="container mx-auto py-6">
          <GameStats 
            searchTerm={searchTerm}
            filteredCount={filteredJeux.length}
            totalCount={total}
          />

          {filteredJeux.length === 0 ? (
            <div className="text-center py-12">
              <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-lg">
                {searchTerm ? "Aucun jeu trouvé pour cette recherche" : "Aucun jeu créé par cet enseignant"}
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
      </div>
    </div>
  );
};

const EnseignantJeux = () => {
  return (
    <DashboardLayoutWithSidebar>
      <EnseignantJeuxContent />
    </DashboardLayoutWithSidebar>
  );
};

export default EnseignantJeux;
