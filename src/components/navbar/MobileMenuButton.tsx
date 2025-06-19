
import React from "react";
import { Menu, X } from "lucide-react";

interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenuButton = ({ isMenuOpen, toggleMenu }: MobileMenuButtonProps) => {
  return (
    <button 
      className="lg:hidden p-2 sm:p-3 focus:outline-none rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden group" 
      onClick={toggleMenu}
      aria-label={isMenuOpen ? "Close menu" : "Open menu"}
    >
      {/* Motif de fond africain */}
      <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
      
      {isMenuOpen ? 
        <X size={24} className="text-orange-600 relative z-10 sm:w-7 sm:h-7" /> : 
        <Menu size={24} className="text-orange-600 relative z-10 sm:w-7 sm:h-7" />
      }
      
      {/* Ornements décoratifs */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-orange-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-1 left-1 w-1 h-1 bg-red-400 rounded-full opacity-60"></div>
    </button>
  );
};

export default MobileMenuButton;
