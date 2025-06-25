
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gamepad2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const EnseignantJeuxHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-6">
      <Button
        variant="outline"
        size="lg"
        onClick={() => navigate("/enseignants")}
        className="border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Retour aux enseignants
      </Button>
      
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg mt-4">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              Jeux de l'enseignant
            </h1>
            <p className="text-orange-100 text-xl">
              Explorez et gérez tous les jeux créés par cet enseignant
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
