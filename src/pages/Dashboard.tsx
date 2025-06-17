
import React from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { GamesSection } from "@/components/dashboard/GamesSection";
import { QuickActions } from "@/components/dashboard/QuickActions";

const DashboardContent = () => {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      <StatsCards />
      <GamesSection />
      <QuickActions />
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayoutWithSidebar>
      <DashboardContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Dashboard;
