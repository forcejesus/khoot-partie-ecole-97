
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trash2, Mail, Phone, Gamepad2, Calendar, Edit, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Enseignant } from "@/types/enseignant";
import { EditEnseignantDialog } from "@/components/EditEnseignantDialog";

interface EnseignantRowProps {
  enseignant: Enseignant;
  onDelete: (id: string) => void;
  onSuccess: () => void;
}

export const EnseignantRow = ({ enseignant, onDelete, onSuccess }: EnseignantRowProps) => {
  const navigate = useNavigate();

  const getInitials = (nom: string, prenom: string) => {
    return `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();
  };

  const getStatusColor = (statut: string) => {
    switch (statut.toLowerCase()) {
      case 'actif':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'inactif':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  // Check if teacher has games or planifications
  const hasGamesOrPlanifications = enseignant.statistiques.nombreJeux > 0 || enseignant.statistiques.nombrePlanifications > 0;

  const handleViewJeux = () => {
    if (hasGamesOrPlanifications) {
      navigate(`/enseignants/${enseignant._id}/jeux`);
    }
  };

  return (
    <TableRow className="hover:bg-gray-50 transition-colors">
      <TableCell className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
              {getInitials(enseignant.nom, enseignant.prenom)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{enseignant.nom} {enseignant.prenom}</p>
            <Badge variant="secondary" className={getStatusColor(enseignant.statut)}>
              {enseignant.statut}
            </Badge>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <span className="font-mono text-sm text-gray-600">{enseignant.matricule}</span>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-3 w-3 text-gray-400" />
            <span className="text-gray-600">{enseignant.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-3 w-3 text-gray-400" />
            <span className="text-gray-600">{enseignant.phone}</span>
          </div>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <Gamepad2 className="h-4 w-4 text-blue-500" />
          <span className="font-semibold text-blue-600">{enseignant.statistiques.nombreJeux}</span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-4 w-4 text-green-500" />
          <span className="font-semibold text-green-600">{enseignant.statistiques.nombrePlanifications}</span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <EditEnseignantDialog enseignant={enseignant} onSuccess={onSuccess} />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={handleViewJeux}
            disabled={!hasGamesOrPlanifications}
            className={hasGamesOrPlanifications 
              ? "text-purple-500 hover:text-purple-700 hover:bg-purple-50" 
              : "text-gray-400 cursor-not-allowed"
            }
            title={hasGamesOrPlanifications ? "Voir les jeux" : "Aucun jeu ou planification disponible"}
          >
            {hasGamesOrPlanifications ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(enseignant._id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
