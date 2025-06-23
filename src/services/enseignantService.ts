
import axios from 'axios';

const API_BASE_URL = 'http://kahoot.nos-apps.com';

export interface CreateEnseignantRequest {
  nom: string;
  prenom: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  adresse: string;
  pays: string;
  role: string;
  password: string;
}

export interface CreateEnseignantResponse {
  success: boolean;
  message: string;
  data: any;
}

export const enseignantService = {
  createEnseignant: async (data: CreateEnseignantRequest): Promise<CreateEnseignantResponse> => {
    const token = localStorage.getItem('token');
    
    const response = await axios.post(`${API_BASE_URL}/api/admin`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    
    return response.data;
  },
};
