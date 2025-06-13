
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
          ? "bg-white/96 backdrop-blur-xl shadow-lg border-b border-orange-200/50" 
          : "bg-white/90 backdrop-blur-lg shadow-md border-b border-orange-200/30"
      }`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        <Logo closeMenu={closeMenu} />
        
        {/* Navigation principale centrée */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-12">
          <nav className="bg-white/90 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border border-orange-200/60 relative overflow-hidden">
            <div className="flex items-center space-x-8 relative z-10">
              <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
            </div>
          </nav>
        </div>

        {/* Bouton de connexion et menu mobile */}
        <div className="flex items-center gap-4">
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          
          <Link to="/login" className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group px-8 py-3 text-base font-semibold rounded-full border border-orange-300/20"
              size="lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Se connecter
              </span>
            </Button>
          </Link>
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
