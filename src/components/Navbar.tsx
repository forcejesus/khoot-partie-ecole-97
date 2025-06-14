
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navbar/Logo";
import NavLinks from "./navbar/NavLinks";
import MobileMenu from "./navbar/MobileMenu";
import MobileMenuButton from "./navbar/MobileMenuButton";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

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
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200" 
            : "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Logo closeMenu={closeMenu} />
          
          {/* Navigation principale - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks isActive={isActive} isMobile={false} closeMenu={closeMenu} />
          </div>

          {/* Bouton de connexion et menu mobile */}
          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
            
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
      </header>

      {/* Drawer pour mobile et tablette */}
      <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DrawerContent className="bg-gradient-to-br from-orange-50 via-white to-red-50 border-t-4 border-orange-500">
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Menu Navigation
            </DrawerTitle>
          </DrawerHeader>
          
          <div className="px-6 pb-8">
            <nav className="flex flex-col space-y-4">
              <NavLinks isActive={isActive} isMobile={true} closeMenu={closeMenu} />
              
              <div className="pt-4 border-t border-orange-200">
                <Link to="/login" onClick={closeMenu}>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white shadow-lg text-lg py-6 relative overflow-hidden group"
                  >
                    <span className="relative z-10 font-bold">
                      Se connecter à AKILI
                    </span>
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
