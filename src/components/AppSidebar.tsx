
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  Settings, 
  GamepadIcon,
  LogOut,
  School
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Apprenants",
    url: "/apprenants",
    icon: Users,
  },
  {
    title: "Enseignants",
    url: "/enseignants",
    icon: GraduationCap,
  },
  {
    title: "Jeux",
    url: "/jeux",
    icon: GamepadIcon,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const { logout, user } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar className="border-r border-orange-200 bg-gradient-to-b from-orange-50 to-white">
      <SidebarHeader className="p-6 border-b border-orange-200">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <School className="h-8 w-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent tracking-tight">
              AKILI
            </h1>
            <p className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
              Espace Prof
            </p>
          </div>
          {user?.ecole && (
            <div className="text-center">
              <p className="text-xs text-gray-600 font-medium">
                {user.ecole.libelle}
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-orange-700 font-semibold mb-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`h-12 rounded-xl transition-all duration-200 ${
                      isActive(item.url)
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:from-orange-600 hover:to-orange-700"
                        : "hover:bg-orange-100 text-gray-700 hover:text-orange-700"
                    }`}
                  >
                    <Link to={item.url} className="flex items-center space-x-3 px-4">
                      <item.icon className={`h-6 w-6 ${isActive(item.url) ? "text-white" : "text-orange-600"}`} />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t border-orange-200 mt-auto">
        <Button
          onClick={logout}
          variant="outline"
          className="w-full h-12 border-2 border-orange-300 text-orange-600 hover:bg-orange-50 hover:border-orange-400 rounded-xl"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Déconnexion
        </Button>
      </div>
    </Sidebar>
  );
}
