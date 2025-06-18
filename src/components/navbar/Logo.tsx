
import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  closeMenu: () => void;
}

const Logo = ({ closeMenu }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center group" onClick={closeMenu}>
      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transition-transform duration-300">
        AKILI
      </span>
    </Link>
  );
};

export default Logo;
