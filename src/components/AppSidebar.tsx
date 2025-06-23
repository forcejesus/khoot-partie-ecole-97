
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
  Bell,
  School
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
    <Sidebar className="border-r border-orange-200 bg-gradient-to-b from-white to-orange-50/30">
      <SidebarHeader className="border-b border-orange-200 p-6 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <School className="h-8 w-8 text-white" />
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-black text-white tracking-wide">
              AKILI
            </h1>
            <p className="text-sm text-orange-100 font-semibold mt-1">Espace École</p>
          </div>
          
          {user?.ecole?.libelle && (
            <div className="w-full text-center bg-white/20 backdrop-blur-sm rounded-xl py-2 px-3 border border-white/30">
              <p className="text-xs text-white font-medium truncate">
                {user.ecole.libelle}
              </p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4 bg-gradient-to-b from-white to-orange-50/30">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-bold text-orange-700 mb-4 uppercase tracking-wider px-3 flex items-center gap-2">
            <div className="w-4 h-0.5 bg-orange-400 rounded-full"></div>
            Navigation
            <div className="flex-1 h-0.5 bg-orange-200 rounded-full"></div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    isActive={location.pathname === item.url}
                    className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-orange-50 hover:text-orange-800 text-gray-700 data-[active=true]:bg-orange-100 data-[active=true]:text-orange-800 data-[active=true]:font-semibold border border-transparent hover:border-orange-200 data-[active=true]:border-orange-300"
                  >
                    <item.icon className="h-5 w-5 text-orange-600 data-[active=true]:text-orange-700" />
                    <span className="font-medium text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-orange-200 bg-gradient-to-b from-orange-50/30 to-white">
        <div className="mb-4 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.name?.charAt(0)?.toUpperCase() || 'A'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-orange-800 truncate">
                {user?.name || 'Administrateur'}
              </p>
              <p className="text-xs text-orange-600">
                Administrateur
              </p>
            </div>
          </div>
        </div>
        
        <Button
          variant="destructive"
          onClick={handleLogout}
          className="w-full gap-3 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-sm rounded-xl border border-red-600"
        >
          <LogOut className="h-5 w-5" />
          <span>Déconnexion</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
