
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, ArrowLeft, Gamepad2, Calendar, Eye, Users, Clock, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { enseignantJeuxService, EnseignantJeu, EnseignantJeuxResponse, EnseignantInfo, GameStatistics } from "@/services/enseignantJeuxService";
import { Skeleton } from "@/components/ui/skeleton";

const EnseignantJeuxContent = () => {
  const { enseignantId } = useParams<{ enseignantId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [jeux, setJeux] = useState<EnseignantJeu[]>([]);
  const [enseignantInfo, setEnseignantInfo] = useState<EnseignantInfo | null>(null);
  const [statistics, setStatistics] = useState<GameStatistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const filteredJeux = jeux.filter(jeu =>
    jeu.titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchEnseignantJeux = async () => {
    if (!enseignantId) return;
    
    try {
      setIsLoading(true);
      const response = await enseignantJeuxService.getEnseignantJeux(enseignantId);
      
      if (response.success) {
        setJeux(response.data.jeux);
        setEnseignantInfo(response.data.enseignant);
        setStatistics(response.data.statistiques);
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

  const getInitials = (nom: string, prenom: string) => {
    return `${nom?.charAt(0) || ''}${prenom?.charAt(0) || ''}`.toUpperCase();
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <Card key={index} className="border-orange-200">
          <CardHeader className="space-y-4">
            <Skeleton className="h-48 w-full rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* En-tête avec informations de l'enseignant */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6 mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/enseignants")}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-6 flex-1">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Gamepad2 className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2 tracking-tight">
                Jeux de l'enseignant
              </h1>
              {enseignantInfo && (
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-white/30">
                    <AvatarFallback className="bg-white/20 text-white font-semibold text-lg">
                      {getInitials(enseignantInfo.nom, enseignantInfo.prenom)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xl font-semibold">
                      {enseignantInfo.nom} {enseignantInfo.prenom}
                    </p>
                    <p className="text-orange-100">
                      {enseignantInfo.email} • {enseignantInfo.matricule}
                    </p>
                    <p className="text-orange-100 text-sm">
                      {enseignantInfo.ecole.libelle} - {enseignantInfo.ecole.ville}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Statistiques */}
        {statistics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-5 w-5" />
                <span className="text-sm">Total Jeux</span>
              </div>
              <p className="text-2xl font-bold">{statistics.totalJeux}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                <span className="text-sm">Avec Questions</span>
              </div>
              <p className="text-2xl font-bold">{statistics.jeuxAvecQuestions}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">Avec Planifications</span>
              </div>
              <p className="text-2xl font-bold">{statistics.jeuxAvecPlanifications}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span className="text-sm">Dernier Créé</span>
              </div>
              <p className="text-xs">{new Date(statistics.dernierJeuCree).toLocaleDateString()}</p>
            </div>
          </div>
        )}
      </div>

      {/* Barre de recherche */}
      <Card className="border-orange-200 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-orange-700">Rechercher dans les jeux</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher un jeu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400 bg-white"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {isLoading ? "Chargement..." : `${filteredJeux.length} jeu(x) trouvé(s)`}
          </p>
        </CardContent>
      </Card>

      {/* Liste des jeux */}
      <Card className="border-orange-200 bg-white">
        <CardContent className="p-6">
          {isLoading ? (
            <LoadingSkeleton />
          ) : filteredJeux.length === 0 ? (
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
                <Card key={jeu._id} className="border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg group">
                  <CardHeader className="space-y-4">
                    <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
                      {jeu.image ? (
                        <img
                          src={jeu.image}
                          alt={jeu.titre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
                          <Gamepad2 className="h-16 w-16 text-orange-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {jeu.titre}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>{jeu.questions.length} questions</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>{jeu.planification.length} planification(s)</span>
                        </div>
                      </div>

                      {jeu.planification && jeu.planification.length > 0 && (
                        <div className="border-t pt-3">
                          <div className="space-y-2">
                            {jeu.planification.map((plan) => (
                              <div key={plan._id} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline" className={`text-xs ${
                                    plan.statut === 'actif' ? 'bg-green-50 text-green-700 border-green-200' : 
                                    plan.statut === 'en attente' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                    'bg-gray-50 text-gray-700 border-gray-200'
                                  }`}>
                                    {plan.statut}
                                  </Badge>
                                  <span className="text-gray-600">{plan.participants.length} participants</span>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => navigate(`/planifications/${plan._id}`)}
                                  className="border-orange-200 text-orange-600 hover:bg-orange-50 h-7 text-xs px-2"
                                >
                                  <Eye className="h-3 w-3 mr-1" />
                                  Voir
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                </Card>
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
