
import { api } from './apiClient';
import { AbonnementResponse } from '@/types/abonnement';

export const abonnementService = {
  async getAbonnements(): Promise<AbonnementResponse> {
    try {
      console.log('abonnementService - Appel API...');
      
      const response = await api.get('/api/abonnements');
      console.log('abonnementService - Réponse complète:', response);
      console.log('abonnementService - Données reçues:', response.data);
      
      return response.data;
    } catch (error) {
      console.error('abonnementService - Erreur lors de la récupération des abonnements:', error);
      throw error;
    }
  }
};
