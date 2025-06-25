
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  reponses: any[];
  typeQuestion: any;
  point: Point;
  jeu: string;
  date: string;
}

interface JeuDetailsStatisticsProps {
  questions: Question[];
  planifications: Planification[];
}

export const JeuDetailsStatistics = ({ questions, planifications }: JeuDetailsStatisticsProps) => {
  const getTotalPoints = () => {
    return questions.reduce((total, question) => total + (question.point?.valeur || 0), 0);
  };

  const getTotalParticipants = () => {
    return planifications.reduce((total, plan) => total + plan.participants.length, 0);
  };

  return (
    <Card className="border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
        <CardTitle className="text-lg text-orange-800 font-bold">Statistiques</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-800">Total questions</span>
          <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">{questions.length}</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-800">Points totaux</span>
          <Badge className="bg-orange-100 text-orange-800 border-orange-300 font-bold">
            {getTotalPoints()} pts
          </Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-800">Planifications</span>
          <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">{planifications.length}</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-800">Participants</span>
          <Badge variant="outline" className="text-gray-900 font-bold border-gray-300">
            {getTotalParticipants()}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
