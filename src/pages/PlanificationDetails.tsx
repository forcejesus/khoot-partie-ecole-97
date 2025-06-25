
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Users, 
  Hash, 
  Trophy,
  User,
  CheckCircle2,
  XCircle,
  Image as ImageIcon
} from "lucide-react";
import { api } from "@/services/apiClient";
import { GameImageWithLoader } from "@/components/games/GameImageWithLoader";

interface Question {
  _id: string;
  libelle: string;
  fichier?: string;
  type_fichier?: string;
  temps: number;
  limite_response: boolean;
  reponses: {
    _id: string;
    etat: number;
    reponse_texte: string;
  }[];
  point: {
    _id: string;
    nature: string;
    valeur: number;
    description: string;
  };
}

interface Reponse {
  _id: string;
  temps_reponse: number;
  reponse_apprenant: string;
  etat: number;
  question: Question;
}

interface Participant {
  _id: string;
  score: number;
  reponses: Reponse[];
  apprenant: any;
}

interface PlanificationDetails {
  _id: string;
  pin: string;
  statut: string;
  date_debut: string;
  date_fin: string;
  heure_debut: string;
  heure_fin: string;
  type: string;
  limite_participant: number;
  participants: Participant[];
  jeu: any;
  date: string;
}

const PlanificationDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [planification, setPlanification] = useState<PlanificationDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPlanificationDetails = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      console.log("Récupération des détails de la planification:", `/api/planification/${id}`);
      
      const response = await api.get(`/api/planification/${id}`);
      
      console.log("Réponse API détails planification:", response.data);

      if (response.data.success) {
        setPlanification(response.data.data);
      } else {
        throw new Error(response.data.message || "Erreur lors de la récupération de la planification");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la planification:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer les détails de la planification",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanificationDetails();
  }, [id]);

  const getStatutBadgeColor = (statut: string) => {
    switch (statut) {
      case 'en attente':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'en cours':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'terminé':
        return 'bg-gray-100 text-gray-800 border-gray-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const getTopParticipants = () => {
    if (!planification) return [];
    return planification.participants
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-8 w-64" />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
            </Card>
          </div>
          
          <div className="xl:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!planification) {
    return (
      <div className="text-center py-12">
        <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg">Planification introuvable</p>
        <Button onClick={() => navigate("/jeux")} className="mt-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour aux jeux
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* En-tête avec bouton retour */}
      <div className="flex items-center gap-4">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Détails de la planification</h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Contenu principal - 2 colonnes */}
        <div className="xl:col-span-2 space-y-6">
          {/* Informations principales de la planification */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Calendar className="h-5 w-5" />
                Informations de la planification
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Hash className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium text-gray-800">PIN:</span>
                    <span className="font-mono bg-orange-100 px-3 py-1 rounded-lg text-orange-800 font-bold">
                      {planification.pin}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800">Statut:</span>
                    <Badge variant="outline" className={getStatutBadgeColor(planification.statut)}>
                      {planification.statut}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-800">Type:</span>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                      {planification.type}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">Du {planification.date_debut} au {planification.date_fin}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">De {planification.heure_debut} à {planification.heure_fin}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Users className="h-4 w-4 text-orange-500" />
                    <span className="font-medium">
                      {planification.participants.length} / {planification.limite_participant} participants
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Classement des participants */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Trophy className="h-5 w-5" />
                Classement des participants
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {getTopParticipants().map((participant, index) => (
                  <div key={participant._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 font-bold">
                        {index + 1}
                      </div>
                      {index === 0 && <Trophy className="h-5 w-5 text-yellow-500" />}
                      {index === 1 && <Trophy className="h-5 w-5 text-gray-400" />}
                      {index === 2 && <Trophy className="h-5 w-5 text-orange-400" />}
                      <div>
                        <p className="font-semibold text-gray-900">
                          {participant.apprenant ? 
                            `${participant.apprenant.prenom} ${participant.apprenant.nom}` : 
                            'Participant anonyme'
                          }
                        </p>
                        {participant.apprenant && (
                          <p className="text-sm text-gray-600">{participant.apprenant.matricule}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-orange-100 text-orange-800 font-bold">
                        {participant.score} pts
                      </Badge>
                      <p className="text-xs text-gray-600 mt-1">
                        {participant.reponses.length} réponse(s)
                      </p>
                    </div>
                  </div>
                ))}
                
                {planification.participants.length === 0 && (
                  <div className="text-center py-8">
                    <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600">Aucun participant pour cette planification</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Questions et réponses détaillées */}
          {planification.participants.length > 0 && (
            <Card className="border-orange-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <CheckCircle2 className="h-5 w-5" />
                  Détails des réponses
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {planification.participants.slice(0, 3).map((participant) => (
                    <div key={participant._id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">
                          {participant.apprenant ? 
                            `${participant.apprenant.prenom} ${participant.apprenant.nom}` : 
                            'Participant anonyme'
                          }
                        </h4>
                        <Badge className="bg-orange-100 text-orange-800 font-bold">
                          {participant.score} pts
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        {participant.reponses.map((reponse) => (
                          <div key={reponse._id} className="bg-white p-3 rounded-lg border border-gray-200">
                            <div className="flex items-start justify-between mb-2">
                              <p className="font-medium text-gray-900 text-sm">
                                {reponse.question.libelle}
                              </p>
                              <div className="flex items-center gap-2">
                                <Clock className="h-3 w-3 text-gray-500" />
                                <span className="text-xs text-gray-600">{reponse.temps_reponse}s</span>
                              </div>
                            </div>
                            
                            {reponse.question.fichier && (
                              <div className="mb-2">
                                <GameImageWithLoader 
                                  src={reponse.question.fichier}
                                  alt="Question image"
                                  fallbackSrc=""
                                  className="h-32 w-full rounded-lg overflow-hidden"
                                />
                              </div>
                            )}
                            
                            <div className="flex items-center gap-2">
                              {reponse.etat === 1 ? (
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                              ) : (
                                <XCircle className="h-4 w-4 text-red-600" />
                              )}
                              <span className={`text-sm font-medium ${
                                reponse.etat === 1 ? "text-green-800" : "text-red-800"
                              }`}>
                                {reponse.reponse_apprenant}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar - 1 colonne */}
        <div className="xl:col-span-1 space-y-6">
          {/* Statistiques */}
          <Card className="border-orange-200 sticky top-6 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="text-lg text-orange-800 font-bold">Statistiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Participants</span>
                <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">
                  {planification.participants.length}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Limite</span>
                <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">
                  {planification.limite_participant}
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Score max</span>
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 font-bold">
                  {planification.participants.length > 0 ? 
                    Math.max(...planification.participants.map(p => p.score)) : 0
                  } pts
                </Badge>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Score moyen</span>
                <Badge className="bg-gray-100 text-gray-800 border-gray-300 font-bold">
                  {planification.participants.length > 0 ? 
                    Math.round(planification.participants.reduce((acc, p) => acc + p.score, 0) / planification.participants.length) : 0
                  } pts
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="text-lg text-orange-800 font-bold">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-6">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md"
                onClick={() => {/* TODO: Exporter résultats */}}
              >
                <Trophy className="h-4 w-4 mr-2" />
                Exporter résultats
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 font-medium"
                onClick={() => {/* TODO: Gérer planification */}}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Gérer la planification
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const PlanificationDetails = () => {
  return (
    <DashboardLayoutWithSidebar>
      <PlanificationDetailsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default PlanificationDetails;
