
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowLeft, 
  Gamepad2, 
  Users, 
  Calendar, 
  Clock, 
  Trophy, 
  HelpCircle,
  CheckCircle2,
  XCircle,
  Phone,
  User,
  MapPin
} from "lucide-react";
import { api } from "@/services/apiClient";
import { GameImageWithLoader } from "@/components/games/GameImageWithLoader";
import { PlanificationSection } from "@/components/games/PlanificationSection";

interface Reponse {
  _id: string;
  etat: boolean;
  reponse_texte: string;
  question: string;
  date: string;
}

interface TypeQuestion {
  _id: string;
  libelle: string;
  description: string;
  reference: string;
  date: string;
}

interface Point {
  _id: string;
  nature: string;
  valeur: number;
  description: string;
  date: string;
}

interface Question {
  _id: string;
  libelle: string;
  temps: number;
  limite_response: boolean;
  reponses: Reponse[];
  typeQuestion: TypeQuestion;
  point: Point;
  jeu: string;
  date: string;
}

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone: string;
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
  ecole?: Ecole;
  date: string;
}

interface Participant {
  _id: string;
  score: number;
  apprenant: {
    _id: string;
    nom: string;
    prenom: string;
    matricule: string;
  };
}

interface Planification {
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
}

interface JeuDetails {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  planification: Planification[];
  questions: Question[];
  ecole: Ecole;
  date: string;
}

interface JeuDetailsResponse {
  success: boolean;
  message: string;
  data: JeuDetails;
}

const JeuDetailsContent = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useLanguage();
  const [jeu, setJeu] = useState<JeuDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const defaultGameImage = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center";

  const fetchJeuDetails = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      console.log("Récupération des détails du jeu:", `/api/jeux/${id}`);
      
      const response = await api.get(`/api/jeux/${id}`);
      
      console.log("Réponse API détails jeu:", response.data);

      if (response.data.success) {
        setJeu(response.data.data);
      } else {
        throw new Error(response.data.message || "Erreur lors de la récupération du jeu");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jeu:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer les détails du jeu",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJeuDetails();
  }, [id]);

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

  const getTypeQuestionLabel = (type: string) => {
    switch (type) {
      case 'REPONSE_COURTE':
        return 'Réponse courte';
      case 'CHOIX_UNIQUE':
        return 'Choix unique';
      case 'CHOIX_MULTIPLE':
        return 'Choix multiple';
      default:
        return type;
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-800 border-red-300';
      case 'enseignant':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
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

  const getTotalPoints = () => {
    if (!jeu) return 0;
    return jeu.questions.reduce((total, question) => total + (question.point?.valeur || 0), 0);
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-8 w-64" />
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-64 w-full rounded-lg" />
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

  if (!jeu) {
    return (
      <div className="text-center py-12">
        <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg">Jeu introuvable</p>
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
          onClick={() => navigate("/jeux")}
          className="flex items-center gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Détails du jeu</h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Contenu principal - 3 colonnes */}
        <div className="xl:col-span-3 space-y-6">
          {/* Informations principales du jeu */}
          <Card className="border-orange-200 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Image du jeu */}
                <div>
                  <GameImageWithLoader 
                    src={jeu.image} 
                    alt={jeu.titre}
                    fallbackSrc={defaultGameImage}
                    className="relative h-64 rounded-xl overflow-hidden shadow-md border border-orange-100"
                  />
                </div>
                
                {/* Informations du jeu */}
                <div className="space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {jeu.titre}
                    </h1>
                    <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">Créé le {formatDate(jeu.date)}</span>
                    </div>
                  </div>
                  
                  {/* Créateur du jeu mis en valeur */}
                  <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-2 mb-3">
                      <User className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-semibold text-orange-800">Créé par</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-900 text-lg">
                          {jeu.createdBy.prenom} {jeu.createdBy.nom}
                        </p>
                        <p className="text-sm text-gray-700 font-mono bg-white px-2 py-1 rounded mt-1 inline-block">
                          {jeu.createdBy.matricule}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{jeu.createdBy.email}</p>
                      </div>
                      <Badge variant="outline" className={getRoleBadgeColor(jeu.createdBy.role)}>
                        {getRoleLabel(jeu.createdBy.role)}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Informations de l'école */}
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-800">École</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{jeu.ecole.libelle}</p>
                      <p className="text-sm text-gray-700 font-medium">{jeu.ecole.ville}</p>
                      {jeu.ecole.telephone && (
                        <div className="flex items-center gap-1 mt-1">
                          <Phone className="h-3 w-3 text-gray-500" />
                          <span className="text-sm text-gray-700">{jeu.ecole.telephone}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Planifications */}
          <PlanificationSection 
            planifications={jeu.planification}
            jeuId={jeu._id}
          />

          {/* Questions */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <HelpCircle className="h-5 w-5" />
                Questions ({jeu.questions.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {jeu.questions.map((question, index) => (
                  <div key={question._id} className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 bg-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-800 border-blue-300 font-medium">
                            Question {index + 1}
                          </Badge>
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                            {getTypeQuestionLabel(question.typeQuestion.libelle)}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-lg">
                          {question.libelle}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-700 mb-1">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="font-bold">{question.temps}s</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Trophy className="h-4 w-4 text-orange-500" />
                          <span className="text-orange-700 font-bold">{question.point?.valeur || 0} pts</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Réponses */}
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        Réponses ({question.reponses.length}):
                      </p>
                      {question.reponses.map((reponse) => (
                        <div key={reponse._id} className="flex items-center gap-3 text-sm p-3 rounded-lg bg-gray-50 border border-gray-200">
                          {reponse.etat ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          )}
                          <span className={`font-medium ${reponse.etat ? "text-green-800" : "text-red-800"}`}>
                            {reponse.reponse_texte}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                <span className="text-sm font-medium text-gray-800">Total questions</span>
                <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">{jeu.questions.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Points totaux</span>
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 font-bold">
                  {getTotalPoints()} pts
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Planifications</span>
                <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">{jeu.planification.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-800">Participants</span>
                <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">
                  {jeu.planification.reduce((total, plan) => total + plan.participants.length, 0)}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Actions rapides */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="text-lg text-orange-800 font-bold">Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-6">
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-md"
                onClick={() => navigate(`/jeux/${jeu._id}/edit`)}
              >
                <Gamepad2 className="h-4 w-4 mr-2" />
                Modifier le jeu
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-50 font-medium"
                onClick={() => navigate(`/jeux/${jeu._id}/planifications/new`)}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Nouvelle planification
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

const JeuDetails = () => {
  return (
    <DashboardLayoutWithSidebar>
      <JeuDetailsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default JeuDetails;
