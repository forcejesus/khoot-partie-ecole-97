
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, X, ChevronDown, Moon, Sun, Bell 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/contexts/ThemeContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Track scroll position for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95" 
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            KHOOT ECES
          </span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90" />
            )}
          </Button>
          
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
                  <p className="text-sm font-medium">Bienvenue sur KHOOT ECES</p>
                  <p className="text-xs text-muted-foreground">Découvrez notre plateforme d'apprentissage</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            <Link to="/login">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
                size="sm"
              >
                Se connecter
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-gray-900 pt-16">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-6">
            <NavLinks isActive={isActive} isMobile={true} closeMenu={closeMenu} />
            <Link to="/login" onClick={closeMenu}>
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white"
              >
                Se connecter
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ 
  isActive, 
  isMobile, 
  closeMenu 
}: { 
  isActive: (path: string) => boolean; 
  isMobile: boolean;
  closeMenu: () => void;
}) => {
  const linkClasses = isMobile
    ? "block py-3 text-xl font-medium hover:text-purple-600 transition-colors"
    : "font-medium hover:text-purple-600 transition-colors relative group";

  const activeLinkClasses = isMobile
    ? "block py-3 text-xl font-medium text-purple-600 transition-colors"
    : "font-medium text-purple-600 transition-colors relative group";

  // Animation for desktop active links
  const activeLinkIndicator = !isMobile && (
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
  );

  const activeIndicator = !isMobile && (
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600"></span>
  );

  return (
    <>
      <Link 
        to="/offres" 
        className={isActive("/offres") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Nos offres
        {isActive("/offres") ? activeIndicator : activeLinkIndicator}
      </Link>
      <Link 
        to="/solution" 
        className={isActive("/solution") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Notre Solution
        {isActive("/solution") ? activeIndicator : activeLinkIndicator}
      </Link>
      <Link 
        to="/faq" 
        className={isActive("/faq") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        FAQ
        {isActive("/faq") ? activeIndicator : activeLinkIndicator}
      </Link>
      <Link 
        to="/contact" 
        className={isActive("/contact") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Contact
        {isActive("/contact") ? activeIndicator : activeLinkIndicator}
      </Link>
    </>
  );
};

export default Navbar;
