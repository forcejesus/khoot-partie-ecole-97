
import React from "react";
import { Users, Star, Crown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffersHeader from "@/components/offers/OffersHeader";
import OfferCard from "@/components/offers/OfferCard";
import AdditionalFeatures from "@/components/offers/AdditionalFeatures";
import OffersCallToAction from "@/components/offers/OffersCallToAction";
import { useLanguage } from "@/contexts/LanguageContext";
import { abonnementService } from "@/services/abonnementService";
import { Skeleton } from "@/components/ui/skeleton";

const Offres = () => {
  const { t, language } = useLanguage();
  
  const { data: abonnementsData, isLoading, error } = useQuery({
    queryKey: ['abonnements'],
    queryFn: abonnementService.getAbonnements,
  });

  // Fonction pour formater le prix en F CFA
  const formatPrice = (prix: number) => {
    return `${prix.toLocaleString('fr-FR')} F CFA`;
  };

  // Fonction pour obtenir l'icône basée sur le nom de l'abonnement
  const getIconByName = (nom: string) => {
    if (nom.toLowerCase().includes('premium') || nom.toLowerCase().includes('pro')) {
      return Star;
    }
    if (nom.toLowerCase().includes('excellence') || nom.toLowerCase().includes('enterprise')) {
      return Crown;
    }
    return Users;
  };

  // Fonction pour obtenir les couleurs basées sur l'index
  const getColorScheme = (index: number) => {
    const schemes = [
      {
        color: "from-orange-500 to-red-500",
        borderColor: "border-orange-200",
        bgGradient: "from-white to-orange-50"
      },
      {
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-400",
        bgGradient: "from-yellow-50 to-orange-50"
      },
      {
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-200",
        bgGradient: "from-white to-green-50"
      }
    ];
    return schemes[index % schemes.length];
  };

  // Fonction pour générer les fonctionnalités basées sur les données de l'abonnement
  const generateFeatures = (abonnement: any) => {
    const features = [];
    
    if (abonnement.nombreApprenantsMax) {
      if (abonnement.nombreApprenantsMax >= 1000) {
        features.push("Apprenants illimités");
      } else {
        features.push(`Jusqu'à ${abonnement.nombreApprenantsMax} apprenants`);
      }
    }
    
    if (abonnement.nombreEnseignantsMax) {
      features.push(`${abonnement.nombreEnseignantsMax} enseignants max`);
    }
    
    if (abonnement.nombreJeuxMax) {
      if (abonnement.nombreJeuxMax >= 50) {
        features.push("Création de jeux illimitée");
      } else {
        features.push(`${abonnement.nombreJeuxMax} jeux par mois`);
      }
    }
    
    features.push("Support prioritaire");
    
    return features;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <Navbar />
        <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
          <OffersHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96">
                <Skeleton className="w-full h-full rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    console.error('Erreur lors du chargement des abonnements:', error);
    // Fallback vers les offres statiques en cas d'erreur
    const fallbackOffers = [
      {
        name: "Découverte",
        price: "25.000 F CFA",
        period: "/ mois",
        description: "Parfait pour débuter",
        icon: Users,
        color: "from-orange-500 to-red-500",
        borderColor: "border-orange-200",
        bgGradient: "from-white to-orange-50",
        features: [
          "Jusqu'à 50 apprenants",
          "5 enseignants maximum",
          "10 jeux par mois",
          "Support par email"
        ]
      },
      {
        name: "Premium",
        price: "50.000 F CFA", 
        period: "/ mois",
        description: "Le plus populaire",
        icon: Star,
        color: "from-yellow-500 to-orange-500",
        borderColor: "border-yellow-400",
        bgGradient: "from-yellow-50 to-orange-50",
        isPopular: true,
        features: [
          "Apprenants illimités",
          "25 enseignants max",
          "Création de jeux illimitée",
          "Support prioritaire"
        ]
      },
      {
        name: "Excellence",
        price: "Sur mesure",
        period: "",
        description: "Solution entreprise",
        icon: Crown,
        color: "from-green-500 to-emerald-500",
        borderColor: "border-green-200",
        bgGradient: "from-white to-green-50",
        features: [
          "Tout illimité",
          "Formation personnalisée",
          "Support dédié 24/7",
          "Intégration sur mesure"
        ]
      }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <Navbar />
        <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
        <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 relative z-10">
          <OffersHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16 md:mb-20">
            {fallbackOffers.map((offer, index) => (
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
  }

  // Transformer les données de l'API en format compatible avec OfferCard
  const offers = abonnementsData?.data?.slice(0, 6).map((abonnement, index) => {
    const colorScheme = getColorScheme(index);
    const isPopular = index === 1; // Le deuxième abonnement est marqué comme populaire
    
    return {
      name: abonnement.nom,
      price: formatPrice(abonnement.prix),
      period: abonnement.dureeEnJours ? `/ ${abonnement.dureeEnJours} jours` : "/ mois",
      description: abonnement.description || "Abonnement professionnel",
      icon: getIconByName(abonnement.nom),
      ...colorScheme,
      isPopular,
      features: generateFeatures(abonnement)
    };
  }) || [];

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
