
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isMenuOpen: boolean;
  isActive: (path: string) => boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, isActive, closeMenu }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileMenu;
