
import { useQuery } from "@tanstack/react-query";
import { abonnementService } from "@/services/abonnementService";
import { formatPrice, getIconByName, getColorScheme, generateFeatures } from "@/utils/offerUtils";

export const useOffers = () => {
  const { data: abonnementsData, isLoading, error } = useQuery({
    queryKey: ['abonnements'],
    queryFn: abonnementService.getAbonnements,
  });

  console.log('useOffers - Données reçues:', abonnementsData);
  console.log('useOffers - Loading:', isLoading);
  console.log('useOffers - Error:', error);

  // Transformer les données de l'API en format compatible avec OfferCard
  const offers = abonnementsData?.data?.map((abonnement, index) => {
    console.log('Transformation abonnement:', abonnement);
    const colorScheme = getColorScheme(index);
    const isPopular = index === 1; // Le deuxième abonnement est marqué comme populaire
    
    const transformedOffer = {
      name: abonnement.nom,
      price: formatPrice(abonnement.prix),
      period: abonnement.dureeEnJours ? `/ ${abonnement.dureeEnJours} jours` : "/ mois",
      description: abonnement.description || "Abonnement professionnel",
      icon: getIconByName(abonnement.nom),
      ...colorScheme,
      isPopular,
      features: generateFeatures(abonnement)
    };

    console.log('Offre transformée:', transformedOffer);
    return transformedOffer;
  }) || [];

  console.log('useOffers - Offres finales:', offers);
  console.log('useOffers - Nombre d\'offres:', offers.length);

  return {
    offers,
    isLoading,
    error
  };
};
