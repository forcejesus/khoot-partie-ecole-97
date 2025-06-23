
export interface Abonnement {
  _id: string;
  nom: string;
  description?: string;
  prix: number;
  dureeEnJours?: number;
  nombreJeuxMax: number;
  nombreApprenantsMax?: number;
  nombreEnseignantsMax?: number;
  dateCreation: string;
}

export interface AbonnementResponse {
  success: boolean;
  data: Abonnement[];
  message: string;
}
