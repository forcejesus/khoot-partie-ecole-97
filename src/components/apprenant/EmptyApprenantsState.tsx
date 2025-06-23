
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { User } from "lucide-react";

interface EmptyApprenantsStateProps {
  searchTerm: string;
}

export const EmptyApprenantsState = ({ searchTerm }: EmptyApprenantsStateProps) => {
  return (
    <TableRow>
      <TableCell colSpan={6} className="text-center py-12">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-700">
            {searchTerm ? "Aucun apprenant trouvé" : "Aucun apprenant enregistré"}
          </h3>
          <p className="text-gray-500 text-sm">
            {searchTerm 
              ? "Essayez avec d'autres termes de recherche" 
              : "Commencez par ajouter votre premier apprenant"
            }
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
};
