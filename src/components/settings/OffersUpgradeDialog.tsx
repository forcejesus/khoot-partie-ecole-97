import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Users, Star, Crown, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { abonnementService } from "@/services/abonnementService";
import { Skeleton } from "@/components/ui/skeleton";

interface OffersUpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const OffersUpgradeDialog = ({ open, onOpenChange }: OffersUpgradeDialogProps) => {
  const { data: abonnementsData, isLoading } = useQuery({
    queryKey: ['abonnements'],
    queryFn: abonnementService.getAbonnements,
    enabled: open, // Ne charger que quand le dialog est ouvert
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

  // Fallback offers en cas d'erreur ou de données manquantes
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

  // Transformer les données de l'API ou utiliser les fallback - AFFICHER TOUS LES ABONNEMENTS
  const offers = abonnementsData?.data?.map((abonnement, index) => {
    const colorScheme = getColorScheme(index);
    const isPopular = index === 1;
    
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
  }) || fallbackOffers;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0 bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50">
        <div className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="p-8">
            <DialogHeader className="text-center mb-8">
              <DialogTitle className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
                Mettez à niveau votre abonnement
              </DialogTitle>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choisissez l'offre qui correspond le mieux à vos besoins éducatifs
              </p>
            </DialogHeader>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-96">
                    <Skeleton className="w-full h-full rounded-3xl" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {offers.map((offer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className={`relative group hover:shadow-2xl transition-all duration-500 border-2 ${offer.borderColor} h-full bg-gradient-to-br ${offer.bgGradient} rounded-3xl overflow-hidden ${offer.isPopular ? 'transform scale-105 shadow-xl ring-2 ring-yellow-400' : ''}`}>
                      {offer.isPopular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                          Le plus populaire
                        </div>
                      )}
                      
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <div className={`mx-auto w-12 h-12 mb-3 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center shadow-lg`}>
                            <offer.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{offer.name}</h3>
                          <p className="text-sm text-gray-600">{offer.description}</p>
                        </div>
                        
                        <div className="text-center mb-6">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                            {offer.price}
                          </div>
                          <span className="text-sm text-gray-500 font-medium">{offer.period}</span>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {offer.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                              <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <Link to="/contact">
                          <Button 
                            className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 transition-all text-white font-semibold py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02]`}
                            onClick={() => onOpenChange(false)}
                          >
                            Choisir cette offre
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OffersUpgradeDialog;
