
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowLeft } from "lucide-react";

export const JeuDetailsNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-12">
      <Gamepad2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <p className="text-gray-600 text-lg">Jeu introuvable</p>
      <Button onClick={() => navigate("/jeux")} className="mt-4">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour aux jeux
      </Button>
    </div>
  );
};
