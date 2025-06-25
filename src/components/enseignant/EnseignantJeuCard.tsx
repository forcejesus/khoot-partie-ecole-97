
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Users, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GameImageWithLoader } from "@/components/games/GameImageWithLoader";
import { EnseignantJeu } from "@/services/enseignantJeuxService";

interface EnseignantJeuCardProps {
  jeu: EnseignantJeu;
  defaultGameImage: string;
}

export const EnseignantJeuCard = ({ jeu, defaultGameImage }: EnseignantJeuCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl group bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="space-y-4">
        <GameImageWithLoader
          src={jeu.image}
          alt={jeu.titre}
          fallbackSrc={defaultGameImage}
          className="relative h-48 rounded-lg overflow-hidden"
        />
        
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-xl text-gray-900 group-hover:text-orange-600 transition-colors">
              {jeu.titre}
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 bg-blue-50 rounded-lg p-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="font-medium text-blue-700">{jeu.questions.length} questions</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 rounded-lg p-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium text-green-700">{jeu.planification.length} planification(s)</span>
            </div>
          </div>

          {jeu.planification && jeu.planification.length > 0 && (
            <div className="border-t-2 border-orange-100 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text-orange-500" />
                  <span className="font-semibold text-gray-800">Planifications actives</span>
                </div>
                {jeu.planification.map((plan) => (
                  <div key={plan._id} className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-semibold ${
                          plan.statut === 'actif' ? 'bg-green-50 text-green-700 border-green-200' : 
                          plan.statut === 'en attente' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        {plan.statut}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Users className="h-3 w-3" />
                        <span>{plan.participants.length} participants</span>
                      </div>
                    </div>
                    <Button
                      onClick={() => navigate(`/planifications/${plan._id}`)}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Voir la planification
                      <Eye className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};
