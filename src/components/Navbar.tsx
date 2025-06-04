
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
          ? "bg-white/95 backdrop-blur-sm shadow-lg border-b border-orange-200/50 dark:bg-gray-900/95" 
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group" onClick={closeMenu}>
          <div className="relative">
            {/* Logo avec motif africain */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <span className="relative text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent tracking-wider font-serif">
              AKILI
            </span>
          </div>
          {/* Ornement africain */}
          <div className="ml-2 flex items-center">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="w-1 h-1 bg-red-400 rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme toggle button avec style africain */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 border border-orange-200/50"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 text-orange-600" />
            ) : (
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90 text-yellow-500" />
            )}
          </Button>
          
          {/* Notifications avec style africain */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full relative hover:bg-orange-100 dark:hover:bg-orange-900/20 border border-orange-200/50">
                <Bell className="h-[1.2rem] w-[1.2rem] text-orange-600" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 border-orange-200">
              <div className="px-4 py-2 font-medium border-b border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
                🔔 Notifications AKILI
              </div>
              <DropdownMenuItem className="p-3 hover:bg-orange-50">
                <div>
                  <p className="text-sm font-medium">Bienvenue sur AKILI 🎓</p>
                  <p className="text-xs text-muted-foreground">Découvrez l'intelligence africaine numérique</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 hover:bg-orange-50">
                <div>
                  <p className="text-sm font-medium">Nouveaux jeux disponibles 🎮</p>
                  <p className="text-xs text-muted-foreground">Explorez nos derniers contenus éducatifs</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile menu button avec style africain */}
          <button 
            className="md:hidden p-2 focus:outline-none rounded-full hover:bg-orange-100 dark:hover:bg-orange-900/20 border border-orange-200/50" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? 
              <X size={24} className="text-orange-600" /> : 
              <Menu size={24} className="text-orange-600" />
            }
          </button>
          
          {/* Desktop Navigation avec style africain */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            <Link to="/login">
              <Button 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white border-2 border-orange-300/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                size="sm"
              >
                Se connecter
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation avec thème africain */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
          {/* Motif de fond africain */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <pattern id="mobile-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="currentColor" className="text-orange-600"/>
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="1" className="text-red-600"/>
              </pattern>
              <rect width="100" height="100" fill="url(#mobile-pattern)"/>
            </svg>
          </div>
          
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-6 relative z-10">
            <NavLinks isActive={isActive} isMobile={true} closeMenu={closeMenu} />
            <Link to="/login" onClick={closeMenu}>
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white shadow-lg text-lg py-6"
              >
                Se connecter à AKILI
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
    ? "block py-4 text-xl font-medium hover:text-orange-600 transition-colors border-l-4 border-transparent hover:border-orange-500 pl-4"
    : "font-medium hover:text-orange-600 transition-colors relative group px-3 py-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20";

  const activeLinkClasses = isMobile
    ? "block py-4 text-xl font-medium text-orange-600 transition-colors border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20"
    : "font-medium text-orange-600 transition-colors relative group px-3 py-2 rounded-lg bg-orange-50 dark:bg-orange-900/20";

  // Animation for desktop active links avec style africain
  const activeLinkIndicator = !isMobile && (
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
  );

  const activeIndicator = !isMobile && (
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full"></span>
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
