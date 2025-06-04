
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 relative overflow-hidden group animate-baobab-sway"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {/* Motif de fond africain */}
      <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
      
      {theme === "light" ? (
        <Moon className="h-[1.4rem] w-[1.4rem] rotate-90 transition-all dark:rotate-0 text-orange-600 relative z-10" />
      ) : (
        <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 transition-all dark:rotate-90 text-yellow-500 relative z-10" />
      )}
      
      {/* Ornements décoratifs */}
      <div className="absolute top-1 right-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
      <div className="absolute bottom-1 left-1 w-1 h-1 bg-african-kente rounded-full opacity-60"></div>
    </Button>
  );
};

export default ThemeToggle;
