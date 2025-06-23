
export interface School {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
  phone: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  ecole?: string;
  prenom?: string;
  nom?: string;
}

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
  ecole: string;
  prenom: string;
  nom: string;
  iat: number;
  exp: number;
}

export interface LoginResponse {
  token: string;
  message: string;
  statut: number;
  email: string;
  role: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}
