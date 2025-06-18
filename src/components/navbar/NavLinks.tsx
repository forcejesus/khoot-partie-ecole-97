
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NavLinksProps {
  isActive: (path: string) => boolean;
  isMobile: boolean;
  closeMenu: () => void;
}

const NavLinks = ({ isActive, isMobile, closeMenu }: NavLinksProps) => {
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
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
    ? "block py-4 px-4 text-mobile-lg md:text-tablet-lg font-medium text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-lg hover:bg-orange-50 relative group"
    : "font-medium text-base lg:text-lg text-gray-700 hover:text-orange-600 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-orange-50/50 relative group position-relative";

  const activeLinkClasses = isMobile
    ? "block py-4 px-4 text-mobile-lg md:text-tablet-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg transform scale-105 border-2 border-orange-300"
    : "font-bold text-base lg:text-lg text-white px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg transform scale-105 border-2 border-orange-300 relative";

  const navigationItems = [
    { path: "/", label: t("nav.home") },
    { path: "/offres", label: t("nav.offers") },
    { path: "/solution", label: t("nav.solution") },
    { path: "/contact", label: t("nav.contact") }
  ];

  const languages = [
    { code: "fr" as const, label: "Français", flag: "🇫🇷" },
    { code: "en" as const, label: "English", flag: "🇬🇧" }
  ];

  const currentFlag = language === "fr" ? "🇫🇷" : "🇬🇧";

  return (
    <>
      {navigationItems.map(({ path, label }) => (
        <button 
          key={path}
          onClick={() => handleNavigation(path)}
          className={`${isActive(path) ? activeLinkClasses : linkClasses} ${
            isActive(path) && !isMobile 
              ? "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-white after:rounded-full after:shadow-md" 
              : ""
          }`}
        >
          {label}
        </button>
      ))}
      
      {/* Menu Langues - Uniquement les drapeaux */}
      <div className="relative">
        <button
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          className={`${linkClasses} flex items-center gap-2`}
        >
          <span className="text-xl">{currentFlag}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isLanguageOpen && (
          <div className={`absolute ${isMobile ? 'left-0 top-full mt-2' : 'right-0 top-full mt-2'} bg-white border border-gray-200 rounded-lg shadow-lg py-2 min-w-[80px] z-50`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsLanguageOpen(false);
                  if (isMobile) closeMenu();
                }}
                className={`w-full text-center px-3 py-2 text-xl hover:bg-orange-50 transition-colors flex items-center justify-center ${
                  language === lang.code ? 'bg-orange-100' : ''
                }`}
                title={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default NavLinks;
