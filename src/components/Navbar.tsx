
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200" 
          : "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Logo closeMenu={closeMenu} />
        
        {/* Navigation principale */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
        </div>

        {/* Bouton de connexion et menu mobile */}
        <div className="flex items-center gap-4">
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          
          <Link to="/login" className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 px-6 py-2 text-sm font-semibold rounded-full border-0"
              size="sm"
            >
              Se connecter
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
