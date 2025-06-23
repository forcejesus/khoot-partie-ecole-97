
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Phone, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { EditApprenantDialog } from "@/components/EditApprenantDialog";
import { Apprenant } from "@/types/apprenant";

interface ApprenantRowProps {
  apprenant: Apprenant;
  onEdit: () => void;
  onDelete: (id: string) => void;
}

export const ApprenantRow = ({ apprenant, onEdit, onDelete }: ApprenantRowProps) => {
  const getInitials = (nom: string, prenom: string) => {
    return `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <TableRow className="hover:bg-gray-50 transition-colors">
      <TableCell className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
              {getInitials(apprenant.nom, apprenant.prenom)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">
              {apprenant.prenom} {apprenant.nom}
            </p>
            <p className="text-sm text-gray-500">Apprenant</p>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-3 w-3 text-gray-400" />
            <span className="text-gray-600">{apprenant.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Phone className="h-3 w-3 text-gray-400" />
            <span className="text-gray-600">{apprenant.phone}</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
          {apprenant.matricule}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-3 w-3 text-gray-400" />
          <span>{formatDate(apprenant.date)}</span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <EditApprenantDialog 
            apprenant={apprenant} 
            onSuccess={onEdit}
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(apprenant._id)}
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
