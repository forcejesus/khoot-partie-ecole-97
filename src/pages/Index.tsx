import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Bienvenue sur KHOOT ECES
        </h1>
        <p className="text-xl text-gray-600">
          Votre plateforme d'apprentissage interactive
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate("/login")}
            className="text-lg px-8 py-6"
          >
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;