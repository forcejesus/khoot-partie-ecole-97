
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const linkClasses = isMobile
    ? "block py-4 px-4 text-mobile-lg md:text-tablet-lg font-medium text-gray-700 hover:text-orange-600 transition-colors duration-300 rounded-lg hover:bg-orange-50"
    : "font-medium text-base lg:text-lg text-gray-700 hover:text-orange-600 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-orange-50/50";

  const activeLinkClasses = isMobile
    ? "block py-4 px-4 text-mobile-lg md:text-tablet-lg font-semibold text-orange-600 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 rounded-lg"
    : "font-semibold text-base lg:text-lg text-orange-600 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200";

  const navigationItems = [
    { path: "/", label: "Accueil" },
    { path: "/offres", label: "Nos offres" },
    { path: "/solution", label: "Notre Solution" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contactez-nous" }
  ];

  return (
    <>
      {navigationItems.map(({ path, label }) => (
        <button 
          key={path}
          onClick={() => handleNavigation(path)}
          className={isActive(path) ? activeLinkClasses : linkClasses}
        >
          {label}
        </button>
      ))}
    </>
  );
};

export default NavLinks;
