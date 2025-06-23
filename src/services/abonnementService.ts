
import axios from 'axios';
import { config } from '@/config/hosts';
import { AbonnementResponse } from '@/types/abonnement';

export const abonnementService = {
  async getAbonnements(): Promise<AbonnementResponse> {
    try {
      const url = `${config.api.baseUrl}/api/abonnements`;
      console.log('abonnementService - URL appelée:', url);
      
      const response = await axios.get(url);
      console.log('abonnementService - Réponse complète:', response);
      console.log('abonnementService - Données reçues:', response.data);
      
      return response.data;
    } catch (error) {
      console.error('abonnementService - Erreur lors de la récupération des abonnements:', error);
      if (error.response) {
        console.error('abonnementService - Détails de l\'erreur:', {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
          headers: error.response.headers
        });
      }
      throw error;
    }
  }
};
