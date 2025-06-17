
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
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Enseignants",
      value: "8", 
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
      textColor: "text-emerald-600 dark:text-emerald-400"
    },
    {
      title: "Apprenants",
      value: "245",
      icon: Users,
      color: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
      textColor: "text-violet-600 dark:text-violet-400"
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
      color: "bg-gradient-to-br from-blue-500 to-indigo-500"
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
      color: "bg-gradient-to-br from-emerald-500 to-teal-500"
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
      color: "bg-gradient-to-br from-violet-500 to-purple-500"
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
      color: "bg-gradient-to-br from-orange-500 to-red-500"
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
      color: "bg-gradient-to-br from-cyan-500 to-blue-500"
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
      color: "bg-gradient-to-br from-pink-500 to-rose-500"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Facile":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400";
      case "Moyen":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400";
      case "Difficile":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-900/20 dark:text-slate-400";
    }
  };

  return (
    <div className="min-h-full bg-gray-50 dark:bg-slate-900">
      {/* En-tête avec accueil personnalisé */}
      <div className="mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
              {t("dashboard.title")}
            </h1>
            {user && (
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Bonjour <span className="font-semibold text-blue-600 dark:text-blue-400">{user.name}</span> ! 👋
              </p>
            )}
          </div>
        </div>
        
        {user?.ecole && (
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-slate-900 dark:text-white font-medium flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              {user.ecole.libelle}
            </p>
          </div>
        )}
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md bg-white dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.title}
              </CardTitle>
              <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{stat.value}</div>
              <div className={`text-sm font-medium ${stat.textColor} flex items-center gap-2`}>
                <TrendingUp className="h-4 w-4" />
                Actif
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section des jeux */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-4">
            <GamepadIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            Jeux disponibles
          </h2>
          <Button 
            onClick={() => navigate("/jeux")}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Plus className="h-5 w-5 mr-2" />
            Voir tous les jeux
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <Card key={game.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md overflow-hidden bg-white dark:bg-slate-800">
              <div className={`h-2 ${game.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {game.name}
                    </CardTitle>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      {game.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-xs font-medium">{game.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {game.category}
                  </Badge>
                  <Badge className={`text-xs ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </Badge>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
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
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group-hover:shadow-md transition-all text-white rounded-xl py-2"
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
        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer bg-white dark:bg-slate-800" onClick={() => navigate("/apprenants")}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-2">
                  Gérer les apprenants
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ajouter, modifier ou supprimer des apprenants
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-2 transition-all" />
            </div>
          </CardContent>
        </Card>

        <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md cursor-pointer bg-white dark:bg-slate-800" onClick={() => navigate("/enseignants")}>
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:scale-110 transition-transform">
                <GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  Gérer les enseignants
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Administrer l'équipe pédagogique
                </p>
              </div>
              <ArrowRight className="h-6 w-6 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
