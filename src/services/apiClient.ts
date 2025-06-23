
import axios from 'axios';
import { config } from '@/config/hosts';

// Instance axios principale pour toutes les requêtes
export const apiClient = axios.create({
  baseURL: config.api.baseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Intercepteur pour ajouter automatiquement le token d'authentification
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses et erreurs
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response [${response.config.method?.toUpperCase()}] ${response.config.url}:`, response.data);
    return response;
  },
  (error) => {
    console.error(`API Error [${error.config?.method?.toUpperCase()}] ${error.config?.url}:`, {
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
    });
    return Promise.reject(error);
  }
);

// Méthodes utilitaires pour les requêtes
export const api = {
  get: (url: string, config?: any) => apiClient.get(url, config),
  post: (url: string, data?: any, config?: any) => apiClient.post(url, data, config),
  put: (url: string, data?: any, config?: any) => apiClient.put(url, data, config),
  delete: (url: string, config?: any) => apiClient.delete(url, config),
  patch: (url: string, data?: any, config?: any) => apiClient.patch(url, data, config),
};

export default apiClient;
