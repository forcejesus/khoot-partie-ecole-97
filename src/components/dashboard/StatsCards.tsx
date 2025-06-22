
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Users, 
  GraduationCap, 
  GamepadIcon,
  TrendingUp,
  Calendar
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { config } from "@/config/hosts";

interface StatsData {
  total_apprenants: number;
  total_enseignants: number;
  total_jeux: number;
  total_planifications: number;
}

const fetchStats = async (): Promise<StatsData> => {
  console.log("=== DEBUT fetchStats ===");
  const token = localStorage.getItem("token");
  console.log("Token trouvé:", !!token);
  console.log("URL API:", `${config.api.baseUrl}/api/mon-ecole/statistiques`);
  
  if (!token) {
    console.error("Aucun token trouvé dans localStorage");
    throw new Error("No token found");
  }
  
  try {
    console.log("Envoi de la requête API...");
    const response = await axios.get(`${config.api.baseUrl}/api/mon-ecole/statistiques`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    
    console.log("Réponse complète de l'API:", response);
    console.log("Status de la réponse:", response.status);
    console.log("Headers de la réponse:", response.headers);
    console.log("Données de la réponse:", response.data);
    
    // Vérifier si les données sont dans response.data directement ou dans response.data.data
    let statsData = response.data;
    if (response.data && response.data.data) {
      console.log("Données trouvées dans response.data.data");
      statsData = response.data.data;
    }
    
    console.log("Données finales des statistiques:", statsData);
    console.log("=== FIN fetchStats SUCCESS ===");
    
    return {
      total_apprenants: statsData.total_apprenants || 0,
      total_enseignants: statsData.total_enseignants || 0,
      total_jeux: statsData.total_jeux || 0,
      total_planifications: statsData.total_planifications || 0
    };
  } catch (error) {
    console.error("=== ERREUR dans fetchStats ===");
    console.error("Type d'erreur:", error);
    
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        headers: error.response?.headers
      });
    }
    
    console.error("=== FIN fetchStats ERROR ===");
    throw error;
  }
};

const StatCardSkeleton = () => (
  <Card className="border-orange-200 bg-white">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-12 w-12 rounded-xl" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-8 w-16 mb-2" />
      <Skeleton className="h-4 w-20" />
    </CardContent>
  </Card>
);

export const StatsCards = () => {
  console.log("=== RENDU StatsCards ===");
  
  const { data: stats, isLoading, error, isError } = useQuery({
    queryKey: ['school-stats'],
    queryFn: fetchStats,
    retry: (failureCount, error) => {
      console.log(`Tentative ${failureCount} échouée:`, error);
      return failureCount < 2; // 2 tentatives maximum
    },
    retryDelay: 1000, // 1 seconde entre les tentatives
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  console.log("État de la requête:", {
    data: stats,
    isLoading,
    isError,
    error: error?.message || error
  });

  // Valeurs par défaut pour éviter les erreurs
  const defaultStats = {
    total_apprenants: 0,
    total_enseignants: 0,
    total_jeux: 0,
    total_planifications: 0
  };

  // Utiliser les données ou les valeurs par défaut
  const statsData = stats || defaultStats;
  console.log("Données utilisées pour l'affichage:", statsData);

  const statsConfig = [
    {
      title: "Jeux disponibles",
      value: statsData.total_jeux?.toString() || "0",
      icon: GamepadIcon,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      change: "Disponibles"
    },
    {
      title: "Planifications",
      value: statsData.total_planifications?.toString() || "0",
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      change: "Sessions programmées"
    },
    {
      title: "Enseignants",
      value: statsData.total_enseignants?.toString() || "0", 
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "Actifs"
    },
    {
      title: "Apprenants",
      value: statsData.total_apprenants?.toString() || "0",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      change: "Inscrits"
    }
  ];

  // Afficher les skeletons pendant le chargement
  if (isLoading) {
    console.log("Affichage des skeletons de chargement");
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Afficher un message d'erreur si nécessaire
  if (isError) {
    console.error("Erreur lors du chargement des statistiques:", error);
    // Continuer à afficher les cartes avec des valeurs par défaut
  }

  console.log("Rendu des cartes de statistiques avec les données:", statsConfig.map(c => ({ title: c.title, value: c.value })));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {statsConfig.map((stat, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-3 md:p-4 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-transform`}>
              <stat.icon className={`h-5 w-5 md:h-6 md:w-6 ${stat.textColor}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className={`text-xs md:text-sm font-medium ${stat.textColor} flex items-center gap-2`}>
              <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
              {stat.change}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
