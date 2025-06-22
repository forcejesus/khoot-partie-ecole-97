
import { Users, Star, Crown } from "lucide-react";

export const fallbackOffers = [
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
