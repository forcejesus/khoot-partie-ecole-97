
import React from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { QuickActions } from "@/components/dashboard/QuickActions";

const DashboardContent = () => {
  console.log("DashboardContent rendering...");
  
  return (
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      <DashboardHeader />
      <StatsCards />
      <QuickActions />
    </div>
  );
};

const Dashboard = () => {
  console.log("Dashboard component rendering...");
  
  return (
    <DashboardLayoutWithSidebar>
      <DashboardContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Dashboard;
