
import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface DashboardLayoutWithSidebarProps {
  children: React.ReactNode;
}

export function DashboardLayoutWithSidebar({ children }: DashboardLayoutWithSidebarProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-3 sm:p-4 md:p-6">
          <div className="mb-3 sm:mb-4">
            <SidebarTrigger className="h-9 w-9 sm:h-10 sm:w-10 bg-white border border-orange-200 hover:bg-orange-50 hover:border-orange-300 rounded-lg md:hidden" />
          </div>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
