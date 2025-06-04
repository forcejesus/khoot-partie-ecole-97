
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navbar/Logo";
import NavLinks from "./navbar/NavLinks";
import MobileMenu from "./navbar/MobileMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
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
          ? "bg-white/96 backdrop-blur-xl shadow-african border-b-4 border-orange-200/80 dark:bg-gray-900/96" 
          : "bg-white/90 backdrop-blur-lg shadow-lg border-b-4 border-orange-200/60 dark:bg-gray-900/90"
      }`}
    >
      {/* Bordure décorative africaine en haut - plus épaisse */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente animate-kente-wave"></div>
      
      <div className="container mx-auto px-4 h-24 flex items-center justify-between relative">
        <Logo closeMenu={closeMenu} />
        
        {/* Navigation principale centrée - design amélioré */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <nav className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-african border-2 border-orange-200/60 relative overflow-hidden group">
            {/* Motif de fond africain dans la nav */}
            <div className="absolute inset-0 bg-tribal-dots opacity-5 group-hover:opacity-10 transition-opacity"></div>
            
            {/* Bordure décorative intérieure */}
            <div className="absolute top-1 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full opacity-60"></div>
            <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 via-red-400 to-orange-400 rounded-full opacity-60"></div>
            
            <div className="flex items-center space-x-8 relative z-10">
              <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            </div>
            
            {/* Ornements décoratifs aux extrémités */}
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-african-gold rounded-full animate-pulse"></div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-african-terracotta rounded-full animate-pulse"></div>
          </nav>
        </div>

        {/* Bouton de connexion et menu mobile */}
        <div className="flex items-center gap-4">
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          
          {/* Bouton de connexion - design amélioré */}
          <Link to="/login" className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white border-3 border-orange-300/40 shadow-african hover:shadow-tribal transition-all duration-500 hover:scale-105 relative overflow-hidden group px-8 py-4 text-lg font-medium rounded-full"
              size="lg"
            >
              {/* Motif de fond dans le bouton */}
              <div className="absolute inset-0 bg-kente-stripes opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <span className="relative z-10 font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
                Se connecter
                <div className="w-2 h-2 bg-white/80 rounded-full animate-pulse"></div>
              </span>
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-kente-wave"></div>
            </Button>
          </Link>
        </div>
      </div>

      {/* Ornements décoratifs en bas de la navbar */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 opacity-60">
        <div className="w-1 h-1 bg-african-gold rounded-full"></div>
        <div className="w-2 h-0.5 bg-african-kente rounded-full"></div>
        <div className="w-1 h-1 bg-african-terracotta rounded-full"></div>
      </div>

      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        isActive={isActive} 
        closeMenu={closeMenu} 
      />
    </header>
  );
};

export default Navbar;
