
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, School, MapPin, Phone, Mail } from "lucide-react";

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

export const JeuDetailsTeacherInfo = ({ createdBy, ecole }: JeuDetailsTeacherInfoProps) => {
  return (
    <Card className="border-orange-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
        <CardTitle className="flex items-center gap-2 text-orange-800">
          <User className="h-5 w-5" />
          Enseignant créateur
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-3">
          <div>
            <p className="font-semibold text-lg text-gray-900">
              {createdBy.prenom} {createdBy.nom}
            </p>
            <p className="text-sm text-gray-600">Matricule: {createdBy.matricule}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-gray-900 border-gray-300">
              {createdBy.role}
            </Badge>
            <Badge variant="secondary" className="bg-gray-100 text-gray-800">
              {createdBy.statut}
            </Badge>
          </div>

          <div className="space-y-2 pt-2">
            {createdBy.phone && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>{createdBy.phone}</span>
              </div>
            )}
            
            {createdBy.email && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>{createdBy.email}</span>
              </div>
            )}
            
            {createdBy.adresse && (
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>{createdBy.adresse}</span>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <School className="h-4 w-4 text-orange-500" />
            <span className="font-semibold text-gray-800">École</span>
          </div>
          <div className="space-y-1">
            <p className="font-medium text-gray-900">{ecole.libelle}</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="h-3 w-3" />
              <span>{ecole.ville}</span>
            </div>
            {ecole.telephone && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-3 w-3" />
                <span>{ecole.telephone}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
