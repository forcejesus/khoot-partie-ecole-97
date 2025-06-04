
import React, { useState } from "react";
import { ApprenantsList } from "@/components/ApprenantsList";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, Search, Filter, Plus } from "lucide-react";
import BulkImportModal from "@/components/BulkImportModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Apprenants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  
  const handleApprenantChange = () => {
    // Refresh the data if needed
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* En-tête avec thème africain */}
      <Card className="col-span-full bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 border-none mb-6 overflow-hidden relative">
        {/* Motifs africains décoratifs */}
        <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-orange-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-red-100 rounded-full opacity-70"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-100 rounded-full opacity-50"></div>
        
        {/* Motifs géométriques africains */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <pattern id="apprenant-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <polygon points="15,5 25,15 15,25 5,15" fill="currentColor" className="text-orange-600"/>
              <circle cx="15" cy="15" r="3" fill="currentColor" className="text-red-600"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#apprenant-pattern)"/>
          </svg>
        </div>
        
        <CardContent className="pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 rounded-xl text-white shadow-lg">
                <Users className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Gestion des apprenants AKILI</h2>
                <p className="text-muted-foreground">Cultivez l'intelligence de vos étudiants africains</p>
                <div className="flex items-center mt-1">
                  <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full mx-1"></div>
                  <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Section principale avec style africain */}
      <div className="bg-gradient-to-br from-white via-orange-50/30 to-red-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg p-6 shadow-lg border-2 border-orange-200/50 mb-6 relative overflow-hidden">
        {/* Bordure décorative africaine */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500" size={18} />
            <Input 
              placeholder="Rechercher un apprenant AKILI..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base border-orange-200 focus:border-orange-400 focus:ring-orange-400/20"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterValue} onValueChange={setFilterValue}>
              <SelectTrigger className="w-[180px] text-base border-orange-200 focus:border-orange-400">
                <Filter size={16} className="mr-2 text-orange-500" />
                <SelectValue placeholder="Filtrer par" />
              </SelectTrigger>
              <SelectContent className="border-orange-200">
                <SelectItem value="all">Tous les apprenants</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="inactive">Inactifs</SelectItem>
                <SelectItem value="excellent">Excellence</SelectItem>
                <SelectItem value="progress">En progression</SelectItem>
              </SelectContent>
            </Select>
            <BulkImportModal type="apprenants" onSuccess={handleApprenantChange} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ApprenantsList onApprenantChange={handleApprenantChange} />
        </div>
      </div>
    </div>
  );
}
