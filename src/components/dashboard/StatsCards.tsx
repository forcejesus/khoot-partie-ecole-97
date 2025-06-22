
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
    
    // Analyser la structure des données reçues
    let rawData = response.data;
    
    // Vérifier différentes structures possibles
    if (response.data?.data) {
      console.log("Données trouvées dans response.data.data");
      rawData = response.data.data;
    } else if (response.data?.statistiques) {
      console.log("Données trouvées dans response.data.statistiques");
      rawData = response.data.statistiques;
    }
    
    console.log("Données brutes extraites:", rawData);
    console.log("Type des données:", typeof rawData);
    console.log("Clés disponibles:", Object.keys(rawData || {}));
    
    // Créer un objet sûr avec des valeurs par défaut
    const safeStats: StatsData = {
      total_apprenants: Number(rawData?.total_apprenants || rawData?.apprenants || rawData?.students || 0),
      total_enseignants: Number(rawData?.total_enseignants || rawData?.enseignants || rawData?.teachers || 0),
      total_jeux: Number(rawData?.total_jeux || rawData?.jeux || rawData?.games || 0),
      total_planifications: Number(rawData?.total_planifications || rawData?.planifications || rawData?.schedules || 0)
    };
    
    console.log("Statistiques finales:", safeStats);
    console.log("=== FIN fetchStats SUCCESS ===");
    
    return safeStats;
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
      return failureCount < 2;
    },
    retryDelay: 1000,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  console.log("État de la requête:", {
    data: stats,
    isLoading,
    isError,
    error: error?.message || error
  });

  // Valeurs par défaut garanties
  const defaultStats: StatsData = {
    total_apprenants: 0,
    total_enseignants: 0,
    total_jeux: 0,
    total_planifications: 0
  };

  // S'assurer que les données sont valides
  const statsData: StatsData = stats ? {
    total_apprenants: Number(stats.total_apprenants) || 0,
    total_enseignants: Number(stats.total_enseignants) || 0,
    total_jeux: Number(stats.total_jeux) || 0,
    total_planifications: Number(stats.total_planifications) || 0
  } : defaultStats;
  
  console.log("Données utilisées pour l'affichage:", statsData);
  console.log("Vérification des propriétés:", {
    total_jeux_exists: 'total_jeux' in statsData,
    total_jeux_value: statsData.total_jeux,
    total_jeux_type: typeof statsData.total_jeux
  });

  const statsConfig = [
    {
      title: "Jeux disponibles",
      value: String(statsData.total_jeux),
      icon: GamepadIcon,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      change: "Disponibles"
    },
    {
      title: "Planifications",
      value: String(statsData.total_planifications),
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      change: "Sessions programmées"
    },
    {
      title: "Enseignants",
      value: String(statsData.total_enseignants),
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "Actifs"
    },
    {
      title: "Apprenants",
      value: String(statsData.total_apprenants),
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
