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