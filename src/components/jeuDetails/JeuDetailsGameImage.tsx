
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { GameImageWithLoader } from "@/components/games/GameImageWithLoader";

interface JeuDetailsGameImageProps {
  titre: string;
  image: string | null;
  date: string;
  defaultGameImage: string;
}

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

export const JeuDetailsGameImage = ({ titre, image, date, defaultGameImage }: JeuDetailsGameImageProps) => {
  return (
    <Card className="border-orange-200 shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {titre}
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Calendar className="h-4 w-4 text-orange-500" />
            <span className="font-medium">Créé le {formatDate(date)}</span>
          </div>
          <GameImageWithLoader 
            src={image} 
            alt={titre}
            fallbackSrc={defaultGameImage}
            className="relative h-80 w-full rounded-xl overflow-hidden shadow-md border border-orange-100"
          />
        </div>
      </CardContent>
    </Card>
  );
};
