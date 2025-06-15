
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroFeatures from "./hero/HeroFeatures";
import HeroButtons from "./hero/HeroButtons";
import HeroBackground from "./hero/HeroBackground";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white overflow-hidden min-h-screen flex items-center">
      <HeroBackground />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-16">
            {/* Contenu principal centré - Titre et slogans */}
            <div className="space-y-12">
              <HeroContent />
              <HeroButtons />
            </div>
            
            {/* Features en ligne sur desktop, empilées sur mobile */}
            <div className="max-w-3xl mx-auto">
              <HeroFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
