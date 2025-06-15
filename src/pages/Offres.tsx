
import React from "react";
import { Users, Star, Crown } from "lucide-react";
import OffersHeader from "@/components/offers/OffersHeader";
import OfferCard from "@/components/offers/OfferCard";
import AdditionalFeatures from "@/components/offers/AdditionalFeatures";
import OffersCallToAction from "@/components/offers/OffersCallToAction";

const Offres = () => {
  const offers = [
    {
      name: "Découverte",
      price: "25 000 FCFA",
      period: "/mois",
      description: "Pour les écoles qui débutent leur transformation numérique",
      icon: Users,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200",
      bgGradient: "from-white to-orange-50",
      features: [
        "Jusqu'à 50 apprenants",
        "5 jeux éducatifs de base",
        "Tableau de bord simple",
        "Support par email",
        "Formation en ligne",
        "Rapports mensuels"
      ]
    },
    {
      name: "Sagesse",
      price: "50 000 FCFA", 
      period: "/mois",
      description: "L'offre la plus populaire pour une croissance équilibrée",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-400",
      bgGradient: "from-yellow-50 to-orange-50",
      isPopular: true,
      features: [
        "Jusqu'à 200 apprenants",
        "Tous les jeux éducatifs",
        "Analytiques avancées",
        "Support prioritaire",
        "Formation personnalisée",
        "Rapports en temps réel",
        "Personnalisation complète",
        "Intégration API"
      ]
    },
    {
      name: "Excellence",
      price: "Sur mesure",
      period: "",
      description: "Solution enterprise pour les grandes institutions",
      icon: Crown,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
      bgGradient: "from-white to-green-50",
      features: [
        "Apprenants illimités",
        "Jeux personnalisés",
        "IA prédictive avancée",
        "Support dédié 24/7",
        "Formation sur site",
        "Rapports personnalisés",
        "White-label complet",
        "SLA garantie"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        <OffersHeader />

        {/* Grille des offres */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
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
    </div>
  );
};

export default Offres;
