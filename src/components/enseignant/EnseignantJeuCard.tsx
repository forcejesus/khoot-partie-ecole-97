
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Users, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GameImageWithLoader } from "@/components/games/GameImageWithLoader";
import { EnseignantJeu } from "@/services/enseignantJeuxService";
import { EnseignantJeuPlanificationModal } from "./EnseignantJeuPlanificationModal";

interface EnseignantJeuCardProps {
  jeu: EnseignantJeu;
  defaultGameImage: string;
}

export const EnseignantJeuCard = ({ jeu, defaultGameImage }: EnseignantJeuCardProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewPlanifications = () => {
    setIsModalOpen(true);
  };

  return (
    <>
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
                    <span className="font-semibold text-gray-800">Planifications disponibles</span>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-4 border border-orange-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-orange-800">
                          {jeu.planification.length} planification{jeu.planification.length > 1 ? 's' : ''} active{jeu.planification.length > 1 ? 's' : ''}
                        </span>
                      </div>
                      <Badge className="bg-orange-200 text-orange-800 border-orange-300">
                        Disponible
                      </Badge>
                    </div>
                    
                    <Button
                      onClick={handleViewPlanifications}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                      size="lg"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Voir les planifications
                      <Eye className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardHeader>
      </Card>

      <EnseignantJeuPlanificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jeu={jeu}
      />
    </>
  );
};
