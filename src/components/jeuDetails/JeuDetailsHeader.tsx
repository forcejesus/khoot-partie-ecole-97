
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const JeuDetailsHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4">
      <Button 
        variant="outline" 
        onClick={() => navigate("/jeux")}
        className="flex items-center gap-2 border-orange-200 text-orange-700 hover:bg-orange-50"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour
      </Button>
      <h1 className="text-2xl font-bold text-gray-900">Détails du jeu</h1>
    </div>
  );
};
