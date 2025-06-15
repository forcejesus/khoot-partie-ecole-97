
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <HeroContent />
              <HeroFeatures />
              <HeroButtons />
            </div>

            {/* Right Column - Stats */}
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
