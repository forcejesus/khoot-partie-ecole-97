
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm dark:bg-gray-900/95">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            KHOOT ECES
          </span>
        </Link>
        
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
    ? "block py-2 text-xl font-medium hover:text-purple-600"
    : "font-medium hover:text-purple-600 transition-colors";

  const activeLinkClasses = isMobile
    ? "block py-2 text-xl font-medium text-purple-600"
    : "font-medium text-purple-600 transition-colors";

  return (
    <>
      <Link 
        to="/offres" 
        className={isActive("/offres") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Nos offres
      </Link>
      <Link 
        to="/solution" 
        className={isActive("/solution") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Notre Solution
      </Link>
      <Link 
        to="/faq" 
        className={isActive("/faq") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        FAQ
      </Link>
      <Link 
        to="/contact" 
        className={isActive("/contact") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        Contact
      </Link>
    </>
  );
};

export default Navbar;
