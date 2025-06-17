
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
      <SidebarHeader className="border-b border-orange-200 p-6 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo AKILI - Plus grand et plus visible */}
          <div className="text-center">
            <h1 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent tracking-wide">
              AKILI
            </h1>
            <p className="text-base text-orange-600 font-semibold mt-1">Espace École</p>
          </div>
          
          {/* École info */}
          {user?.ecole && (
            <div className="w-full text-center bg-white/70 rounded-lg py-2 px-3">
              <p className="text-sm text-orange-700 font-medium truncate">
                {user.ecole.libelle}
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-orange-600 mb-4 uppercase tracking-wider px-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={location.pathname === item.url}
                    className="w-full flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-orange-50 hover:text-orange-700 transition-all duration-200 group text-gray-700 data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 data-[active=true]:font-semibold"
                  >
                    <item.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-200" />
                    <span className="font-medium text-lg">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-orange-200">
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full gap-3 py-3 bg-red-500 hover:bg-red-600 text-white font-medium"
        >
          <LogOut className="h-5 w-5" />
          <span>Déconnexion</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
