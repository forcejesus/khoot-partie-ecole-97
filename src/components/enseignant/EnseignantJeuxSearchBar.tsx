
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

interface EnseignantJeuxSearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  totalJeux: number;
  filteredCount: number;
}

export const EnseignantJeuxSearchBar = ({ 
  searchTerm, 
  setSearchTerm, 
  totalJeux, 
  filteredCount 
}: EnseignantJeuxSearchBarProps) => {
  return (
    <Card className="border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-orange-700">
          <div className="p-2 bg-orange-200 rounded-lg">
            <Search className="h-5 w-5" />
          </div>
          Rechercher dans les jeux
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500 h-5 w-5" />
          <Input
            placeholder="Tapez le nom d'un jeu..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 border-2 border-orange-200 focus:border-orange-400 bg-white text-lg font-medium rounded-xl shadow-sm"
          />
          <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        
        <div className="flex items-center justify-between bg-white/50 rounded-lg p-3 border border-orange-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">
              {searchTerm ? (
                <>
                  <span className="font-bold text-orange-700">{filteredCount}</span> jeu(x) trouvé(s)
                  <span className="text-gray-500"> sur {totalJeux} au total</span>
                </>
              ) : (
                <>
                  <span className="font-bold text-orange-700">{totalJeux}</span> jeu(x) au total
                </>
              )}
            </span>
          </div>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-xs text-orange-600 hover:text-orange-800 font-medium underline"
            >
              Effacer
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
