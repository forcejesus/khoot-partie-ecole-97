
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  closeMenu: () => void;
}

const Logo = ({ closeMenu }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center group relative" onClick={closeMenu}>
      {/* Motif de fond derrière le logo */}
      <div className="absolute -inset-3 bg-gradient-to-r from-orange-400/20 via-red-400/20 to-yellow-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-tribal-pulse"></div>
      
      <div className="relative z-10">
        {/* Logo AKILI avec ornements africains */}
        <div className="relative">
          <span className="relative text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent tracking-wider font-african animate-african-dance">
            AKILI
          </span>
          
          {/* Effet de brillance sur le logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-kente-wave opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      
      {/* Ornements tribaux animés */}
      <div className="ml-3 flex items-center space-x-1">
        <div className="w-3 h-3 bg-african-gold rounded-full animate-tribal-pulse"></div>
        <div className="w-2 h-2 bg-african-kente rounded-full animate-african-dance"></div>
        <div className="w-3 h-3 bg-african-terracotta rounded-full animate-pulse"></div>
      </div>
      
      {/* Motifs géométriques africains */}
      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );
};

export default Logo;
