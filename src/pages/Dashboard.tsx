import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  GraduationCap, 
  GamepadIcon,
  Plus,
  Play,
  Star,
  Clock,
  Award,
  TrendingUp,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";

const DashboardContent = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const stats = [
    {
      title: "Jeux disponibles",
      value: "12",
      icon: GamepadIcon,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600"
    },
    {
      title: "Enseignants",
      value: "8", 
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "Apprenants",
      value: "245",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    }
  ];

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

  return (
    <div className="space-y-8">
      {/* En-tête avec accueil personnalisé */}
      <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t("dashboard.title")}
            </h1>
            {user && (
              <p className="text-xl text-gray-600">
                Bonjour <span className="font-semibold text-orange-600">{user.name}</span> ! 👋
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <div className={`p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className={`text-sm font-medium ${stat.textColor} flex items-center gap-2`}>
                <TrendingUp className="h-4 w-4" />
                Actif
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section des jeux */}
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

      {/* Actions rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 cursor-pointer bg-white" onClick={() => navigate("/apprenants")}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-green-50 rounded-2xl group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-2">
                  Gérer les apprenants
                </h3>
                <p className="text-gray-600">
                  Ajouter, modifier ou supprimer des apprenants
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-green-600 group-hover:translate-x-2 transition-all" />
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 cursor-pointer bg-white" onClick={() => navigate("/enseignants")}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-50 rounded-2xl group-hover:scale-110 transition-transform">
                <GraduationCap className="h-10 w-10 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  Gérer les enseignants
                </h3>
                <p className="text-gray-600">
                  Administrer l'équipe pédagogique
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayoutWithSidebar>
      <DashboardContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Dashboard;
