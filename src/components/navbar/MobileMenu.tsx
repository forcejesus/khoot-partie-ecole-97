
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isMenuOpen: boolean;
  isActive: (path: string) => boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isMenuOpen, isActive, closeMenu }: MobileMenuProps) => {
  // Ce composant n'est plus utilisé avec le nouveau Drawer
  // Mais on le garde pour la compatibilité
  if (!isMenuOpen) return null;

  return null;
};

export default MobileMenu;
