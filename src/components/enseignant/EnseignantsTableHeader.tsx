
import React from "react";
import { GraduationCap } from "lucide-react";

interface EnseignantsTableHeaderProps {
  isLoading: boolean;
  filteredCount: number;
  totalCount: number;
  searchTerm: string;
}

export const EnseignantsTableHeader = ({ 
  isLoading, 
  filteredCount, 
  totalCount, 
  searchTerm 
}: EnseignantsTableHeaderProps) => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-orange-800 mb-2">Liste des enseignants</h3>
          <p className="text-orange-600 text-sm">
            {isLoading ? (
              "Chargement..."
            ) : (
              <>
                {filteredCount} enseignant{filteredCount > 1 ? "s" : ""} 
                {searchTerm && ` trouvé${filteredCount > 1 ? "s" : ""} sur ${totalCount}`}
              </>
            )}
          </p>
        </div>
        <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-orange-600" />
        </div>
      </div>
    </div>
  );
};
