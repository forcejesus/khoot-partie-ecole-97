
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ApprenantsList } from "@/components/ApprenantsList";
import { EnseignantsList } from "@/components/EnseignantsList";
import { JeuxList } from "@/components/JeuxList";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, GraduationCap, LogOut, GamepadIcon, School, 
  MapPin, BarChart, LineChart, PieChart, TrendingUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";
import { motion } from "framer-motion";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [totalApprenants, setTotalApprenants] = useState(0);
  const [totalEnseignants, setTotalEnseignants] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("apprenants");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Récupère les statistiques
  const fetchStats = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir les statistiques",
        });
        return;
      }

      // Récupération des jeux
      const gamesResponse = await axios.get(
        "http://kahoot.nos-apps.com/api/jeux",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (gamesResponse.data.success) {
        setTotalGames(gamesResponse.data.data.length);
      }

      // Récupération des apprenants et enseignants depuis les données de l'école
      const userDataStr = localStorage.getItem("user");
      if (userDataStr) {
        const userData = JSON.parse(userDataStr);
        const apprenantResponse = await axios.get(
          "http://kahoot.nos-apps.com/api/apprenant",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const enseignantResponse = await axios.get(
          "http://kahoot.nos-apps.com/api/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (apprenantResponse.data.success) {
          const filteredApprenants = apprenantResponse.data.data.filter(
            (apprenant: any) => apprenant.ecole._id === userData.ecole._id
          );
          setTotalApprenants(filteredApprenants.length);
        }

        if (enseignantResponse.data.success) {
          const filteredEnseignants = enseignantResponse.data.data.filter(
            (enseignant: any) => 
              enseignant.ecole === userData.ecole._id && 
              enseignant.statut.toLowerCase() === "enseignant"
          );
          setTotalEnseignants(filteredEnseignants.length);
        }
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer les statistiques",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Gère la déconnexion
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // Met à jour le nombre total d'apprenants
  const handleApprenantChange = () => {
    fetchStats();
  };

  // Met à jour le nombre total d'enseignants
  const handleEnseignantChange = () => {
    fetchStats();
  };

  // Effet au chargement du composant
  useEffect(() => {
    fetchStats();
  }, []);

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    description,
    color = "from-blue-500 to-blue-600",
    chartIcon
  }: { 
    title: string; 
    value: number; 
    icon: React.ElementType; 
    description?: string;
    color?: string;
    chartIcon?: React.ReactNode;
  }) => (
    <motion.div
      variants={itemVariants}
      className="h-full"
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <CardHeader className={`flex flex-row items-center justify-between pb-2 bg-gradient-to-r ${color} text-white`}>
          <CardTitle className="text-lg font-medium">
            {title}
          </CardTitle>
          <Icon className="h-5 w-5" />
        </CardHeader>
        <CardContent className="pt-6">
          {isLoading ? (
            <Skeleton className="h-8 w-20" />
          ) : (
            <>
              <div className="text-3xl font-bold">{value}</div>
              {description && <CardDescription className="text-sm text-muted-foreground mt-1">{description}</CardDescription>}
              {chartIcon && <div className="mt-4">{chartIcon}</div>}
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );

  const SchoolInfoCard = () => (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="col-span-full bg-gradient-to-r from-purple-50 to-indigo-50 border-none mb-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-purple-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-indigo-100 rounded-full opacity-70"></div>
        <CardContent className="pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl text-white">
                <School className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{user?.ecole?.libelle}</h2>
                <p className="text-muted-foreground">Tableau de bord administratif</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {user?.ecole?.adresse && (
                <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">{user.ecole.adresse}</span>
                </div>
              )}
              {user?.ecole?.ville && (
                <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
                  <MapPin className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">{user.ecole.ville}</span>
                </div>
              )}
              <Button variant="outline" onClick={handleLogout} className="ml-2 bg-white">
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  // Graphiques simples pour les statistiques
  const SimpleBarChart = () => (
    <div className="flex items-end h-12 gap-1 mt-2">
      {[40, 70, 30, 85, 50, 65, 75, 60, 90].map((h, i) => (
        <div 
          key={i} 
          className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-sm" 
          style={{height: `${h}%`}}
        />
      ))}
    </div>
  );

  const SimpleLineChart = () => (
    <svg className="w-full h-12 mt-2" viewBox="0 0 100 30">
      <path 
        d="M0,20 L10,18 L20,15 L30,25 L40,10 L50,15 L60,5 L70,20 L80,15 L90,10 L100,5" 
        fill="none" 
        stroke="#ec4899" 
        strokeWidth="2" 
      />
    </svg>
  );

  const SimplePieChart = () => (
    <div className="flex justify-center mt-2">
      <div className="w-12 h-12 rounded-full bg-conic-gradient from-purple-500 via-pink-500 to-indigo-500 border-4 border-white shadow-lg" />
    </div>
  );

  return (
    <div className="container mx-auto py-8">
      <SchoolInfoCard />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-4 md:grid-cols-4 mb-8"
      >
        <StatCard 
          title="Apprenants"
          value={totalApprenants}
          icon={Users}
          description="Apprenants inscrits"
          color="from-purple-500 to-indigo-600"
          chartIcon={<SimpleBarChart />}
        />
        <StatCard 
          title="Enseignants"
          value={totalEnseignants}
          icon={GraduationCap}
          description="Enseignants actifs"
          color="from-pink-500 to-rose-600"
          chartIcon={<SimpleLineChart />}
        />
        <StatCard 
          title="Jeux"
          value={totalGames}
          icon={GamepadIcon}
          description="Jeux disponibles"
          color="from-amber-500 to-orange-600"
          chartIcon={<SimplePieChart />}
        />
        <StatCard 
          title="Performance"
          value={98}
          icon={TrendingUp}
          description="Score moyen (%)"
          color="from-emerald-500 to-green-600"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="space-y-4"
        >
          <div className="bg-white p-1 rounded-lg shadow-sm border mb-4">
            <TabsList className="grid w-full md:w-[400px] grid-cols-3 p-1">
              <TabsTrigger 
                value="apprenants"
                className={`${activeTab === 'apprenants' ? 'data-[state=active]:bg-purple-500 data-[state=active]:text-white' : ''}`}
              >
                <Users className="mr-2 h-4 w-4" />
                Apprenants
              </TabsTrigger>
              <TabsTrigger 
                value="enseignants"
                className={`${activeTab === 'enseignants' ? 'data-[state=active]:bg-purple-500 data-[state=active]:text-white' : ''}`}
              >
                <GraduationCap className="mr-2 h-4 w-4" />
                Enseignants
              </TabsTrigger>
              <TabsTrigger 
                value="jeux"
                className={`${activeTab === 'jeux' ? 'data-[state=active]:bg-purple-500 data-[state=active]:text-white' : ''}`}
              >
                <GamepadIcon className="mr-2 h-4 w-4" />
                Jeux
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="apprenants" className="bg-white rounded-lg p-6 shadow-sm border">
            <ApprenantsList onApprenantChange={handleApprenantChange} />
          </TabsContent>
          <TabsContent value="enseignants" className="bg-white rounded-lg p-6 shadow-sm border">
            <EnseignantsList onEnseignantChange={handleEnseignantChange} />
          </TabsContent>
          <TabsContent value="jeux" className="bg-white rounded-lg p-6 shadow-sm border">
            <JeuxList />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
