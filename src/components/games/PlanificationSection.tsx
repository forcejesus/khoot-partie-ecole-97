
import React, { useState } from "react";
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
  Star,
  Eye,
  ChevronDown,
  ChevronUp
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
  const [expandedPlanifications, setExpandedPlanifications] = useState<Set<string>>(new Set());

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

  const toggleExpanded = (planificationId: string) => {
    const newExpanded = new Set(expandedPlanifications);
    if (newExpanded.has(planificationId)) {
      newExpanded.delete(planificationId);
    } else {
      newExpanded.add(planificationId);
    }
    setExpandedPlanifications(newExpanded);
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
          {planifications.map((planification) => {
            const isExpanded = expandedPlanifications.has(planification._id);
            
            return (
              <div key={planification._id} className="border-2 border-orange-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-white to-orange-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className={`${getStatutBadgeColor(planification.statut)} text-sm font-semibold`}>
                        {planification.statut}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Hash className="h-4 w-4 text-orange-500" />
                      <span className="font-mono bg-orange-100 px-2 py-1 rounded text-orange-700 font-bold">
                        {planification.pin}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Calendar className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{planification.date_debut}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-700">
                      <Clock className="h-4 w-4 text-orange-500" />
                      <span className="font-medium">{planification.heure_debut} - {planification.heure_fin}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button 
                      onClick={() => handleViewPlanification(planification._id)}
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 shadow-md"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Accéder
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(planification._id)}
                      className="text-orange-600 hover:bg-orange-100"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="h-4 w-4 mr-1" />
                          Moins
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-4 w-4 mr-1" />
                          Plus
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-orange-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                          <Calendar className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">Fin: {planification.date_fin}</span>
                        </div>
                        <Badge variant="secondary" className="text-sm bg-gray-100 text-gray-800 font-medium">
                          {planification.type}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-700">
                          <Users className="h-4 w-4 text-orange-500" />
                          <span className="font-medium">{planification.participants.length} / {planification.limite_participant} participants</span>
                        </div>
                        
                        {planification.participants.length > 0 && (
                          <div className="bg-white rounded-lg p-3 border border-orange-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="h-4 w-4 text-orange-500" />
                              <p className="text-sm font-semibold text-gray-800">Top participants</p>
                            </div>
                            <div className="space-y-1">
                              {getTopParticipants(planification.participants).map((participant, index) => (
                                <div key={participant._id} className="flex items-center justify-between text-sm bg-gray-50 rounded p-2">
                                  <span className="flex items-center gap-2 text-gray-900 font-medium">
                                    {index === 0 && <Trophy className="h-3 w-3 text-yellow-500" />}
                                    {index === 1 && <Trophy className="h-3 w-3 text-gray-400" />}
                                    {index === 2 && <Trophy className="h-3 w-3 text-orange-400" />}
                                    <span className="w-4 h-4 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs font-bold">
                                      {index + 1}
                                    </span>
                                    {participant.apprenant.prenom} {participant.apprenant.nom}
                                  </span>
                                  <Badge variant="outline" className="text-xs font-bold text-orange-700 border-orange-300">
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
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
