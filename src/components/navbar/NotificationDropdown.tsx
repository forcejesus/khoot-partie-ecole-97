
import React from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NotificationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full relative hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 dark:hover:bg-gradient-to-r dark:hover:from-orange-900/30 dark:hover:to-red-900/30 border-2 border-orange-200/60 hover:border-orange-400/60 transition-all duration-300 overflow-hidden group animate-baobab-sway"
        >
          {/* Motif de fond africain */}
          <div className="absolute inset-0 bg-tribal-dots opacity-10 group-hover:opacity-20 transition-opacity"></div>
          
          <Bell className="h-[1.4rem] w-[1.4rem] text-orange-600 relative z-10" />
          
          {/* Indicateur de notification avec animation tribale */}
          <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-tribal-pulse border-2 border-white">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-ping"></span>
          </span>
          
          {/* Ornements décoratifs */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-african-gold rounded-full opacity-60"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-african-terracotta rounded-full opacity-60"></div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-80 border-2 border-orange-200 bg-gradient-to-br from-orange-50/95 to-red-50/95 backdrop-blur-xl shadow-african"
      >
        {/* En-tête avec motif africain */}
        <div className="px-4 py-3 font-medium border-b-2 border-orange-200 bg-gradient-to-r from-orange-100 to-red-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-tribal-dots opacity-10"></div>
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-tribal-pulse">
              <Bell className="h-3 w-3 text-white" />
            </div>
            <span className="font-african text-lg">🔔 Notifications AKILI</span>
          </div>
        </div>
        
        <DropdownMenuItem className="p-4 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 border-b border-orange-100">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-african-gold rounded-full mt-1 animate-pulse"></div>
            <div>
              <p className="text-sm font-medium">Bienvenue sur AKILI 🎓</p>
              <p className="text-xs text-muted-foreground">Découvrez l'intelligence africaine numérique</p>
            </div>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="p-4 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 bg-african-kente rounded-full mt-1 animate-pulse"></div>
            <div>
              <p className="text-sm font-medium">Nouveaux jeux disponibles 🎮</p>
              <p className="text-xs text-muted-foreground">Explorez nos derniers contenus éducatifs</p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
