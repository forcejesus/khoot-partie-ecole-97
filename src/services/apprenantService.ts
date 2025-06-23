
import { api } from './apiClient';
import { ApprenantResponse, CreateApprenantRequest, CreateApprenantResponse } from '@/types/apprenant';

export const apprenantService = {
  // Récupérer la liste des apprenants
  getApprenants: async (): Promise<ApprenantResponse> => {
    console.log("Getting apprenants...");
    const response = await api.get('/api/apprenant');
    return response.data;
  },

  // Créer un nouvel apprenant
  createApprenant: async (data: CreateApprenantRequest): Promise<CreateApprenantResponse> => {
    console.log("Creating apprenant with data:", data);
    const response = await api.post('/api/apprenant', data);
    return response.data;
  },
};
