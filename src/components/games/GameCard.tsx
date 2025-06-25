
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Eye, User } from "lucide-react";
import { GameImageWithLoader } from "./GameImageWithLoader";

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
}

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone?: string;
}

interface Jeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  ecole: Ecole;
  date: string;
}

interface GameCardProps {
  jeu: Jeu;
  defaultGameImage: string;
}

export const GameCard = ({ jeu, defaultGameImage }: GameCardProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleViewDetails = (jeuId: string) => {
    navigate(`/jeux/${jeuId}`);
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'enseignant':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
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

  return (
    <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:border-orange-300 bg-white">
      <CardHeader className="pb-3">
        {/* Image du jeu avec loader */}
        <GameImageWithLoader 
          src={jeu.image} 
          alt={jeu.titre}
          fallbackSrc={defaultGameImage}
        />

        <div className="mt-3">
          <CardTitle className="text-lg font-bold text-orange-700 line-clamp-2 mb-3">
            {jeu.titre}
          </CardTitle>
          
          {/* Créateur du jeu mis en valeur */}
          <div className="mb-3 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 mb-2">
              <User className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Créé par</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">
                  {jeu.createdBy.prenom} {jeu.createdBy.nom}
                </p>
                <p className="text-xs text-gray-600">{jeu.createdBy.matricule}</p>
              </div>
              <Badge variant="outline" className={getRoleBadgeColor(jeu.createdBy.role)}>
                {getRoleLabel(jeu.createdBy.role)}
              </Badge>
            </div>
          </div>

          {/* École */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="h-4 w-4" />
            <span>{jeu.ecole.libelle}</span>
            <span className="text-gray-400">•</span>
            <span>{jeu.ecole.ville}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between text-sm mb-4">
          <div className="flex items-center gap-1 text-gray-500">
            <Calendar className="h-4 w-4" />
            <span>Créé le</span>
          </div>
          <span className="font-medium text-gray-700">
            {formatDate(jeu.date)}
          </span>
        </div>
        
        <Button 
          onClick={() => handleViewDetails(jeu._id)}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          size="sm"
        >
          <Eye className="h-4 w-4 mr-2" />
          Voir les détails
        </Button>
      </CardContent>
    </Card>
  );
};
