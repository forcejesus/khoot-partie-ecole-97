
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchStats } from "@/services/statisticsService";
import { createStatsConfig } from "@/config/statsConfig";
import { StatCard } from "./StatCard";
import { StatCardSkeleton } from "./StatCardSkeleton";
import { StatsData } from "@/types/statistics";

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
  
  const statsConfig = createStatsConfig(statsData);

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
        <StatCard key={index} stat={stat} />
      ))}
    </div>
  );
};
