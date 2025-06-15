
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroFeatures from "./hero/HeroFeatures";
import HeroButtons from "./hero/HeroButtons";
import HeroStats from "./hero/HeroStats";
import HeroBackground from "./hero/HeroBackground";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Structure en deux colonnes sur desktop, empilée sur mobile */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Colonne gauche - Contenu principal */}
            <div className="flex flex-col justify-center space-y-8 lg:pr-8">
              <HeroContent />
              <HeroButtons />
            </div>
            
            {/* Colonne droite - Features et Stats */}
            <div className="flex flex-col space-y-12">
              <HeroFeatures />
              <HeroStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
