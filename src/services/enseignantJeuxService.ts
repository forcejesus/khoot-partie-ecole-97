
import { api } from './apiClient';

interface CreatedBy {
  _id: string;
  nom: string;
  prenom: string;
  matricule: string;
  genre: string;
  statut: string;
  phone: string;
  email: string;
  adresse: string;
  role: string;
  pays?: {
    _id: string;
    libelle: string;
  };
}

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone?: string;
}

interface EnseignantJeu {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  ecole: Ecole;
  date: string;
}

interface EnseignantJeuxResponse {
  success: boolean;
  message: string;
  data: EnseignantJeu[];
  total: number;
  enseignant: {
    _id: string;
    nom: string;
    prenom: string;
    matricule: string;
    genre: string;
    statut: string;
    phone: string;
    email: string;
    adresse: string;
    role: string;
    ecole: Ecole;
  };
}

export const enseignantJeuxService = {
  getEnseignantJeux: async (enseignantId: string): Promise<EnseignantJeuxResponse> => {
    console.log("Getting jeux for enseignant:", enseignantId);
    const response = await api.get(`/api/enseignants/${enseignantId}/jeux`);
    return response.data;
  },
};
