
import { TokenPayload, User } from '@/types/auth';

export const decodeJWTToken = (token: string): TokenPayload => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    const decoded = JSON.parse(jsonPayload);
    console.log("Decoded token payload:", decoded);
    
    // Vérifier les champs requis
    if (!decoded.id || !decoded.email || !decoded.prenom || !decoded.nom) {
      throw new Error("Token invalide - données manquantes");
    }

    return decoded;
  } catch (error) {
    console.error("Error decoding JWT token:", error);
    throw new Error("Token invalide");
  }
};

export const createUserFromToken = (payload: TokenPayload): User => {
  return {
    id: payload.id,
    name: `${payload.prenom} ${payload.nom}`,
    email: payload.email,
    role: payload.role,
    ecole: payload.ecole,
    prenom: payload.prenom,
    nom: payload.nom
  };
};

export const isTokenExpired = (payload: TokenPayload): boolean => {
  const currentTime = Math.floor(Date.now() / 1000);
  return payload.exp < currentTime;
};
