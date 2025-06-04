
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface NavLinksProps {
  isActive: (path: string) => boolean;
  isMobile: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isActive, isMobile, closeMenu }: NavLinksProps) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    closeMenu();
  };

  const linkClasses = isMobile
    ? "block py-4 text-xl font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 pl-6"
    : "font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 px-4 py-2";

  const activeLinkClasses = isMobile
    ? "block py-4 text-xl font-medium text-orange-600 pl-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 animate-pulse"
    : "font-medium text-orange-600 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border-2 border-orange-300 animate-pulse";

  return (
    <>
      <button 
        onClick={() => handleNavigation("/")}
        className={isActive("/") ? activeLinkClasses : linkClasses}
      >
        Accueil
      </button>
      
      <button 
        onClick={() => handleNavigation("/offres")}
        className={isActive("/offres") ? activeLinkClasses : linkClasses}
      >
        Nos offres
      </button>
      
      <button 
        onClick={() => handleNavigation("/solution")}
        className={isActive("/solution") ? activeLinkClasses : linkClasses}
      >
        Notre Solution
      </button>
      
      <button 
        onClick={() => handleNavigation("/faq")}
        className={isActive("/faq") ? activeLinkClasses : linkClasses}
      >
        FAQ
      </button>
      
      <button 
        onClick={() => handleNavigation("/contact")}
        className={isActive("/contact") ? activeLinkClasses : linkClasses}
      >
        Contactez-nous
      </button>
    </>
  );
};

export default NavLinks;
