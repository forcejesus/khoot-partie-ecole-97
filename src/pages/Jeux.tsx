
import React, { useState } from "react";
import { JeuxCards } from "@/components/JeuxCards";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GamepadIcon, Search, Filter, Plus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Jeux() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* En-tête avec thème africain */}
      <Card className="col-span-full bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 border-none mb-6 overflow-hidden relative">
        {/* Motifs africains décoratifs pour jeux */}
        <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-purple-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-violet-100 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-indigo-100 rounded-full opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
        
        {/* Motifs géométriques africains pour jeux */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <pattern id="jeux-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="3" fill="currentColor" className="text-purple-600"/>
              <polygon points="10,2 16,8 10,14 4,8" fill="currentColor" className="text-violet-600"/>
              <path d="M6,6 L14,14 M14,6 L6,14" stroke="currentColor" strokeWidth="0.5" className="text-indigo-600"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#jeux-pattern)"/>
          </svg>
        </div>
        
        <CardContent className="pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 rounded-xl text-white shadow-lg">
                <GamepadIcon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Bibliothèque de jeux AKILI</h2>
                <p className="text-muted-foreground">Explorez la sagesse par le jeu africain</p>
                <div className="flex items-center mt-1">
                  <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-violet-400 rounded-full mx-1"></div>
                  <div className="w-1 h-1 bg-indigo-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Section principale avec style africain */}
      <div className="bg-gradient-to-br from-white via-purple-50/30 to-violet-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg p-6 shadow-lg border-2 border-purple-200/50 mb-6 relative overflow-hidden">
        {/* Bordure décorative africaine */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500"></div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-500" size={18} />
            <Input 
              placeholder="Rechercher un jeu AKILI..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base border-purple-200 focus:border-purple-400 focus:ring-purple-400/20"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterValue} onValueChange={setFilterValue}>
              <SelectTrigger className="w-[180px] text-base border-purple-200 focus:border-purple-400">
                <Filter size={16} className="mr-2 text-purple-500" />
                <SelectValue placeholder="Filtrer par" />
              </SelectTrigger>
              <SelectContent className="border-purple-200">
                <SelectItem value="all">Tous les jeux</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="new">Nouveautés</SelectItem>
                <SelectItem value="mathematics">Mathématiques</SelectItem>
                <SelectItem value="languages">Langues</SelectItem>
                <SelectItem value="science">Sciences</SelectItem>
                <SelectItem value="culture">Culture africaine</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <JeuxCards />
      </div>
    </div>
  );
}
