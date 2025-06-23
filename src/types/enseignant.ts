
export interface Enseignant {
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
  // Propriété computed pour compatibilité avec l'ancien code
  name: string;
}
