
import { api } from './apiClient';
import { LoginResponse } from '@/types/auth';

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  console.log('=== LOGIN DEBUG INFO ===');
  console.log('Login data:', { email, password });
  console.log('Environment:', import.meta.env.PROD ? 'production' : 'development');

  try {
    const response = await api.post('/api/login', {
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
