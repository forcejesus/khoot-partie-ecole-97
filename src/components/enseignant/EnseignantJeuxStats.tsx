
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, HelpCircle, Calendar, Clock } from "lucide-react";
import { GameStatistics } from "@/services/enseignantJeuxService";

interface EnseignantJeuxStatsProps {
  statistics: GameStatistics;
}

export const EnseignantJeuxStats = ({ statistics }: EnseignantJeuxStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card className="border-orange-200 bg-gradient-to-br from-blue-50 to-blue-100">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Gamepad2 className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">Total Jeux</span>
          </div>
          <p className="text-3xl font-bold text-blue-700">{statistics.totalJeux}</p>
        </CardContent>
      </Card>
      
      <Card className="border-orange-200 bg-gradient-to-br from-green-50 to-green-100">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-green-800">Avec Questions</span>
          </div>
          <p className="text-3xl font-bold text-green-700">{statistics.jeuxAvecQuestions}</p>
        </CardContent>
      </Card>
      
      <Card className="border-orange-200 bg-gradient-to-br from-purple-50 to-purple-100">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Total Planifications</span>
          </div>
          <p className="text-3xl font-bold text-purple-700">{statistics.totalPlanifications || 0}</p>
        </CardContent>
      </Card>
      
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Dernier Créé</span>
          </div>
          <div className="bg-orange-200 rounded-lg p-2">
            <p className="text-lg font-bold text-orange-800">
              {new Date(statistics.dernierJeuCree).toLocaleDateString('fr-FR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </p>
            <p className="text-xs text-orange-600">
              {new Date(statistics.dernierJeuCree).toLocaleDateString('fr-FR', {
                weekday: 'long'
              })}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
