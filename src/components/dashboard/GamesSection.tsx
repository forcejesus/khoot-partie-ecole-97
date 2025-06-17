
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GamepadIcon,
  Plus,
  Play,
  Star,
  Clock,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const games = [
  {
    id: 1,
    name: "Mathématiques CE1",
    description: "Apprentissage des additions et soustractions",
    category: "Mathématiques",
    difficulty: "Facile",
    players: 45,
    duration: "15 min",
    rating: 4.8,
    color: "bg-gradient-to-br from-orange-500 to-orange-600"
  },
  {
    id: 2,
    name: "Français CM1",
    description: "Conjugaison et grammaire interactive",
    category: "Français",
    difficulty: "Moyen",
    players: 32,
    duration: "20 min",
    rating: 4.6,
    color: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    id: 3,
    name: "Sciences CE2",
    description: "Découverte du système solaire",
    category: "Sciences",
    difficulty: "Facile",
    players: 28,
    duration: "25 min",
    rating: 4.9,
    color: "bg-gradient-to-br from-green-500 to-green-600"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Facile":
      return "bg-green-100 text-green-800";
    case "Moyen":
      return "bg-yellow-100 text-yellow-800";
    case "Difficile":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const GamesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-4">
          <GamepadIcon className="h-8 w-8 text-orange-600" />
          Jeux disponibles
        </h2>
        <Button 
          onClick={() => navigate("/jeux")}
          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-xl shadow-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Voir tous les jeux
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-200 overflow-hidden bg-white">
            <div className={`h-2 ${game.color}`}></div>
            
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {game.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    {game.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-xs font-medium">{game.rating}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                  {game.category}
                </Badge>
                <Badge className={`text-xs ${getDifficultyColor(game.difficulty)}`}>
                  {game.difficulty}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{game.players} joueurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{game.duration}</span>
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 group-hover:shadow-md transition-all text-white rounded-xl py-2"
                onClick={() => navigate("/jeux")}
              >
                <Play className="h-4 w-4 mr-2" />
                Lancer le jeu
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
