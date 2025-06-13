
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  closeMenu: () => void;
}

const Logo = ({ closeMenu }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center group relative" onClick={closeMenu}>
      <div className="relative">
        {/* Logo AKILI modern */}
        <span className="relative text-3xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent tracking-wide font-african group-hover:scale-105 transition-transform duration-300">
          AKILI
        </span>
        
        {/* Subtle underline */}
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300"></div>
      </div>
      
      {/* Modern accent dot */}
      <div className="ml-2 w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
    </Link>
  );
};

export default Logo;
