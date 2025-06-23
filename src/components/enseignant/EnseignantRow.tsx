
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trash2, Mail, Phone, Calendar } from "lucide-react";
import { Enseignant } from "@/types/enseignant";

interface EnseignantRowProps {
  enseignant: Enseignant;
  onDelete: (id: string) => void;
}

export const EnseignantRow = ({ enseignant, onDelete }: EnseignantRowProps) => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (statut: string) => {
    switch (statut.toLowerCase()) {
      case 'actif':
      case 'enseignant':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'inactif':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  return (
    <TableRow className="hover:bg-gray-50 transition-colors">
      <TableCell className="px-6 py-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
              {getInitials(enseignant.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{enseignant.name}</p>
            <p className="text-sm text-gray-500">Enseignant</p>
          </div>
        </div>
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
      <TableCell>
        <Badge variant="secondary" className={getStatusColor(enseignant.statut)}>
          {enseignant.statut}
        </Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-3 w-3 text-gray-400" />
          <span>{formatDate(enseignant.date)}</span>
        </div>
      </TableCell>
      <TableCell className="text-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(enseignant._id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
};
