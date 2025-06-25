
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Mail, MapPin, Hash, School } from "lucide-react";
import { EnseignantInfo } from "@/services/enseignantJeuxService";

interface EnseignantInfoCardProps {
  enseignantInfo: EnseignantInfo;
}

export const EnseignantInfoCard = ({ enseignantInfo }: EnseignantInfoCardProps) => {
  const getInitials = (nom: string, prenom: string) => {
    return `${nom?.charAt(0) || ''}${prenom?.charAt(0) || ''}`.toUpperCase();
  };

  return (
    <Card className="border-orange-200 bg-gradient-to-r from-white to-orange-50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-700">
          <User className="h-5 w-5" />
          Informations de l'enseignant
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-6">
          <Avatar className="h-20 w-20 border-4 border-orange-200">
            <AvatarFallback className="bg-orange-100 text-orange-700 font-bold text-2xl">
              {getInitials(enseignantInfo.nom, enseignantInfo.prenom)}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-3 flex-1">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {enseignantInfo.prenom} {enseignantInfo.nom}
              </h3>
              <p className="text-orange-600 font-medium">{enseignantInfo.role}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>{enseignantInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Hash className="h-4 w-4 text-orange-500" />
                <span>{enseignantInfo.matricule}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <School className="h-4 w-4 text-orange-500" />
                <span>{enseignantInfo.ecole.libelle}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>{enseignantInfo.ecole.ville}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
