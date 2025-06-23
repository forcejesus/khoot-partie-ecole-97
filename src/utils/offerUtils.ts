
import { Users, Star, Crown } from "lucide-react";

// Fonction pour formater le prix en F CFA
export const formatPrice = (prix: number) => {
  return `${prix.toLocaleString('fr-FR')} F CFA`;
};

// Fonction pour obtenir l'icône basée sur le nom de l'abonnement
export const getIconByName = (nom: string) => {
  if (nom.toLowerCase().includes('premium') || nom.toLowerCase().includes('pro')) {
    return Star;
  }
  if (nom.toLowerCase().includes('excellence') || nom.toLowerCase().includes('enterprise')) {
    return Crown;
  }
  return Users;
};

// Fonction pour obtenir les couleurs basées sur l'index
export const getColorScheme = (index: number) => {
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
export const generateFeatures = (abonnement: any) => {
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
