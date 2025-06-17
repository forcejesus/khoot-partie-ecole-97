
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
  Calendar,
  BookOpen
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Données simulées pour les statistiques
  const stats = [
    {
      title: "Jeux disponibles",
      value: "12",
      icon: GamepadIcon,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400"
    },
    {
      title: "Enseignants",
      value: "8", 
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Apprenants",
      value: "245",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400"
    }
  ];

  // Liste des jeux simulée
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
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
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
      color: "bg-gradient-to-br from-green-500 to-green-600"
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
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "Histoire CM2",
      description: "La révolution française expliquée",
      category: "Histoire",
      difficulty: "Difficile",
      players: 19,
      duration: "30 min",
      rating: 4.5,
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    },
    {
      id: 5,
      name: "Géographie CE1",
      description: "Les continents et océans",
      category: "Géographie",
      difficulty: "Facile",
      players: 38,
      duration: "18 min",
      rating: 4.7,
      color: "bg-gradient-to-br from-teal-500 to-teal-600"
    },
    {
      id: 6,
      name: "Anglais CM1",
      description: "Vocabulaire et phrases simples",
      category: "Langues",
      difficulty: "Moyen",
      players: 25,
      duration: "22 min",
      rating: 4.4,
      color: "bg-gradient-to-br from-red-500 to-red-600"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "Moyen":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      case "Difficile":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  return (
    <div className="min-h-full bg-background">
      {/* En-tête avec accueil personnalisé */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
            <Award className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {t("dashboard.title")}
            </h1>
            {user && (
              <p className="text-lg text-muted-foreground">
                Bonjour <span className="font-semibold text-purple-600">{user.name}</span> ! 👋
              </p>
            )}
          </div>
        </div>
        
        {user?.ecole && (
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10 p-4 rounded-lg border">
            <p className="text-foreground font-medium flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-600" />
              {user.ecole.libelle}
            </p>
          </div>
        )}
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-3 rounded-lg ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                <stat.icon className={`h-5 w-5 ${stat.textColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className={`text-sm font-medium ${stat.textColor} flex items-center gap-1`}>
                <TrendingUp className="h-3 w-3" />
                Actif
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section des jeux */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
            <GamepadIcon className="h-6 w-6 text-purple-600" />
            Jeux disponibles
          </h2>
          <Button 
            onClick={() => navigate("/jeux")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Voir tous les jeux
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden">
              <div className={`h-2 ${game.color}`}></div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors">
                      {game.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
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
                  <Badge variant="secondary" className="text-xs">
                    {game.category}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{game.players} joueurs</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{game.duration}</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 group-hover:shadow-md transition-all"
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
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer" onClick={() => navigate("/apprenants")}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-green-600 transition-colors">
                  Gérer les apprenants
                </h3>
                <p className="text-muted-foreground">
                  Ajouter, modifier ou supprimer des apprenants
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer" onClick={() => navigate("/enseignants")}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:scale-110 transition-transform">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-blue-600 transition-colors">
                  Gérer les enseignants
                </h3>
                <p className="text-muted-foreground">
                  Administrer l'équipe pédagogique
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
