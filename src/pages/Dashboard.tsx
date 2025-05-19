
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ApprenantsList } from "@/components/ApprenantsList";
import { EnseignantsList } from "@/components/EnseignantsList";
import { JeuxCards } from "@/components/JeuxCards";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, GraduationCap, GamepadIcon, School, 
  TrendingUp, BarChart3, Clock, Award
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";
import BulkImportModal from "@/components/BulkImportModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { toast } = useToast();
  const { user } = useAuth();
  const [totalApprenants, setTotalApprenants] = useState(0);
  const [totalEnseignants, setTotalEnseignants] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(searchParams.get("tab") || "apprenants");

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

  // Gère le changement d'onglet
  useEffect(() => {
    // Met à jour l'URL quand l'onglet change
    if (activeTab) {
      setSearchParams({ tab: activeTab });
    }
  }, [activeTab, setSearchParams]);

  // Initialise l'onglet actif à partir des paramètres d'URL
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["apprenants", "enseignants", "jeux"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const StatCard = ({ 
    title, 
    value, 
    icon: Icon, 
    description,
    color = "from-blue-500 to-blue-600",
  }: { 
    title: string; 
    value: number; 
    icon: React.ElementType; 
    description?: string;
    color?: string;
  }) => (
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
          </>
        )}
      </CardContent>
    </Card>
  );

  const SchoolInfoCard = () => (
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
                <span className="text-sm">{user.ecole.adresse}</span>
              </div>
            )}
            {user?.ecole?.ville && (
              <div className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded-full">
                <span className="text-sm">{user.ecole.ville}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <SchoolInfoCard />

      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <StatCard 
          title="Apprenants"
          value={totalApprenants}
          icon={Users}
          description="Apprenants inscrits"
          color="from-purple-500 to-indigo-600"
        />
        <StatCard 
          title="Enseignants"
          value={totalEnseignants}
          icon={GraduationCap}
          description="Enseignants actifs"
          color="from-pink-500 to-rose-600"
        />
        <StatCard 
          title="Jeux"
          value={totalGames}
          icon={GamepadIcon}
          description="Jeux disponibles"
          color="from-amber-500 to-orange-600"
        />
        <StatCard 
          title="Performance"
          value={98}
          icon={TrendingUp}
          description="Score moyen (%)"
          color="from-emerald-500 to-green-600"
        />
      </div>

      <div className="mb-4">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="space-y-4"
        >
          <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border mb-4">
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

          <TabsContent value="apprenants" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Gestion des apprenants</h2>
                <p className="text-muted-foreground">Gérez les apprenants inscrits à votre école</p>
              </div>
              <div className="flex gap-2">
                <BulkImportModal type="apprenants" onSuccess={handleApprenantChange} />
              </div>
            </div>
            <ApprenantsList onApprenantChange={handleApprenantChange} />
          </TabsContent>

          <TabsContent value="enseignants" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">Gestion des enseignants</h2>
                <p className="text-muted-foreground">Gérez les enseignants associés à votre école</p>
              </div>
              <div className="flex gap-2">
                <BulkImportModal type="enseignants" onSuccess={handleEnseignantChange} />
              </div>
            </div>
            <EnseignantsList onEnseignantChange={handleEnseignantChange} />
          </TabsContent>

          <TabsContent value="jeux" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border">
            <JeuxCards />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
