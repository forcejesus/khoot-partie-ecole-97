
import axios from 'axios';
import { ApprenantResponse, CreateApprenantRequest, CreateApprenantResponse } from '@/types/apprenant';

const API_BASE_URL = 'http://kahoot.nos-apps.com';

export const apprenantService = {
  // Récupérer la liste des apprenants
  getApprenants: async (): Promise<ApprenantResponse> => {
    const token = localStorage.getItem('token');
    
    const response = await axios.get(`${API_BASE_URL}/api/apprenant`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response.data;
  },

  // Créer un nouvel apprenant
  createApprenant: async (data: CreateApprenantRequest): Promise<CreateApprenantResponse> => {
    const token = localStorage.getItem('token');
    
    const response = await axios.post(`${API_BASE_URL}/api/apprenant`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    return response.data;
  },
};
