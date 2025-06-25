
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Clock, Trophy, CheckCircle2, XCircle } from "lucide-react";

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

interface JeuDetailsQuestionsProps {
  questions: Question[];
}

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

export const JeuDetailsQuestions = ({ questions }: JeuDetailsQuestionsProps) => {
  return (
    <Card className="border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <HelpCircle className="h-5 w-5" />
          Questions ({questions.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {questions.map((question, index) => (
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
  );
};
