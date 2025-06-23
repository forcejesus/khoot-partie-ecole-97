
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OffersCallToAction = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="text-center py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Prêt à révolutionner l'éducation ?
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Rejoignez des milliers d'écoles qui ont déjà transformé leur méthode d'apprentissage avec AKILI
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Nous contacter
          </Button>
          <Button 
            onClick={() => navigate("/inscription-ecoles")}
            variant="outline"
            className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Commencer maintenant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OffersCallToAction;
