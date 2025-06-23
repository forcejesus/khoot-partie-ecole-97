
import axios from 'axios';
import { config } from '@/config/hosts';
import { LoginResponse } from '@/types/auth';

// Créer une instance axios propre pour l'authentification
const authAxios = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  console.log('=== LOGIN DEBUG INFO ===');
  console.log('API Base URL:', config.api.baseUrl);
  console.log('Full login URL:', `${config.api.baseUrl}/api/login`);
  console.log('Login data:', { email, password });
  console.log('Environment:', import.meta.env.PROD ? 'production' : 'development');

  try {
    const response = await authAxios.post(`${config.api.baseUrl}/api/login`, {
      email,
      password,
    });

    console.log('=== LOGIN SUCCESS ===');
    console.log('Response data:', response.data);
    console.log('Response status:', response.status);

    return response.data;
  } catch (error: any) {
    console.log('=== LOGIN ERROR DEBUG ===');
    console.log('Error status:', error.response?.status);
    console.log('Error data:', error.response?.data);
    console.log('Error headers:', error.response?.headers);
    console.log('Request config:', error.config);

    throw error;
  }
};

export const saveAuthData = (token: string, userData: any) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(userData));
};

export const clearAuthData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getStoredToken = () => {
  return localStorage.getItem("token");
};

export const getStoredUser = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};
