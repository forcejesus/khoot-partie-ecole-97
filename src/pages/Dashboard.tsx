
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BookOpen, Trophy, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  const stats = [
    {
      title: t("dashboard.stats.activeStudents"),
      value: "245",
      icon: Users,
      color: "from-orange-500 to-red-500",
      bgPattern: "bg-tribal-dots"
    },
    {
      title: t("dashboard.stats.availableGames"), 
      value: "12",
      icon: BookOpen,
      color: "from-african-gold to-african-ochre",
      bgPattern: "bg-kente-stripes"
    },
    {
      title: t("dashboard.stats.successRate"),
      value: "87%", 
      icon: Trophy,
      color: "from-african-terracotta to-african-sunset",
      bgPattern: "bg-mask-texture"
    },
    {
      title: t("dashboard.stats.averageProgress"),
      value: "+12%",
      icon: TrendingUp,
      color: "from-green-500 to-african-savanna",
      bgPattern: "bg-african-pattern"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête avec ornements africains */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            {t("dashboard.title")}
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto rounded-full shadow-african" />
          
          {user && (
            <p className="text-xl text-gray-700 mt-6 font-medium">
              {t("dashboard.welcome")}, <span className="text-orange-600 font-bold">{user.name}</span> !
            </p>
          )}
        </div>

        {/* Statistiques avec thème africain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="group border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden shadow-african hover:shadow-tribal transition-all duration-300">
              {/* Bordure colorée africaine */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${stat.color}`}></div>
              
              {/* Motif de fond */}
              <div className={`absolute inset-0 opacity-5 ${stat.bgPattern}`}></div>
              
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-card`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="text-3xl font-bold text-gray-900 font-african">{stat.value}</div>
                
                {/* Ornement décoratif */}
                <div className="flex items-center mt-3">
                  <div className="w-3 h-3 bg-african-gold rounded-full mr-2"></div>
                  <div className="w-4 h-1 bg-african-kente rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contenu principal avec style africain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50/95 to-red-50/95 backdrop-blur-sm relative overflow-hidden shadow-african">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-red-500"></div>
            <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-gray-800 font-african flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
                {t("dashboard.recentActivity")}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600">
                {t("dashboard.recentActivityDesc")}
              </p>
              
              {/* Motifs décoratifs */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-african-gold rounded-full"></div>
                  <div className="w-4 h-1 bg-african-kente rounded-full"></div>
                  <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50/95 to-orange-50/95 backdrop-blur-sm relative overflow-hidden shadow-african">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <div className="absolute inset-0 opacity-5 bg-kente-stripes"></div>
            
            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl font-bold text-gray-800 font-african flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Trophy className="h-4 w-4 text-white" />
                </div>
                {t("dashboard.performance")}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-600">
                {t("dashboard.performanceDesc")}
              </p>
              
              {/* Motifs décoratifs */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-african-ochre rounded-full"></div>
                  <div className="w-4 h-1 bg-african-savanna rounded-full"></div>
                  <div className="w-3 h-3 bg-african-gold rounded-full"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
