
import React, { useState } from "react";
import { EnseignantsList } from "@/components/EnseignantsList";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GraduationCap, Search, Filter, Plus } from "lucide-react";
import BulkImportModal from "@/components/BulkImportModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Enseignants() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("all");
  
  const handleEnseignantChange = () => {
    // Refresh the data if needed
  };
  
  return (
    <div className="container mx-auto py-8 px-4">
      {/* En-tête avec thème africain */}
      <Card className="col-span-full bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 border-none mb-6 overflow-hidden relative">
        {/* Motifs africains décoratifs */}
        <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-green-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-emerald-100 rounded-full opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-teal-100 rounded-full opacity-60"></div>
        
        {/* Motifs géométriques africains pour enseignants */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            <pattern id="enseignant-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <polygon points="12.5,2 22,12.5 12.5,23 3,12.5" fill="currentColor" className="text-green-600"/>
              <circle cx="12.5" cy="12.5" r="2" fill="currentColor" className="text-emerald-600"/>
              <path d="M8,8 L17,17 M17,8 L8,17" stroke="currentColor" strokeWidth="1" className="text-teal-600"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#enseignant-pattern)"/>
          </svg>
        </div>
        
        <CardContent className="pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-xl text-white shadow-lg">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 font-serif">Gestion des enseignants AKILI</h2>
                <p className="text-muted-foreground">Nos sages transmetteurs de savoir africain</p>
                <div className="flex items-center mt-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mx-1"></div>
                  <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Section principale avec style africain */}
      <div className="bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg p-6 shadow-lg border-2 border-green-200/50 mb-6 relative overflow-hidden">
        {/* Bordure décorative africaine */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" size={18} />
            <Input 
              placeholder="Rechercher un enseignant AKILI..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base border-green-200 focus:border-green-400 focus:ring-green-400/20"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterValue} onValueChange={setFilterValue}>
              <SelectTrigger className="w-[180px] text-base border-green-200 focus:border-green-400">
                <Filter size={16} className="mr-2 text-green-500" />
                <SelectValue placeholder="Filtrer par" />
              </SelectTrigger>
              <SelectContent className="border-green-200">
                <SelectItem value="all">Tous les enseignants</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="inactive">Inactifs</SelectItem>
                <SelectItem value="senior">Séniors</SelectItem>
                <SelectItem value="specialist">Spécialistes</SelectItem>
              </SelectContent>
            </Select>
            <BulkImportModal type="enseignants" onSuccess={handleEnseignantChange} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <EnseignantsList onEnseignantChange={handleEnseignantChange} />
        </div>
      </div>
    </div>
  );
}
