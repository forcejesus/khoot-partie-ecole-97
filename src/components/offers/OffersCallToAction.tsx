
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OffersCallToAction = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="text-center bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      {/* Motifs de fond */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
          {t("offers.cta.title")}
        </h2>
        <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          {t("offers.cta.description")}
        </p>
        
        <Button
          onClick={() => navigate("/contact")}
          size="lg"
          className="bg-white hover:bg-gray-100 text-orange-600 hover:text-orange-700 font-bold text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
        >
          <Mail className="mr-2 h-5 w-5" />
          Contactez-nous
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default OffersCallToAction;
