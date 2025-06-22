
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Trophy, Target, Home } from "lucide-react";

const LoginPromotionalSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600 relative flex items-center justify-center p-4 sm:p-6 lg:p-12" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #fb923c 100%)' }}>
      {/* Motifs décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 lg:top-20 left-10 lg:left-20 w-16 lg:w-20 h-16 lg:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-16 lg:bottom-32 right-16 lg:right-32 w-12 lg:w-16 h-12 lg:h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-20 lg:w-24 h-20 lg:h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-300"></div>
        <div className="absolute bottom-10 lg:bottom-20 left-1/3 w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-lg">
        <div className="mb-6 lg:mb-8">
          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="p-4 lg:p-6 bg-white/20 backdrop-blur-sm rounded-full">
              <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 text-white" />
            </div>
          </div>
          <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
            Plateforme Éducative Innovante
          </h2>
          <p className="text-base lg:text-lg xl:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
            Améliorez le potentiel de vos apprenants en utilisant leur environnement familier pour créer une expérience d'apprentissage magique et transformatrice
          </p>
          
          {/* Liste des avantages avec icônes */}
          <div className="space-y-3 lg:space-y-4 xl:space-y-6 mb-6 lg:mb-8 text-left">
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                <Trophy className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">Créez des jeux captivants</h4>
                <p className="text-white/80 text-xs lg:text-sm">Système de suivi et classement pour éveiller l'esprit compétitif et la motivation naturelle de vos élèves</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                <Target className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">Suivi personnalisé</h4>
                <p className="text-white/80 text-xs lg:text-sm">Permettez à vos enseignants de comprendre et accompagner chaque apprenant dans son parcours unique</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                <Home className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">100% en ligne</h4>
                <p className="text-white/80 text-xs lg:text-sm">L'apprentissage continue à la maison, créant un pont naturel entre l'école et le foyer familial</p>
              </div>
            </div>
          </div>

          <Button
            onClick={() => navigate("/offres")}
            size="lg"
            className="bg-white hover:bg-orange-50 font-bold text-sm lg:text-base xl:text-lg px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            style={{ color: '#f97316' }}
          >
            <ArrowRight className="mr-2 h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
            Découvrir nos offres
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPromotionalSection;
