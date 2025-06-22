
import React from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const DashboardContent = () => {
  console.log("DashboardContent rendering...");
  
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <ErrorBoundary>
        <DashboardHeader />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <StatsCards />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <QuickActions />
      </ErrorBoundary>
    </div>
  );
};

const Dashboard = () => {
  console.log("Dashboard component rendering...");
  
  try {
    return (
      <DashboardLayoutWithSidebar>
        <DashboardContent />
      </DashboardLayoutWithSidebar>
    );
  } catch (error) {
    console.error("Error in Dashboard component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Erreur de chargement</h1>
          <p className="text-gray-600">Une erreur s'est produite lors du chargement du tableau de bord.</p>
        </div>
      </div>
    );
  }
};

export default Dashboard;
