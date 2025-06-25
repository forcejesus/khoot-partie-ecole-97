
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/services/apiClient";

interface Reponse {
  _id: string;
  etat: boolean;
  reponse_texte: string;
  question: string;
  date: string;
}

interface TypeQuestion {
  _id: string;
  libelle: string;
  description: string;
  reference: string;
  date: string;
}

interface Point {
  _id: string;
  nature: string;
  valeur: number;
  description: string;
  date: string;
}

interface Question {
  _id: string;
  libelle: string;
  temps: number;
  limite_response: boolean;
  reponses: Reponse[];
  typeQuestion: TypeQuestion;
  point: Point;
  jeu: string;
  date: string;
}

interface Ecole {
  _id: string;
  libelle: string;
  ville: string;
  telephone: string;
}

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
  ecole?: Ecole;
  date: string;
}

interface Participant {
  _id: string;
  score: number;
  apprenant: {
    _id: string;
    nom: string;
    prenom: string;
    matricule: string;
  };
}

interface Planification {
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
}

interface JeuDetails {
  _id: string;
  titre: string;
  image: string | null;
  createdBy: CreatedBy;
  planification: Planification[];
  questions: Question[];
  ecole: Ecole;
  date: string;
}

export const useJeuDetails = (id: string | undefined) => {
  const [jeu, setJeu] = useState<JeuDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchJeuDetails = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      console.log("Récupération des détails du jeu:", `/api/jeux/${id}`);
      
      const response = await api.get(`/api/jeux/${id}`);
      
      console.log("Réponse API détails jeu:", response.data);

      if (response.data.success) {
        setJeu(response.data.data);
      } else {
        throw new Error(response.data.message || "Erreur lors de la récupération du jeu");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jeu:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer les détails du jeu",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJeuDetails();
  }, [id]);

  return { jeu, isLoading, refetch: fetchJeuDetails };
};
