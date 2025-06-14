
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import OffresSection from "@/components/OffresSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <OffresSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
