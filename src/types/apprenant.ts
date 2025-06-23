
export interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone: string;
}

export interface Apprenant {
  _id: string;
  nom: string;
  prenom: string;
  avatar: string;
  matricule: string;
  phone: string;
  email: string;
  ecole: Ecole;
  date: string;
  __v?: number;
}

export interface ApprenantResponse {
  success: boolean;
  message: string;
  data: Apprenant[];
}

export interface CreateApprenantRequest {
  nom: string;
  prenom: string;
}

export interface CreateApprenantResponse {
  success: boolean;
  message: string;
  data: Apprenant;
}

export interface UpdateApprenantRequest {
  nom: string;
  prenom: string;
  matricule: string;
  phone: string;
  email: string;
}

export interface UpdateApprenantResponse {
  success: boolean;
  message: string;
  data: Apprenant;
}

export interface DeleteApprenantResponse {
  success: boolean;
  message: string;
}
