
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, User, Mail, Phone, MapPin } from "lucide-react";

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone: string;
}

interface CreatedBy {
  _id: string;
  nom: string;
  prenom: string;
  matricule: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  adresse: string;
  role: string;
  pays?: {
    _id: string;
    libelle: string;
  };
  ecole?: Ecole;
  date: string;
}

interface JeuDetailsTeacherInfoProps {
  createdBy: CreatedBy;
  ecole: Ecole;
}

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'admin':
      return 'bg-red-100 text-red-800 border-red-300';
    case 'enseignant':
      return 'bg-blue-100 text-blue-800 border-blue-300';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300';
  }
};

const getRoleLabel = (role: string) => {
  switch (role) {
    case 'admin':
      return 'Admin';
    case 'enseignant':
      return 'Enseignant';
    default:
      return role;
  }
};

export const JeuDetailsTeacherInfo = ({ createdBy, ecole }: JeuDetailsTeacherInfoProps) => {
  return (
    <Card className="border-orange-200 sticky top-6 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
        <CardTitle className="text-lg text-orange-800 font-bold flex items-center gap-2">
          <UserCheck className="h-5 w-5" />
          Enseignant créateur
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-3">
            <User className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="font-bold text-gray-900 text-lg">
            {createdBy.prenom} {createdBy.nom}
          </h3>
          <Badge variant="outline" className={`${getRoleBadgeColor(createdBy.role)} mt-2`}>
            {getRoleLabel(createdBy.role)}
          </Badge>
        </div>
        
        <div className="space-y-3 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Matricule</p>
              <p className="font-mono text-sm font-medium text-gray-900">{createdBy.matricule}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Mail className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-900">{createdBy.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Phone className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Téléphone</p>
              <p className="text-sm font-medium text-gray-900">{createdBy.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <MapPin className="h-4 w-4 text-gray-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">École</p>
              <p className="text-sm font-medium text-gray-900">{ecole.libelle}</p>
              <p className="text-xs text-gray-600">{ecole.ville}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
