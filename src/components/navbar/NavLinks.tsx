
import React from "react";
import { Link } from "react-router-dom";

interface NavLinksProps {
  isActive: (path: string) => boolean;
  isMobile: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isActive, isMobile, closeMenu }: NavLinksProps) => {
  const linkClasses = isMobile
    ? "block py-6 text-2xl font-medium hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-500 pl-6 relative group"
    : "font-medium hover:text-orange-600 transition-all duration-500 relative group px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/20 dark:hover:to-red-900/20 hover:shadow-md transform hover:scale-105";

  const activeLinkClasses = isMobile
    ? "block py-6 text-2xl font-medium text-orange-600 transition-colors border-l-4 border-orange-500 pl-6 bg-gradient-to-r from-orange-50 to-red-50 dark:bg-gradient-to-r dark:from-orange-900/20 dark:to-red-900/20 relative"
    : "font-medium text-orange-600 transition-colors relative group px-6 py-3 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:bg-gradient-to-r dark:from-orange-900/30 dark:to-red-900/30 shadow-md scale-105 border-2 border-orange-200";

  // Animation for desktop active links avec style africain amélioré
  const activeIndicator = !isMobile && (
    <>
      <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 clip-path-kente-diamond animate-tribal-pulse"></span>
      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-red-500 to-orange-500 clip-path-kente-diamond animate-tribal-pulse"></span>
    </>
  );

  const mobileActiveIndicator = isMobile && (
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
      <div className="w-4 h-4 bg-african-gold clip-path-kente-diamond animate-tribal-pulse"></div>
    </div>
  );

  // Hover effects pour desktop
  const hoverIndicator = !isMobile && (
    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-red-400/10 to-yellow-400/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
  );

  return (
    <>
      <Link 
        to="/" 
        className={isActive("/") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        {!isMobile && hoverIndicator}
        <span className="relative z-10 font-semibold">Accueil</span>
        {isActive("/") && activeIndicator}
        {isActive("/") && mobileActiveIndicator}
        {/* Ornements pour mobile */}
        {isMobile && !isActive("/") && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 bg-african-terracotta rounded-full animate-pulse"></div>
          </div>
        )}
      </Link>
      
      <Link 
        to="/offres" 
        className={isActive("/offres") ? activeLinkClasses : linkClasses}
        onClick={closeMenu}
      >
        {!isMobile && hoverIndicator}
        <span className="relative z-10 font-semibold">Nos offres</span>
        {isActive("/offres") && activeIndicator}
        {isActive("/offres") && mobileActiveIndicator}
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
        {!isMobile && hoverIndicator}
        <span className="relative z-10 font-semibold">Notre Solution</span>
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
        {!isMobile && hoverIndicator}
        <span className="relative z-10 font-semibold">FAQ</span>
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
        {!isMobile && hoverIndicator}
        <span className="relative z-10 font-semibold">Contactez-nous</span>
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

export default NavLinks;
