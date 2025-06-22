
import axios from "axios";
import { config } from "@/config/hosts";
import { StatsData } from "@/types/statistics";

export const fetchStats = async (): Promise<StatsData> => {
  console.log("=== DEBUT fetchStats ===");
  const token = localStorage.getItem("token");
  console.log("Token trouvé:", !!token);
  console.log("URL API:", `${config.api.baseUrl}/api/mon-ecole/statistiques`);
  
  if (!token) {
    console.error("Aucun token trouvé dans localStorage");
    throw new Error("No token found");
  }
  
  try {
    console.log("Envoi de la requête API...");
    const response = await axios.get(`${config.api.baseUrl}/api/mon-ecole/statistiques`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
    });
    
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
    
    if (axios.isAxiosError(error)) {
      console.error("Erreur Axios:", {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        headers: error.response?.headers
      });
    }
    
    console.error("=== FIN fetchStats ERROR ===");
    throw error;
  }
};
