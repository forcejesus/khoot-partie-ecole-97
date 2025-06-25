
import { api } from './apiClient';
import { ApprenantResponse, CreateApprenantRequest, CreateApprenantResponse, UpdateApprenantRequest, UpdateApprenantResponse, DeleteApprenantResponse, Apprenant } from '@/types/apprenant';

export const apprenantService = {
  // Récupérer la liste des apprenants
  getApprenants: async (): Promise<ApprenantResponse> => {
    console.log("Getting apprenants...");
    const response = await api.get('/api/apprenant');
    return response.data;
  },

  // Créer un nouvel apprenant
  createApprenant: async (data: CreateApprenantRequest): Promise<CreateApprenantResponse> => {
    console.log("Creating apprenant with data:", data);
    // Ajouter automatiquement l'avatar
    const dataWithAvatar = {
      ...data,
      avatar: "Mon avatar"
    };
    const response = await api.post('/api/apprenant', dataWithAvatar);
    return response.data;
  },

  // Mettre à jour un apprenant
  updateApprenant: async (id: string, data: UpdateApprenantRequest): Promise<UpdateApprenantResponse> => {
    console.log("Updating apprenant with id:", id, "and data:", data);
    // Ajouter automatiquement l'avatar à "aucune" et traiter l'email
    const emailValue = data.email.toLowerCase().trim() === 'aucune' ? 'aucune@email.com' : data.email;
    const dataWithAvatar = {
      ...data,
      email: emailValue,
      avatar: "aucune"
    };
    console.log("Final data sent to API:", dataWithAvatar);
    const response = await api.post(`/api/apprenant/update/${id}`, dataWithAvatar);
    return response.data;
  },

  // Supprimer un apprenant
  deleteApprenant: async (id: string): Promise<DeleteApprenantResponse> => {
    console.log("Deleting apprenant with id:", id);
    const response = await api.post(`/api/apprenant/delete/${id}`);
    return response.data;
  },
};
