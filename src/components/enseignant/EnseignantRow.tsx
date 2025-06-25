
import React, { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, User, Phone, Mail, Eye, Gamepad2 } from "lucide-react";
import { Enseignant } from "@/types/enseignant";
import { EditEnseignantDialog } from "@/components/EditEnseignantDialog";
import { useNavigate } from "react-router-dom";

interface EnseignantRowProps {
  enseignant: Enseignant;
  onDelete: (id: string) => void;
}

export const EnseignantRow = ({ enseignant, onDelete }: EnseignantRowProps) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const navigate = useNavigate();

  const getStatusBadgeVariant = (statut: string) => {
    return statut === "actif" ? "default" : "secondary";
  };

  const getGenderIcon = (genre: string) => {
    return genre === "homme" ? "👨" : "👩";
  };

  const handleViewJeux = () => {
    navigate(`/enseignants/${enseignant._id}/jeux`);
  };

  return (
    <>
      <TableRow className="hover:bg-orange-50/50 transition-colors">
        <TableCell className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold">
              <span className="text-lg">{getGenderIcon(enseignant.genre)}</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900">
                {enseignant.prenom} {enseignant.nom}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Badge variant={getStatusBadgeVariant(enseignant.statut)} className="text-xs">
                  {enseignant.statut}
                </Badge>
                <span>•</span>
                <span>{enseignant.role}</span>
              </div>
            </div>
          </div>
        </TableCell>

        <TableCell>
          <div className="font-medium text-gray-900">{enseignant.matricule}</div>
        </TableCell>

        <TableCell>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-3 w-3 text-gray-400" />
              <span className="text-gray-700">{enseignant.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-3 w-3 text-gray-400" />
              <span className="text-gray-700 truncate max-w-[200px]">{enseignant.email}</span>
            </div>
          </div>
        </TableCell>

        <TableCell className="text-center">
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
            {enseignant.statistiques.nombreJeux}
          </div>
        </TableCell>

        <TableCell className="text-center">
          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold inline-block">
            {enseignant.statistiques.nombrePlanifications}
          </div>
        </TableCell>

        <TableCell className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleViewJeux}
              className="h-8 w-8 p-0 border-blue-200 hover:bg-blue-50 hover:border-blue-300"
              title="Voir les jeux"
            >
              <Gamepad2 className="h-4 w-4 text-blue-600" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setEditDialogOpen(true)}
              className="h-8 w-8 p-0 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
              title="Modifier"
            >
              <Edit className="h-4 w-4 text-orange-600" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(enseignant._id)}
              className="h-8 w-8 p-0 border-red-200 hover:bg-red-50 hover:border-red-300"
              title="Supprimer"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </Button>
          </div>
        </TableCell>
      </TableRow>

      <EditEnseignantDialog
        open={editDialogOpen}
        onOpenChange={setEditDialogOpen}
        enseignant={enseignant}
        onSuccess={() => window.location.reload()}
      />
    </>
  );
};
