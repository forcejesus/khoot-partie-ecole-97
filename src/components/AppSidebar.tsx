
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  GamepadIcon, 
  Settings, 
  LogOut,
  Bell
} from "lucide-react";
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
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    navigate("/");
  };

  return (
    <Sidebar className="border-r border-orange-200 bg-white">
      <SidebarHeader className="border-b border-orange-200 p-4 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="flex flex-col items-center space-y-3">
          <div className="text-center">
            <h1 className="text-5xl font-black bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent tracking-wide">
              AKILI
            </h1>
            <p className="text-sm text-orange-600 font-semibold mt-1">Espace École</p>
          </div>
          
          {user?.ecole && (
            <div className="w-full text-center bg-white/70 rounded-lg py-1.5 px-2">
              <p className="text-xs text-orange-700 font-medium truncate">
                {user.ecole.libelle}
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-3 bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-orange-600 mb-3 uppercase tracking-wider px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={location.pathname === item.url}
                    className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-700 transition-all duration-200 group text-gray-700 data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 data-[active=true]:font-semibold"
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 group-data-[active=true]:bg-orange-200 transition-colors">
                      <item.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <span className="font-medium text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-3 border-t border-orange-200 bg-white">
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full gap-2 py-2 bg-red-500 hover:bg-red-600 text-white font-medium text-sm"
        >
          <LogOut className="h-4 w-4" />
          <span>Déconnexion</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
