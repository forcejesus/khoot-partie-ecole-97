
import { api } from './apiClient';
import { StatsData } from "@/types/statistics";

export const fetchStats = async (): Promise<StatsData> => {
  console.log("=== DEBUT fetchStats ===");
  console.log("Envoi de la requête API...");
  
  try {
    const response = await api.get('/api/mon-ecole/statistiques');
    
    console.log("Réponse complète de l'API:", response);
    console.log("Status de la réponse:", response.status);
    console.log("Données de la réponse:", response.data);
    
    // Accéder aux statistiques selon le format exact de l'API
    const apiData = response.data?.data?.statistiques;
    console.log("Statistiques extraites:", apiData);
    
    if (!apiData) {
      console.error("Aucune donnée de statistiques trouvée dans la réponse");
      throw new Error("No statistics data found in response");
    }
    
    // Créer un objet sûr avec des valeurs par défaut
    const safeStats: StatsData = {
      total_apprenants: Number(apiData.total_apprenants) || 0,
      total_enseignants: Number(apiData.total_enseignants) || 0,
      total_jeux: Number(apiData.total_jeux) || 0,
      total_planifications: Number(apiData.total_planifications) || 0
    };
    
    console.log("Statistiques finales:", safeStats);
    console.log("=== FIN fetchStats SUCCESS ===");
    
    return safeStats;
  } catch (error) {
    console.error("=== ERREUR dans fetchStats ===");
    console.error("Type d'erreur:", error);
    console.error("=== FIN fetchStats ERROR ===");
    throw error;
  }
};
