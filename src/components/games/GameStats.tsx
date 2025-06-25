
import React from "react";
import { Gamepad2 } from "lucide-react";

interface GameStatsProps {
  searchTerm: string;
  filteredCount: number;
  totalCount: number;
}

export const GameStats = ({ searchTerm, filteredCount, totalCount }: GameStatsProps) => {
  return (
    <div className="mb-6 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-orange-800 mb-2">Bibliothèque de jeux</h2>
          <p className="text-gray-600">
            {searchTerm ? (
              <>
                <span className="font-semibold text-orange-700">{filteredCount}</span> jeu{filteredCount > 1 ? "x" : ""} trouvé{filteredCount > 1 ? "s" : ""} 
                <span className="text-sm"> (sur {totalCount} au total)</span>
              </>
            ) : (
              <>
                <span className="font-semibold text-orange-700">{totalCount}</span> jeu{totalCount > 1 ? "x" : ""} disponible{totalCount > 1 ? "s" : ""}
              </>
            )}
          </p>
        </div>
        <div className="bg-orange-500 text-white px-6 py-3 rounded-full">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5" />
            <span className="font-bold text-lg">{searchTerm ? filteredCount : totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
