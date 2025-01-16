import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { ApprenantsList } from "@/components/ApprenantsList";
import { EnseignantsList } from "@/components/EnseignantsList";
import { JeuxList } from "@/components/JeuxList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, GraduationCap, LogOut, GamepadIcon, School, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/contexts/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [totalApprenants, setTotalApprenants] = useState(0);
  const [totalEnseignants, setTotalEnseignants] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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

  const StatCard = ({ title, value, icon: Icon, description }: { title: string; value: number; icon: React.ElementType; description?: string }) => (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-8 w-20" />
        ) : (
          <>
            <div className="text-2xl font-bold">{value}</div>
            {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
          </>
        )}
      </CardContent>
    </Card>
  );

  const SchoolInfoCard = () => (
    <Card className="col-span-full bg-primary/5 mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <School className="h-8 w-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">{user?.ecole?.libelle}</h2>
              <p className="text-muted-foreground">Tableau de bord administratif</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            {user?.ecole?.adresse && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.ecole.adresse}</span>
              </div>
            )}
            {user?.ecole?.ville && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{user.ecole.ville}</span>
              </div>
            )}
          </div>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto py-8">
      <SchoolInfoCard />

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <StatCard 
          title="Total Apprenants"
          value={totalApprenants}
          icon={Users}
          description="Apprenants inscrits"
        />
        <StatCard 
          title="Total Enseignants"
          value={totalEnseignants}
          icon={GraduationCap}
          description="Enseignants actifs"
        />
        <StatCard 
          title="Total Jeux"
          value={totalGames}
          icon={GamepadIcon}
          description="Jeux disponibles"
        />
      </div>

      <Tabs defaultValue="apprenants" className="space-y-4">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3">
          <TabsTrigger value="apprenants">Apprenants</TabsTrigger>
          <TabsTrigger value="enseignants">Enseignants</TabsTrigger>
          <TabsTrigger value="jeux">Jeux</TabsTrigger>
        </TabsList>
        <TabsContent value="apprenants">
          <ApprenantsList onApprenantChange={handleApprenantChange} />
        </TabsContent>
        <TabsContent value="enseignants">
          <EnseignantsList onEnseignantChange={handleEnseignantChange} />
        </TabsContent>
        <TabsContent value="jeux">
          <JeuxList />
        </TabsContent>
      </Tabs>
    </div>
  );
}