
import { api } from './apiClient';

export interface EnseignantJeu {
  _id: string;
  titre: string;
  image: string;
  createdBy: {
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
      telephone: string;
    };
    date: string;
  };
  planification: Planification[];
  questions: Question[];
  ecole: {
    _id: string;
    libelle: string;
    ville: string;
    telephone: string;
  };
  date: string;
}

export interface Planification {
  _id: string;
  pin: string;
  statut: string;
  date_debut: string;
  date_fin: string;
  heure_debut: string;
  heure_fin: string;
  type: string;
  limite_participant: number;
  participants: Participant[];
  jeu: string;
  date: string;
}

export interface Participant {
  _id: string;
  score: number;
  reponses: string[];
  apprenant: {
    _id: string;
    nom: string;
    prenom: string;
    avatar: string;
    matricule: string;
  };
  planification: string;
  date: string;
}

export interface Question {
  _id: string;
  libelle: string;
  temps: number;
  limite_response: boolean;
  reponses: any[];
  typeQuestion: {
    _id: string;
    libelle: string;
    description: string;
    reference: string;
    date: string;
  };
  point: {
    _id: string;
    nature: string;
    valeur: number;
    description: string;
    date: string;
  };
  jeu: string;
  date: string;
}

export interface EnseignantInfo {
  id: string;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  matricule: string;
  ecole: {
    _id: string;
    libelle: string;
    ville: string;
    telephone: string;
  };
}

export interface GameStatistics {
  totalJeux: number;
  jeuxAvecQuestions: number;
  jeuxAvecPlanifications: number;
  dernierJeuCree: string;
}

export interface EnseignantJeuxResponse {
  success: boolean;
  message: string;
  data: {
    enseignant: EnseignantInfo;
    jeux: EnseignantJeu[];
    statistiques: GameStatistics;
  };
  total: number;
  timestamp: string;
}

export const enseignantJeuxService = {
  getEnseignantJeux: async (enseignantId: string): Promise<EnseignantJeuxResponse> => {
    console.log("Getting jeux for enseignant:", enseignantId);
    const response = await api.get(`/api/jeux/enseignant/${enseignantId}`);
    return response.data;
  },
};
