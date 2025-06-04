
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? "bg-white/96 backdrop-blur-xl shadow-african border-b-2 border-orange-200/60 dark:bg-gray-900/96" 
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      {/* Bordure décorative africaine en haut */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente animate-kente-wave"></div>
      
      <div className="container mx-auto px-4 h-18 flex items-center justify-between relative">
        <Link to="/" className="flex items-center group relative" onClick={closeMenu}>
          {/* Motif de fond derrière le logo */}
          <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-tribal-pulse"></div>
          
          <div className="relative z-10">
            {/* Logo AKILI avec ornements africains */}
            <div className="relative">
              <span className="relative text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent tracking-wider font-african animate-african-dance">
                AKILI
              </span>
              
              {/* Effet de brillance sur le logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-kente-wave opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Ornements tribaux animés */}
          <div className="ml-3 flex items-center space-x-1">
            <div className="w-3 h-3 bg-african-gold rounded-full animate-tribal-pulse"></div>
            <div className="w-2 h-2 bg-african-kente rounded-full animate-african-dance"></div>
            <div className="w-3 h-3 bg-african-terracotta rounded-full animate-pulse"></div>
          </div>
          
          {/* Motifs géométriques africains */}
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Link>
        
        <div className="flex items-center gap-3 md:gap-5">
          {/* Theme toggle button avec style africain renforcé */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden group animate-baobab-sway"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {/* Motif de fond africain */}
            <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            {theme === "light" ? (
              <Moon className="h-[1.4rem] w-[1.4rem] rotate-90 transition-all dark:rotate-0 text-orange-600 relative z-10" />
            ) : (
              <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 transition-all dark:rotate-90 text-yellow-500 relative z-10" />
            )}
            
            {/* Ornements décoratifs */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-african-kente rounded-full opacity-60"></div>
          </Button>
          
          {/* Notifications avec style africain renforcé */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full relative hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 overflow-hidden group animate-baobab-sway"
              >
                {/* Motif de fond africain */}
                <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <Bell className="h-[1.4rem] w-[1.4rem] text-orange-600 relative z-10" />
                
                {/* Indicateur de notification avec animation tribale */}
                <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-tribal-pulse border-2 border-white">
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-ping"></span>
                </span>
                
                {/* Ornements décoratifs */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-african-terracotta rounded-full opacity-60"></div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-80 border-2 border-orange-200 bg-gradient-to-br from-orange-50/95 to-red-50/95 backdrop-blur-xl shadow-african"
            >
              {/* En-tête avec motif africain */}
              <div className="px-4 py-3 font-medium border-b-2 border-orange-200 bg-gradient-to-r from-orange-100 to-red-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-tribal-dots opacity-10"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-tribal-pulse">
                    <Bell className="h-3 w-3 text-white" />
                  </div>
                  <span className="font-african text-lg">🔔 Notifications AKILI</span>
                </div>
              </div>
              
              <DropdownMenuItem className="p-4 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 border-b border-orange-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-african-gold rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium">Bienvenue sur AKILI 🎓</p>
                    <p className="text-xs text-muted-foreground">Découvrez l'intelligence africaine numérique</p>
                  </div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="p-4 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-african-kente rounded-full mt-1 animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium">Nouveaux jeux disponibles 🎮</p>
                    <p className="text-xs text-muted-foreground">Explorez nos derniers contenus éducatifs</p>
                  </div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Mobile menu button avec style africain renforcé */}
          <button 
            className="md:hidden p-3 focus:outline-none rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden group animate-baobab-sway" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Motif de fond africain */}
            <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            {isMenuOpen ? 
              <X size={28} className="text-orange-600 relative z-10 animate-african-dance" /> : 
              <Menu size={28} className="text-orange-600 relative z-10 animate-tribal-pulse" />
            }
            
            {/* Ornements décoratifs */}
            <div className="absolute top-1 right-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-african-terracotta rounded-full opacity-60"></div>
          </button>
          
          {/* Desktop Navigation avec style africain renforcé */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            <Link to="/login">
              <Button 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white border-3 border-orange-300/40 shadow-african hover:shadow-tribal transition-all duration-500 hover:scale-105 relative overflow-hidden group animate-tribal-pulse px-6 py-3 text-lg"
                size="lg"
              >
                {/* Motif de fond dans le bouton */}
                <div className="absolute inset-0 bg-kente-stripes opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <span className="relative z-10 font-medium">Se connecter</span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-kente-wave opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation avec thème africain renforcé */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 overflow-hidden">
          {/* Motif de fond africain complexe */}
          <div className="absolute inset-0 opacity-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <defs>
                <pattern id="mobile-african-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <polygon points="20,5 35,20 20,35 5,20" fill="currentColor" className="text-orange-600" opacity="0.1"/>
                  <circle cx="20" cy="20" r="3" fill="currentColor" className="text-red-600" opacity="0.15"/>
                  <path d="M10,10 L30,30 M30,10 L10,30" stroke="currentColor" strokeWidth="2" className="text-yellow-600" opacity="0.1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#mobile-african-pattern)"/>
            </svg>
          </div>
          
          {/* Bordures décoratives */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente animate-kente-wave"></div>
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-african-kente via-african-gold to-african-terracotta animate-kente-wave"></div>
          
          <nav className="container mx-auto px-6 py-8 flex flex-col space-y-8 relative z-10">
            {/* Ornement de séparation */}
            <div className="flex justify-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-african-gold clip-path-kente-diamond animate-african-dance"></div>
                <div className="w-6 h-2 bg-gradient-to-r from-african-terracotta to-african-ochre rounded-full"></div>
                <div className="w-4 h-4 bg-african-kente clip-path-kente-diamond animate-tribal-pulse"></div>
              </div>
            </div>
            
            <NavLinks isActive={isActive} isMobile={true} closeMenu={closeMenu} />
            
            {/* Ornement de séparation */}
            <div className="flex justify-center my-6">
              <div className="w-20 h-1 bg-gradient-to-r from-african-gold to-african-kente rounded-full"></div>
            </div>
            
            <Link to="/login" onClick={closeMenu}>
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white shadow-african text-xl py-8 relative overflow-hidden group animate-tribal-pulse"
              >
                {/* Motif de fond dans le bouton mobile */}
                <div className="absolute inset-0 bg-kente-stripes opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <span className="relative z-10 font-african font-bold flex items-center justify-center gap-3">
                  <div className="w-4 h-4 bg-white/80 clip-path-kente-diamond"></div>
                  Se connecter à AKILI
                  <div className="w-4 h-4 bg-white/80 clip-path-kente-diamond"></div>
                </span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-kente-wave opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
    ? "block py-6 text-2xl font-medium hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-500 pl-6 relative group"
    : "font-medium hover:text-orange-600 transition-all duration-300 relative group px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/20 dark:hover:to-red-900/20";

  const activeLinkClasses = isMobile
    ? "block py-6 text-2xl font-medium text-orange-600 transition-colors border-l-4 border-orange-500 pl-6 bg-gradient-to-r from-orange-50 to-red-50 dark:bg-gradient-to-r dark:from-orange-900/20 dark:to-red-900/20 relative"
    : "font-medium text-orange-600 transition-colors relative group px-4 py-3 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:bg-gradient-to-r dark:from-orange-900/20 dark:to-red-900/20";

  // Animation for desktop active links avec style africain
  const activeIndicator = !isMobile && (
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 clip-path-kente-diamond animate-tribal-pulse"></span>
  );

  const mobileActiveIndicator = isMobile && (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <div className="w-3 h-3 bg-african-gold clip-path-kente-diamond animate-african-dance"></div>
    </div>
  );

  return (
    <>
      <Link 
        to="/offres" 
        className={isActive("/offres") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        <span className="relative z-10">Nos offres</span>
        {isActive("/offres") && activeIndicator}
        {isActive("/offres") && mobileActiveIndicator}
        {/* Ornements pour mobile */}
        {isMobile && !isActive("/offres") && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-african-terracotta rounded-full animate-pulse"></div>
          </div>
        )}
      </Link>
      <Link 
        to="/solution" 
        className={isActive("/solution") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        <span className="relative z-10">Notre Solution</span>
        {isActive("/solution") && activeIndicator}
        {isActive("/solution") && mobileActiveIndicator}
        {isMobile && !isActive("/solution") && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-african-kente rounded-full animate-pulse"></div>
          </div>
        )}
      </Link>
      <Link 
        to="/faq" 
        className={isActive("/faq") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        <span className="relative z-10">FAQ</span>
        {isActive("/faq") && activeIndicator}
        {isActive("/faq") && mobileActiveIndicator}
        {isMobile && !isActive("/faq") && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-african-gold rounded-full animate-pulse"></div>
          </div>
        )}
      </Link>
      <Link 
        to="/contact" 
        className={isActive("/contact") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        <span className="relative z-10">Contact</span>
        {isActive("/contact") && activeIndicator}
        {isActive("/contact") && mobileActiveIndicator}
        {isMobile && !isActive("/contact") && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-african-sunset rounded-full animate-pulse"></div>
          </div>
        )}
      </Link>
    </>
  );
};

export default Navbar;
