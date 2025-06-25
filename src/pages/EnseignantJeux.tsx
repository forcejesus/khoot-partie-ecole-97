import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { enseignantJeuxService, EnseignantJeu, EnseignantInfo, GameStatistics } from "@/services/enseignantJeuxService";
import { Skeleton } from "@/components/ui/skeleton";
import { EnseignantJeuxHeader } from "@/components/enseignant/EnseignantJeuxHeader";
import { EnseignantInfoCard } from "@/components/enseignant/EnseignantInfoCard";
import { EnseignantJeuxStats } from "@/components/enseignant/EnseignantJeuxStats";
import { EnseignantJeuxSearchBar } from "@/components/enseignant/EnseignantJeuxSearchBar";
import { EnseignantJeuCard } from "@/components/enseignant/EnseignantJeuCard";

const EnseignantJeuxContent = () => {
  const { enseignantId } = useParams<{ enseignantId: string }>();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [jeux, setJeux] = useState<EnseignantJeu[]>([]);
  const [enseignantInfo, setEnseignantInfo] = useState<EnseignantInfo | null>(null);
  const [statistics, setStatistics] = useState<GameStatistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredJeux = jeux.filter(jeu =>
    jeu.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Image par défaut pour les jeux
  const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center";

  const fetchEnseignantJeux = async () => {
    if (!enseignantId) return;
    
    try {
      setIsLoading(true);
      const response = await enseignantJeuxService.getEnseignantJeux(enseignantId);
      
      if (response.success) {
        setJeux(response.data.jeux);
        setEnseignantInfo(response.data.enseignant);
        
        // Calculate total planifications count from all games
        const totalPlanifications = response.data.jeux.reduce((total, jeu) => {
          return total + (jeu.planification?.length || 0);
        }, 0);
        
        // Update statistics with correct total planifications count
        const updatedStatistics = {
          ...response.data.statistiques,
          totalPlanifications
        };
        
        setStatistics(updatedStatistics);
      }
    } catch (error: any) {
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

  const LoadingSkeleton = () => (
    <div className="space-y-6">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-48 w-full rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="border-orange-200">
            <CardContent className="p-6 space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="space-y-6">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header avec bouton retour */}
      <EnseignantJeuxHeader />

      {/* Informations de l'enseignant */}
      {enseignantInfo && (
        <EnseignantInfoCard enseignantInfo={enseignantInfo} />
      )}

      {/* Statistiques */}
      {statistics && (
        <EnseignantJeuxStats statistics={statistics} />
      )}

      {/* Barre de recherche mise en valeur */}
      <EnseignantJeuxSearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalJeux={jeux.length}
        filteredCount={filteredJeux.length}
      />

      {/* Liste des jeux */}
      <Card className="border-orange-200 bg-white">
        <CardContent className="p-6">
          {filteredJeux.length === 0 ? (
            <div className="text-center py-12">
              <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? "Aucun jeu trouvé" : "Aucun jeu créé"}
              </h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? "Essayez de modifier votre recherche"
                  : "Cet enseignant n'a pas encore créé de jeux"
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJeux.map((jeu) => (
                <EnseignantJeuCard 
                  key={jeu._id} 
                  jeu={jeu} 
                  defaultGameImage={defaultGameImage}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
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
