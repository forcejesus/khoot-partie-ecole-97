
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  GamepadIcon,
  Settings,
  LogOut,
  Sun,
  Moon,
  School,
  LayoutDashboard,
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    navigate("/");
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center w-full">
              <School className="h-8 w-8 text-primary" />
              <span className="ml-2 text-lg font-bold">EdTech Admin</span>
            </div>
            {user?.ecole && (
              <div className="mt-2 text-sm text-center opacity-80 truncate max-w-full">
                {user.ecole.libelle}
              </div>
            )}
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/dashboard")}
                    tooltip="Tableau de bord"
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Tableau de bord</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/dashboard?tab=apprenants")}
                    tooltip="Apprenants"
                  >
                    <Users className="h-4 w-4" />
                    <span>Apprenants</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/dashboard?tab=enseignants")}
                    tooltip="Enseignants"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Enseignants</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/dashboard?tab=jeux")}
                    tooltip="Jeux"
                  >
                    <GamepadIcon className="h-4 w-4" />
                    <span>Jeux</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/settings")}
                    tooltip="Paramètres"
                  >
                    <Settings className="h-4 w-4" />
                    <span>Paramètres</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t">
            <div className="flex justify-between items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                <span>Déconnexion</span>
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-x-hidden">{children}</main>
      </div>
    </SidebarProvider>
  );
}
