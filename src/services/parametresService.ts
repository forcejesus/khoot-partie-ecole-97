
import { api } from './apiClient';

export interface Pays {
  _id: string;
  libelle: string;
  __v?: number;
}

export interface Admin {
  _id: string;
  nom: string;
  prenom: string;
  matricule: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  password: string;
  adresse: string;
  pays: Pays;
  role: string;
  ecole: string;
  date: string;
  __v?: number;
}

export interface Ecole {
  id: string;
  libelle: string;
  adresse: string;
  ville: string;
  telephone: string;
  email: string;
  pays: Pays;
  admin: Admin;
}

export interface Abonnement {
  id: string;
  nom: string;
  description: string;
  prix: number;
  dureeEnJours: number;
  statut: string;
}

export interface Limites {
  apprenants: {
    actuels: number;
    maximum: number;
  };
  enseignants: {
    actuels: number;
    maximum: number;
  };
  jeux: {
    actuels: number;
    maximum: number;
  };
}

export interface ParametresData {
  ecole: Ecole;
  abonnement: Abonnement;
  limites: Limites;
}

export interface ParametresResponse {
  success: boolean;
  message: string;
  data: ParametresData;
  timestamp: string;
}

export const parametresService = {
  getParametres: async (): Promise<ParametresResponse> => {
    const response = await api.get('/api/parametres');
    return response.data;
  },
};
