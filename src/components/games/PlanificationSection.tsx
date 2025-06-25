
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Users, 
  Hash, 
  Play,
  Trophy,
  Star
} from "lucide-react";

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

interface PlanificationSectionProps {
  planifications: Planification[];
  jeuId: string;
}

export const PlanificationSection = ({ planifications, jeuId }: PlanificationSectionProps) => {
  const navigate = useNavigate();

  const getStatutBadgeColor = (statut: string) => {
    switch (statut) {
      case 'en attente':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'en cours':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'terminé':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const getTopParticipants = (participants: Participant[]) => {
    return participants
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  };

  const handleViewPlanification = (planificationId: string) => {
    navigate(`/planifications/${planificationId}`);
  };

  if (!planifications || planifications.length === 0) {
    return (
      <Card className="border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <Calendar className="h-5 w-5" />
            Planifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500">Aucune planification pour ce jeu</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-orange-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-700">
          <Calendar className="h-5 w-5" />
          Planifications ({planifications.length})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {planifications.map((planification) => (
            <div key={planification._id} className="border-2 border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-orange-50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className={`${getStatutBadgeColor(planification.statut)} text-sm font-semibold`}>
                    {planification.statut}
                  </Badge>
                  <Badge variant="secondary" className="text-sm bg-gray-100 text-gray-800 font-medium">
                    {planification.type}
                  </Badge>
                </div>
                <Button 
                  onClick={() => handleViewPlanification(planification._id)}
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 shadow-md"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Accéder
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Hash className="h-5 w-5 text-orange-500" />
                    <span className="font-semibold text-gray-800">PIN:</span>
                    <span className="font-mono bg-orange-100 px-3 py-1.5 rounded-lg text-orange-700 font-bold text-base">
                      {planification.pin}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">Du {planification.date_debut} au {planification.date_fin}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">De {planification.heure_debut} à {planification.heure_fin}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="font-medium">{planification.participants.length} / {planification.limite_participant} participants</span>
                  </div>
                  
                  {planification.participants.length > 0 && (
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-4 w-4 text-orange-500" />
                        <p className="text-sm font-semibold text-gray-800">Top participants</p>
                      </div>
                      <div className="space-y-2">
                        {getTopParticipants(planification.participants).map((participant, index) => (
                          <div key={participant._id} className="flex items-center justify-between text-sm bg-gray-50 rounded-lg p-2">
                            <span className="flex items-center gap-2 text-gray-900 font-medium">
                              {index === 0 && <Trophy className="h-4 w-4 text-yellow-500" />}
                              {index === 1 && <Trophy className="h-4 w-4 text-gray-400" />}
                              {index === 2 && <Trophy className="h-4 w-4 text-orange-400" />}
                              <span className="w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              {participant.apprenant.prenom} {participant.apprenant.nom}
                            </span>
                            <Badge variant="outline" className="text-sm font-bold text-orange-700 border-orange-300">
                              {participant.score} pts
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
