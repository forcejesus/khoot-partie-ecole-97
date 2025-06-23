
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { GraduationCap } from "lucide-react";

interface EmptyEnseignantsStateProps {
  searchTerm: string;
}

export const EmptyEnseignantsState = ({ searchTerm }: EmptyEnseignantsStateProps) => {
  return (
    <TableRow>
      <TableCell colSpan={5} className="text-center py-12">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <GraduationCap className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700">
            {searchTerm ? "Aucun enseignant trouvé" : "Aucun enseignant enregistré"}
          </h3>
          <p className="text-gray-500 text-sm">
            {searchTerm 
              ? "Essayez avec d'autres termes de recherche" 
              : "Commencez par ajouter votre premier enseignant"
            }
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
};
