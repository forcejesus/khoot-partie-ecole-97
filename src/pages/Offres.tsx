
import React from "react";
import { Users, Star, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffersHeader from "@/components/offers/OffersHeader";
import OfferCard from "@/components/offers/OfferCard";
import AdditionalFeatures from "@/components/offers/AdditionalFeatures";
import OffersCallToAction from "@/components/offers/OffersCallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

const Offres = () => {
  const { t, language } = useLanguage();
  
  // Get features from translations as arrays
  const getFeatures = (key: string): string[] => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return Array.isArray(value) ? value : [];
  };
  
  const offers = [
    {
      name: t("offers.discovery.name"),
      price: t("offers.discovery.price"),
      period: t("offers.discovery.period"),
      description: t("offers.discovery.description"),
      icon: Users,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200",
      bgGradient: "from-white to-orange-50",
      features: getFeatures("offers.discovery.features")
    },
    {
      name: t("offers.wisdom.name"),
      price: t("offers.wisdom.price"), 
      period: t("offers.wisdom.period"),
      description: t("offers.wisdom.description"),
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-400",
      bgGradient: "from-yellow-50 to-orange-50",
      isPopular: true,
      features: getFeatures("offers.wisdom.features")
    },
    {
      name: t("offers.excellence.name"),
      price: t("offers.excellence.price"),
      period: "",
      description: t("offers.excellence.description"),
      icon: Crown,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
      bgGradient: "from-white to-green-50",
      features: getFeatures("offers.excellence.features")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Navbar />
      
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
      
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
        <OffersHeader />

        {/* Grille des offres responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {offers.map((offer, index) => (
            <OfferCard
              key={index}
              {...offer}
              index={index}
            />
          ))}
        </div>

        <AdditionalFeatures />
        <OffersCallToAction />
      </div>
      
      <Footer />
    </div>
  );
};

export default Offres;
