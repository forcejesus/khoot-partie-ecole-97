
import { api } from './apiClient';

export interface Notification {
  id: string;
  titre: string;
  contenu: string;
  date: string;
  type: 'info' | 'alerte' | 'urgent' | 'maintenance';
  statut: 'lue' | 'non_lue';
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationsResponse {
  success: boolean;
  message: string;
  data: Notification[];
  total: number;
  nonLues: number;
  ecole: {
    id: string;
    nom: string;
    ville: string;
    telephone: string;
  };
  user: {
    id: string;
    email: string;
    role: string;
  };
}

export const notificationService = {
  getMyNotifications: async (): Promise<NotificationsResponse> => {
    const response = await api.get('/api/notifications/my-notifications');
    return response.data;
  },

  markAsRead: async (notificationId: string): Promise<{ success: boolean; message: string }> => {
    const response = await api.post(`/api/notifications/${notificationId}/marquer-lue`);
    return response.data;
  },

  markAllAsRead: async (): Promise<{ success: boolean; message: string }> => {
    const response = await api.post('/api/notifications/marquer-toutes-lues');
    return response.data;
  },
};
