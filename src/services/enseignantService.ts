
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

export interface EnseignantWithStats {
  _id: string;
  nom: string;
  prenom: string;
  matricule: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  adresse: string;
  pays: {
    _id: string;
    libelle: string;
  };
  role: string;
  ecole: {
    _id: string;
    libelle: string;
    ville: string;
  };
  date: string;
  statistiques: {
    nombreJeux: number;
    nombrePlanifications: number;
  };
}

export interface GetEnseignantsResponse {
  success: boolean;
  message: string;
  data: EnseignantWithStats[];
  total: number;
  ecole: string;
}

export const enseignantService = {
  createEnseignant: async (data: CreateEnseignantRequest): Promise<CreateEnseignantResponse> => {
    const response = await api.post('/api/admin', data);
    return response.data;
  },

  getEnseignants: async (): Promise<GetEnseignantsResponse> => {
    const response = await api.get('/api/mes-enseignants');
    return response.data;
  },

  deleteEnseignant: async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.delete(`/api/user/delete/${id}`);
    return response.data;
  },
};
