
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
  Phone
} from "lucide-react";
import { api } from "@/services/apiClient";

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

interface JeuDetails {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: any | null;
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
      
      const response = await api.get<JeuDetailsResponse>(`/api/jeux/${id}`);
      
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
            </Card>
          </div>
          
          <div className="space-y-4">
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
        <p className="text-gray-500 text-lg">Jeu introuvable</p>
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
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Détails du jeu</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contenu principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informations du jeu */}
          <Card className="border-orange-200">
            <CardHeader>
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
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
              </div>
              
              <CardTitle className="text-2xl font-bold text-orange-700">
                {jeu.titre}
              </CardTitle>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{jeu.ecole.libelle}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(jeu.date)}</span>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Questions */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-orange-600" />
                Questions ({jeu.questions.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {jeu.questions.map((question, index) => (
                  <div key={question._id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            Question {index + 1}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {getTypeQuestionLabel(question.typeQuestion.libelle)}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {question.libelle}
                        </h4>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                          <Clock className="h-4 w-4" />
                          <span>{question.temps}s</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-orange-600">
                          <Trophy className="h-4 w-4" />
                          <span>{question.point?.valeur || 0} pts</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Réponses */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">
                        Réponses ({question.reponses.length}):
                      </p>
                      {question.reponses.map((reponse) => (
                        <div key={reponse._id} className="flex items-center gap-2 text-sm">
                          {reponse.etat ? (
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-600" />
                          )}
                          <span className={reponse.etat ? "text-green-700" : "text-red-700"}>
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

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Statistiques */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg text-orange-700">Statistiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total questions</span>
                <Badge variant="outline">{jeu.questions.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Points totaux</span>
                <Badge className="bg-orange-100 text-orange-700">
                  {getTotalPoints()} pts
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Créé le</span>
                <span className="text-sm font-medium">{formatDate(jeu.date)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Informations de l'école */}
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-lg text-orange-700">École</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">{jeu.ecole.libelle}</p>
                <p className="text-sm text-gray-600">{jeu.ecole.ville}</p>
              </div>
              {jeu.ecole.telephone && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{jeu.ecole.telephone}</span>
                </div>
              )}
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
