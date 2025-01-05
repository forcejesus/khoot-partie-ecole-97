export interface Enseignant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  statut: string;
  password: string;
  ecole: {
    _id: string;
    libelle?: string;
  };
  date: string;
}