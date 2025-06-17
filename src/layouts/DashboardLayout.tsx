
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useIsMobile } from "@/hooks/use-mobile";
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
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Users,
  GraduationCap,
  GamepadIcon,
  Settings,
  LogOut,
  Sun,
  Moon,
  LayoutDashboard,
  Bell,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/navbar/Logo";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logout();
    navigate("/");
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const menuItems = [
    {
      title: "Tableau de bord",
      icon: LayoutDashboard,
      path: "/dashboard"
    },
    {
      title: "Apprenants",
      icon: Users,
      path: "/apprenants"
    },
    {
      title: "Enseignants",
      icon: GraduationCap,
      path: "/enseignants"
    },
    {
      title: "Jeux",
      icon: GamepadIcon,
      path: "/jeux"
    },
    {
      title: "Paramètres",
      icon: Settings,
      path: "/settings"
    }
  ];

  const SidebarContent_ = () => (
    <>
      <SidebarHeader className="flex flex-col items-center justify-center p-8 border-b bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-900/20 dark:to-gray-900/20">
        <div className="flex flex-col items-center space-y-4">
          <Logo closeMenu={() => {}} />
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Espace École
          </div>
          {user?.ecole && (
            <div className="text-xs text-center text-slate-500 dark:text-slate-400 max-w-full px-2 bg-slate-100 dark:bg-slate-800 rounded-lg py-2">
              {user.ecole.libelle}
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-6 py-8">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider">
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-3">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 transition-all duration-200 group text-slate-700 dark:text-slate-300"
                >
                  <item.icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-medium text-sm">{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6 border-t">
        <Button
          variant="destructive"
          size="sm"
          onClick={handleLogout}
          className="w-full gap-3 py-3 bg-red-500 hover:bg-red-600 text-white font-medium"
        >
          <LogOut className="h-5 w-5" />
          <span>Déconnexion</span>
        </Button>
      </SidebarFooter>
    </>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 font-inter">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
              <Logo closeMenu={() => {}} />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Espace École</span>
            </div>
            
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 dark:hover:bg-slate-800">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-72">
                  <div className="px-4 py-3 font-medium border-b">Notifications</div>
                  <DropdownMenuItem className="p-4">
                    <div>
                      <p className="text-sm font-medium">Bienvenue sur votre espace</p>
                      <p className="text-xs text-slate-500">Gérez vos apprenants et enseignants</p>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
                className="hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="p-6">
          {children}
        </div>

        {/* Mobile Bottom Sheet */}
        <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DrawerContent className="h-[85vh]">
            <DrawerHeader className="border-b bg-slate-50 dark:bg-slate-800">
              <DrawerTitle className="flex items-center gap-3">
                <Logo closeMenu={() => {}} />
                <span>Espace École</span>
              </DrawerTitle>
              {user?.ecole && (
                <DrawerDescription className="text-slate-600">{user.ecole.libelle}</DrawerDescription>
              )}
            </DrawerHeader>
            
            <div className="flex-1 overflow-auto p-6">
              <div className="space-y-3">
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    onClick={() => handleNavigation(item.path)}
                    className="w-full justify-start gap-4 h-14 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-medium">{item.title}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="p-6 border-t bg-slate-50 dark:bg-slate-800">
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="w-full gap-3 py-3 bg-red-500 hover:bg-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Déconnexion</span>
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full bg-gray-50 dark:bg-slate-900 font-inter">
        <Sidebar className="border-r bg-white dark:bg-slate-950 shadow-lg">
          <SidebarContent_ />
        </Sidebar>

        <SidebarInset className="flex-1">
          <div className="sticky top-0 z-40 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 shadow-sm">
            <div className="flex h-16 items-center justify-between px-8">
              <SidebarTrigger className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
              
              <div className="flex items-center gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative hover:bg-slate-100 dark:hover:bg-slate-800">
                      <Bell className="h-5 w-5" />
                      <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-72">
                    <div className="px-4 py-3 font-medium border-b">Notifications</div>
                    <DropdownMenuItem className="p-4">
                      <div>
                        <p className="text-sm font-medium">Bienvenue sur votre espace</p>
                        <p className="text-xs text-slate-500">Gérez vos apprenants et enseignants</p>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleThemeToggle}
                  className="hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-8">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
