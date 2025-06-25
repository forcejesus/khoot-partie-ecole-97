
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Sparkles, Users, BarChart3, Trophy, Zap } from "lucide-react";

const LoginPromotionalSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleOffersClick = () => {
    navigate("/offres");
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600 p-4 sm:p-6 lg:p-12 flex items-center justify-center text-white relative overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/20"></div>
        <div className="absolute top-32 right-16 w-16 h-16 rounded-full bg-white/15"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-white/10"></div>
        <div className="absolute bottom-32 right-10 w-12 h-12 rounded-full bg-white/25"></div>
      </div>
      
      <div className="relative z-10 max-w-lg text-center space-y-6 lg:space-y-8">
        {/* Badge principal */}
        <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
          <Sparkles className="h-4 w-4 mr-2" />
          {t("login.promotion.title")}
        </Badge>
        
        {/* Titre principal */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t("login.promotion.title")}
          </h2>
          <p className="text-lg sm:text-xl text-orange-100 font-medium leading-relaxed">
            {t("login.promotion.description")}
          </p>
        </div>
        
        {/* Fonctionnalités clés */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 my-8">
          <Card className="bg-white/10 border-white/20 p-4 lg:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-sm lg:text-base">500+ écoles</h4>
                <p className="text-xs lg:text-sm text-orange-100">Nous font confiance</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-4 lg:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-sm lg:text-base">40% d'amélioration</h4>
                <p className="text-xs lg:text-sm text-orange-100">Des résultats</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-4 lg:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Trophy className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-sm lg:text-base">Gamification</h4>
                <p className="text-xs lg:text-sm text-orange-100">Engagement maximal</p>
              </div>
            </div>
          </Card>
          
          <Card className="bg-white/10 border-white/20 p-4 lg:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-sm lg:text-base">Temps réel</h4>
                <p className="text-xs lg:text-sm text-orange-100">Analytics avancées</p>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Call to action */}
        <div className="space-y-4">
          <Button 
            onClick={handleOffersClick}
            className="w-full bg-white text-orange-600 hover:bg-gray-50 font-semibold py-3 lg:py-4 text-base lg:text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            {t("login.promotion.button")}
          </Button>
          
          <p className="text-sm text-orange-100">
            ✨ Consultation gratuite • Devis personnalisé • Support dédié
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPromotionalSection;
