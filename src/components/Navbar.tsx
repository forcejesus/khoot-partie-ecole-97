
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navbar/Logo";
import ThemeToggle from "./navbar/ThemeToggle";
import NotificationDropdown from "./navbar/NotificationDropdown";
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
          ? "bg-white/96 backdrop-blur-xl shadow-african border-b-2 border-orange-200/60 dark:bg-gray-900/96" 
          : "bg-white/90 backdrop-blur-lg shadow-lg border-b-2 border-orange-200/40 dark:bg-gray-900/90"
      }`}
    >
      {/* Bordure décorative africaine en haut */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente"></div>
      
      <div className="container mx-auto px-4 h-18 flex items-center justify-between relative">
        <Logo closeMenu={closeMenu} />
        
        <div className="flex items-center gap-3 md:gap-5">
          <ThemeToggle />
          <NotificationDropdown />
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          
          {/* Desktop Navigation avec style africain renforcé */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            <Link to="/login">
              <Button 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white border-3 border-orange-300/40 shadow-african hover:shadow-tribal transition-all duration-500 hover:scale-105 relative overflow-hidden group px-6 py-3 text-lg font-medium"
                size="lg"
              >
                {/* Motif de fond dans le bouton */}
                <div className="absolute inset-0 bg-kente-stripes opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <span className="relative z-10 font-medium">Se connecter</span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </Link>
          </nav>
        </div>
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
