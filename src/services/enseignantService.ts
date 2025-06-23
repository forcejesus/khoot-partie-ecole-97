
import { api } from './apiClient';

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
    const response = await api.post('/api/admin', data);
    return response.data;
  },
};
