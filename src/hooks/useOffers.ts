
import { useQuery } from "@tanstack/react-query";
import { abonnementService } from "@/services/abonnementService";
import { formatPrice, getIconByName, getColorScheme, generateFeatures } from "@/utils/offerUtils";

export const useOffers = () => {
  const { data: abonnementsData, isLoading, error } = useQuery({
    queryKey: ['abonnements'],
    queryFn: abonnementService.getAbonnements,
  });

  // Transformer les données de l'API en format compatible avec OfferCard
  const offers = abonnementsData?.data?.map((abonnement, index) => {
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

  return {
    offers,
    isLoading,
    error
  };
};
