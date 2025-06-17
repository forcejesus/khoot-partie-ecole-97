
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
      <SidebarHeader className="flex flex-col items-center justify-center p-6 border-b bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20">
        <div className="flex flex-col items-center space-y-3">
          <Logo closeMenu={() => {}} />
          <div className="text-sm font-medium text-muted-foreground">
            Espace École
          </div>
          {user?.ecole && (
            <div className="text-xs text-center text-muted-foreground max-w-full px-2">
              {user.ecole.libelle}
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  onClick={() => handleNavigation(item.path)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <Button
          variant="destructive"
          size="sm"
          onClick={handleLogout}
          className="w-full gap-2 bg-red-600 hover:bg-red-700"
        >
          <LogOut className="h-4 w-4" />
          <span>Déconnexion</span>
        </Button>
      </SidebarFooter>
    </>
  );

  if (isMobile) {
    return (
      <div className="min-h-screen bg-background">
        {/* Mobile Header */}
        <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              <Logo closeMenu={() => {}} />
              <span className="text-sm font-medium text-muted-foreground">Espace École</span>
            </div>
            
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
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
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleThemeToggle}
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="p-4">
          {children}
        </div>

        {/* Mobile Bottom Sheet */}
        <Drawer open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DrawerContent className="h-[80vh]">
            <DrawerHeader className="border-b">
              <DrawerTitle className="flex items-center gap-3">
                <Logo closeMenu={() => {}} />
                <span>Espace École</span>
              </DrawerTitle>
              {user?.ecole && (
                <DrawerDescription>{user.ecole.libelle}</DrawerDescription>
              )}
            </DrawerHeader>
            
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="ghost"
                    onClick={() => handleNavigation(item.path)}
                    className="w-full justify-start gap-3 h-12"
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t">
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="w-full gap-2 bg-red-600 hover:bg-red-700"
              >
                <LogOut className="h-4 w-4" />
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
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar className="border-r bg-card">
          <SidebarContent_ />
        </Sidebar>

        <SidebarInset className="flex-1">
          <div className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex h-14 items-center justify-between px-6">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              
              <div className="flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="relative">
                      <Bell className="h-4 w-4" />
                      <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
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
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleThemeToggle}
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex-1 p-6">
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
