
import { Users, Star, Crown } from "lucide-react";

// Fonction pour formater le prix en F CFA
export const formatPrice = (prix: number) => {
  return `${prix.toLocaleString('fr-FR')} F CFA`;
};

// Fonction pour obtenir l'icône basée sur le nom de l'abonnement
export const getIconByName = (nom: string) => {
  const nomLower = nom.toLowerCase();
  
  if (nomLower.includes('premium')) {
    return Star;
  }
  if (nomLower.includes('ulta') || nomLower.includes('ultra')) {
    return Crown;
  }
  // Pack Pro et autres utilisent Users
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
  
  // Gestion du nombre d'apprenants
  if (abonnement.nombreApprenantsMax) {
    if (abonnement.nombreApprenantsMax >= 1000) {
      features.push("Apprenants illimités");
    } else {
      features.push(`Jusqu'à ${abonnement.nombreApprenantsMax} apprenants`);
    }
  }
  
  // Gestion du nombre d'enseignants
  if (abonnement.nombreEnseignantsMax) {
    features.push(`${abonnement.nombreEnseignantsMax} enseignants max`);
  }
  
  // Gestion du nombre de jeux
  if (abonnement.nombreJeuxMax) {
    if (abonnement.nombreJeuxMax >= 200) {
      features.push("Création de jeux illimitée");
    } else {
      features.push(`${abonnement.nombreJeuxMax} jeux par mois`);
    }
  }
  
  // Ajout du support
  features.push("Support prioritaire");
  
  return features;
};
