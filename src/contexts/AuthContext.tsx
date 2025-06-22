
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { config } from "@/config/hosts";

interface School {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
  phone: string;
  email: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  ecole?: School;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    }
  }, []);

  const refreshUser = async () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (!token || !storedUser) {
      return;
    }
    
    try {
      const userData = JSON.parse(storedUser);
      const response = await axios.get(
        `${config.api.baseUrl}/api/users/${userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      if (response.data && response.data.success) {
        const updatedUser = {
          ...userData,
          ecole: response.data.data.ecole
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${config.api.baseUrl}/api/login`, {
        email,
        password,
      });

      console.log("Login response:", response.data);

      if (response.data && response.data.token && response.data.statut === 200) {
        // Vérifier que le rôle est "admin"
        if (response.data.role !== "admin") {
          toast.error("🚫 Aucune école trouvée avec ces informations.", {
            duration: 5000,
          });
          return;
        }

        const token = response.data.token;
        localStorage.setItem("token", token);
        
        try {
          // Decode JWT token pour obtenir les informations utilisateur
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          const decoded = JSON.parse(jsonPayload);
          console.log("Decoded token:", decoded);
          
          // Vérifier les champs requis
          if (!decoded.id || !decoded.email || !decoded.prenom || !decoded.nom) {
            throw new Error("Token invalide - données manquantes");
          }

          // Créer les données utilisateur
          const userData = {
            id: decoded.id,
            name: `${decoded.prenom} ${decoded.nom}`,
            email: decoded.email,
            role: decoded.role || 'admin',
            ecole: decoded.ecole
          };

          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          
          toast.success("🎉 Connexion réussie ! Bienvenue dans votre espace administrateur.", {
            duration: 3000,
          });
          navigate("/dashboard");
        } catch (error) {
          console.error("Error decoding token:", error);
          toast.error("⚠️ Erreur d'authentification. Veuillez réessayer.", {
            duration: 4000,
          });
          localStorage.removeItem("token");
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    toast.success("👋 Déconnexion réussie. À bientôt !", {
      duration: 3000,
    });
  };

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
