
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  Activity,
  Calendar,
  Target,
  Star,
  Award,
  Zap,
  BarChart3,
  PieChart
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const stats = [
    {
      title: t("dashboard.stats.activeStudents"),
      value: "245",
      change: "+12%",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: t("dashboard.stats.availableGames"), 
      value: "12",
      change: "+3",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: t("dashboard.stats.successRate"),
      value: "87%", 
      change: "+5%",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600"
    },
    {
      title: t("dashboard.stats.averageProgress"),
      value: "+12%",
      change: "Cette semaine",
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    }
  ];

  const quickActions = [
    {
      title: "Ajouter des apprenants",
      description: "Inscrire de nouveaux élèves",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      path: "/apprenants"
    },
    {
      title: "Gérer les enseignants",
      description: "Administrer l'équipe pédagogique",
      icon: Award,
      color: "from-green-500 to-green-600",
      path: "/enseignants"
    },
    {
      title: "Voir les jeux",
      description: "Explorer les activités disponibles",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      path: "/jeux"
    },
    {
      title: "Paramètres école",
      description: "Configurer votre établissement",
      icon: Activity,
      color: "from-orange-500 to-red-500",
      path: "/settings"
    }
  ];

  const recentActivities = [
    { 
      action: "Nouvel apprenant inscrit", 
      user: "Marie Dupont", 
      time: "Il y a 2h",
      icon: Users,
      color: "text-blue-500"
    },
    { 
      action: "Jeu complété", 
      user: "Classe de CM2", 
      time: "Il y a 4h",
      icon: Trophy,
      color: "text-green-500"
    },
    { 
      action: "Nouvel enseignant ajouté", 
      user: "Prof. Martin", 
      time: "Hier",
      icon: Award,
      color: "text-purple-500"
    },
    { 
      action: "Performance analysée", 
      user: "Classe de CE1", 
      time: "Il y a 2 jours",
      icon: BarChart3,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative">
      {/* Motifs de fond décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200 rounded-full blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 p-6 space-y-8">
        {/* En-tête avec accueil personnalisé */}
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-6 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="w-6 h-2 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
            {t("dashboard.title")}
          </h1>
          
          {user && (
            <div className="space-y-2">
              <p className="text-xl text-gray-600">
                Bonjour <span className="font-bold text-blue-600">{user.name}</span> ! 👋
              </p>
              {user.ecole && (
                <p className="text-lg text-gray-500 font-medium">
                  📚 {user.ecole.libelle}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Statistiques améliorées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50"></div>
              
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-3 rounded-xl ${stat.bgColor} shadow-sm group-hover:shadow-md transition-shadow`}>
                  <stat.icon className={`h-5 w-5 ${stat.textColor}`} />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className={`text-sm font-medium ${stat.textColor} flex items-center gap-1`}>
                  <TrendingUp className="h-3 w-3" />
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions rapides */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
            <Zap className="h-6 w-6 text-blue-500" />
            Actions rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/90 backdrop-blur-sm overflow-hidden"
                onClick={() => navigate(action.path)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                <CardContent className="p-6 relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
                  <p className="text-gray-600 text-sm">{action.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section principale avec contenu enrichi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activités récentes */}
          <Card className="lg:col-span-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <Activity className="h-6 w-6 text-blue-500" />
                Activités récentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className={`p-2 rounded-lg bg-white shadow-sm`}>
                      <activity.icon className={`h-4 w-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Résumé de performance */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 flex items-center gap-3">
                <PieChart className="h-6 w-6 text-green-500" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">87%</div>
                  <p className="text-gray-600">Taux de réussite moyen</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Mathématiques</span>
                    <span className="text-sm font-medium text-blue-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Français</span>
                    <span className="text-sm font-medium text-green-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sciences</span>
                    <span className="text-sm font-medium text-purple-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full w-[78%]"></div>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg"
                  onClick={() => navigate("/analytics")}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Voir les détails
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
