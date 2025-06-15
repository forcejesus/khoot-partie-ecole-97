
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface NavLinksProps {
  isActive: (path: string) => boolean;
  isMobile: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isActive, isMobile, closeMenu }: NavLinksProps) => {
  const navigate = useNavigate();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleNavigation = (path: string) => {
    // Close mobile menu first
    closeMenu();
    
    // Navigate to the new route
    navigate(path);
    
    // Force scroll to top immediately
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
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
    { path: "/contact", label: "Contactez-nous" }
  ];

  const languages = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" }
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
      
      {/* Menu Langues */}
      <div className="relative">
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className={`${linkClasses} flex items-center gap-2`}
        >
          Langues
          <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isLanguageOpen && (
          <div className={`absolute ${isMobile ? 'left-0 top-full mt-2' : 'right-0 top-full mt-2'} bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[150px] z-50`}>
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  // Ici vous pouvez ajouter la logique de changement de langue
                  console.log(`Changement vers ${language.label}`);
                  setIsLanguageOpen(false);
                  if (isMobile) closeMenu();
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors flex items-center gap-2"
              >
                <span>{language.flag}</span>
                {language.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
