
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
  Trophy
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
        <div className="space-y-4">
          {planifications.map((planification) => (
            <div key={planification._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getStatutBadgeColor(planification.statut)}>
                    {planification.statut}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {planification.type}
                  </Badge>
                </div>
                <Button 
                  onClick={() => handleViewPlanification(planification._id)}
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Play className="h-4 w-4 mr-1" />
                  Accéder
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Hash className="h-4 w-4" />
                    <span className="font-medium">PIN:</span>
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded text-orange-600">
                      {planification.pin}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>Du {planification.date_debut} au {planification.date_fin}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>De {planification.heure_debut} à {planification.heure_fin}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{planification.participants.length} / {planification.limite_participant} participants</span>
                  </div>
                  
                  {planification.participants.length > 0 && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-700 mb-2">Top participants:</p>
                      <div className="space-y-1">
                        {getTopParticipants(planification.participants).map((participant, index) => (
                          <div key={participant._id} className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1">
                              {index === 0 && <Trophy className="h-3 w-3 text-yellow-500" />}
                              {index === 1 && <Trophy className="h-3 w-3 text-gray-400" />}
                              {index === 2 && <Trophy className="h-3 w-3 text-orange-400" />}
                              {participant.apprenant.prenom} {participant.apprenant.nom}
                            </span>
                            <Badge variant="outline" className="text-xs">
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
