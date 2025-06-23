
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContextType, User, LoginResponse } from "@/types/auth";
import { loginUser, saveAuthData, clearAuthData, getStoredToken, getStoredUser } from "@/services/authService";
import { decodeJWTToken, createUserFromToken, isTokenExpired } from "@/utils/jwtUtils";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AuthProvider useEffect - checking stored token and user");
    const token = getStoredToken();
    const userData = getStoredUser();
    
    console.log("Stored token exists:", !!token);
    console.log("Stored user data:", userData);
    
    if (token && userData) {
      try {
        // Vérifier si le token n'est pas expiré
        const payload = decodeJWTToken(token);
        if (isTokenExpired(payload)) {
          console.log("Token expired, clearing auth data");
          clearAuthData();
          return;
        }
        
        console.log("Token valid, setting user:", userData);
        setUser(userData);
      } catch (error) {
        console.error("Error validating stored token:", error);
        clearAuthData();
      }
    }
  }, []);

  const refreshUser = async () => {
    // Cette fonction peut être utilisée pour rafraîchir les données utilisateur si nécessaire
    const token = getStoredToken();
    const storedUser = getStoredUser();
    
    if (!token || !storedUser) {
      return;
    }
    
    try {
      const payload = decodeJWTToken(token);
      if (isTokenExpired(payload)) {
        logout();
        return;
      }
      
      // Optionnel : faire une requête à l'API pour récupérer les données fraîches
      console.log("User data refreshed from token");
    } catch (error) {
      console.error("Error refreshing user data:", error);
      logout();
    }
  };

  const login = async (email: string, password: string) => {
    console.log("Login attempt for:", email);
    setIsLoading(true);
    
    try {
      const response: LoginResponse = await loginUser(email, password);
      console.log("Login response:", response);

      if (response && response.token && response.statut === 200) {
        // Vérifier que le rôle est "admin"
        if (response.role !== "admin") {
          console.log("User role is not admin:", response.role);
          toast.error("🚫 Aucune école trouvée avec ces informations.", {
            duration: 5000,
          });
          return;
        }

        const token = response.token;
        
        try {
          // Décoder le token JWT pour obtenir les informations utilisateur
          const payload = decodeJWTToken(token);
          
          // Créer les données utilisateur
          const userData = createUserFromToken(payload);
          
          console.log("Setting user data:", userData);
          setUser(userData);
          saveAuthData(token, userData);
          
          toast.success("🎉 Connexion réussie ! Bienvenue dans votre espace administrateur.", {
            duration: 3000,
          });
          navigate("/dashboard");
        } catch (error) {
          console.error("Error processing login response:", error);
          toast.error("⚠️ Erreur d'authentification. Veuillez réessayer.", {
            duration: 4000,
          });
        }
      } else {
        toast.error("🚫 Aucune école trouvée avec ces informations.", {
          duration: 4000,
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Messages d'erreur plus conviviaux
      if (error.response?.status === 401 || error.response?.status === 400) {
        toast.error("🚫 Aucune école trouvée avec ces informations.", {
          duration: 5000,
        });
      } else if (error.code === 'NETWORK_ERROR' || !error.response) {
        toast.error("🌐 Problème de connexion. Vérifiez votre connexion internet et réessayez.", {
          duration: 5000,
        });
      } else {
        toast.error("⚠️ Erreur de connexion. Veuillez réessayer dans quelques instants.", {
          duration: 4000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
    navigate("/");
    toast.success("👋 Déconnexion réussie. À bientôt !", {
      duration: 3000,
    });
  };

  console.log("AuthProvider rendering, current user:", user);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
