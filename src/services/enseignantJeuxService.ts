
import { api } from './apiClient';

export interface EnseignantJeu {
  _id: string;
  title: string;
  description: string;
  subject: string;
  level: string;
  imageUrl: string;
  questions: number;
  timeLimit: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  planifications?: Planification[];
}

export interface Planification {
  _id: string;
  dateDebut: string;
  dateFin: string;
  statut: string;
  participants: number;
}

export interface EnseignantJeuxResponse {
  success: boolean;
  message: string;
  data: EnseignantJeu[];
  enseignant: {
    _id: string;
    nom: string;
    prenom: string;
    email: string;
    matricule: string;
  };
  total: number;
}

export const enseignantJeuxService = {
  getEnseignantJeux: async (enseignantId: string): Promise<EnseignantJeuxResponse> => {
    console.log("Getting jeux for enseignant:", enseignantId);
    const response = await api.get(`/api/enseignants/${enseignantId}/jeux`);
    return response.data;
  },
};
