
import axios from 'axios';
import { config } from '@/config/hosts';
import { AbonnementResponse } from '@/types/abonnement';

export const abonnementService = {
  async getAbonnements(): Promise<AbonnementResponse> {
    try {
      const response = await axios.get(`${config.api.baseUrl}/api/abonnement`);
      return response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des abonnements:', error);
      throw error;
    }
  }
};
