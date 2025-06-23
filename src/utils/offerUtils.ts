
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
  
  // Durée de l'abonnement
  if (abonnement.dureeEnJours) {
    features.push(`Durée: ${abonnement.dureeEnJours} jours`);
  }
  
  // Nombre total de jeux
  if (abonnement.nombreJeuxMax) {
    features.push(`${abonnement.nombreJeuxMax} jeux maximum`);
  }
  
  // Nombre total d'apprenants
  if (abonnement.nombreApprenantsMax) {
    features.push(`${abonnement.nombreApprenantsMax} apprenants maximum`);
  }
  
  // Nombre total d'enseignants
  if (abonnement.nombreEnseignantsMax) {
    features.push(`${abonnement.nombreEnseignantsMax} enseignants maximum`);
  }
  
  return features;
};
