
import { DecodedToken, User } from "@/types/auth";

export const decodeJWTToken = (token: string): DecodedToken => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  const decoded = JSON.parse(jsonPayload);
  
  // Vérifier les champs requis
  if (!decoded.id || !decoded.email || !decoded.prenom || !decoded.nom) {
    throw new Error("Token invalide - données manquantes");
  }

  return decoded;
};

export const createUserFromToken = (decoded: DecodedToken): User => {
  return {
    id: decoded.id,
    name: `${decoded.prenom} ${decoded.nom}`,
    email: decoded.email,
    role: decoded.role || 'admin',
    ecole: decoded.ecole
  };
};
