
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  Bell,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              <span className="ml-2 text-lg font-bold">Espace ECOLE</span>
            </div>
            {user?.ecole && (
              <div className="mt-2 text-base font-semibold text-center max-w-full">
                {user.ecole.libelle}
              </div>
            )}
          </SidebarHeader>

          <SidebarContent className="text-base">
            <SidebarGroup>
              <SidebarGroupLabel className="text-sm">Menu Principal</SidebarGroupLabel>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/dashboard")}
                    tooltip="Tableau de bord"
                    className="text-base"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Tableau de bord</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/apprenants")}
                    tooltip="Apprenants"
                    className="text-base"
                  >
                    <Users className="h-5 w-5" />
                    <span>Apprenants</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/enseignants")}
                    tooltip="Enseignants"
                    className="text-base"
                  >
                    <GraduationCap className="h-5 w-5" />
                    <span>Enseignants</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/jeux")}
                    tooltip="Jeux"
                    className="text-base"
                  >
                    <GamepadIcon className="h-5 w-5" />
                    <span>Jeux</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => navigate("/settings")}
                    tooltip="Paramètres"
                    className="text-base"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Paramètres</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="w-full gap-2 text-base"
            >
              <LogOut className="h-4 w-4" />
              <span>Déconnexion</span>
            </Button>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-x-hidden">
          <div className="py-2 px-4 flex justify-end items-center gap-2 border-b">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full relative">
                  <Bell className="h-[1.2rem] w-[1.2rem]" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <div className="px-4 py-2 font-medium border-b">Notifications</div>
                <DropdownMenuItem className="p-3">
                  <div>
                    <p className="text-sm font-medium">Bienvenue sur votre espace</p>
                    <p className="text-xs text-muted-foreground">Gérez vos apprenants et enseignants</p>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90" />
              )}
            </Button>
          </div>
          
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
