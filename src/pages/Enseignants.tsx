
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
      <Card className="col-span-full bg-gradient-to-r from-pink-50 to-rose-50 border-none mb-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-pink-100 rounded-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 -mb-6 -ml-6 bg-rose-100 rounded-full opacity-70"></div>
        <CardContent className="pt-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl text-white">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Gestion des enseignants</h2>
                <p className="text-muted-foreground">Visualisez et gérez tous vos enseignants</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Rechercher un enseignant..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-base"
            />
          </div>
          <div className="flex gap-2">
            <Select value={filterValue} onValueChange={setFilterValue}>
              <SelectTrigger className="w-[180px] text-base">
                <Filter size={16} className="mr-2" />
                <SelectValue placeholder="Filtrer par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les enseignants</SelectItem>
                <SelectItem value="active">Actifs</SelectItem>
                <SelectItem value="inactive">Inactifs</SelectItem>
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
