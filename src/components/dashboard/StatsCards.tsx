
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
  console.log("fetchStats called");
  const token = localStorage.getItem("token");
  console.log("Token found:", !!token);
  
  if (!token) {
    throw new Error("No token found");
  }
  
  const response = await axios.get(`${config.api.baseUrl}/api/mon-ecole/statistiques`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Stats API response:", response.data);
  return response.data;
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
  console.log("StatsCards rendering...");
  
  const { data: stats, isLoading, error } = useQuery({
    queryKey: ['school-stats'],
    queryFn: fetchStats,
  });

  console.log("Query state - data:", stats, "isLoading:", isLoading, "error:", error);

  // Show skeleton loaders while loading
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {Array.from({ length: 4 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Default values on error
  const statsData = stats || {
    total_apprenants: 0,
    total_enseignants: 0,
    total_jeux: 0,
    total_planifications: 0
  };

  const statsConfig = [
    {
      title: "Jeux disponibles",
      value: statsData.total_jeux.toString(),
      icon: GamepadIcon,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      change: "Disponibles"
    },
    {
      title: "Planifications",
      value: statsData.total_planifications.toString(),
      icon: Calendar,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      change: "Sessions programmées"
    },
    {
      title: "Enseignants",
      value: statsData.total_enseignants.toString(), 
      icon: GraduationCap,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      change: "Actifs"
    },
    {
      title: "Apprenants",
      value: statsData.total_apprenants.toString(),
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      change: "Inscrits"
    }
  ];

  if (error) {
    console.error("Erreur lors du chargement des statistiques:", error);
  }

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
