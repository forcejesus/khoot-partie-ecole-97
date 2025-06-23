
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
  ecole?: School;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

export interface DecodedToken {
  id: string;
  email: string;
  prenom: string;
  nom: string;
  role: string;
  ecole?: School;
}
