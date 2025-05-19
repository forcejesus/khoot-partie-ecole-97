
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

interface School {
  _id: string;
  libelle: string;
  adresse: string;
  ville: string;
  phone: string;  // Added phone property
  email: string;  // Added email property
}

interface User {
  id: string;
  name: string;
  email: string;
  ecole: School;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  refreshUser: () => Promise<void>; // Added refreshUser function
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

  // Add refreshUser function to fetch updated user data
  const refreshUser = async () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (!token || !storedUser) {
      return;
    }
    
    try {
      const userData = JSON.parse(storedUser);
      const response = await axios.get(
        `http://kahoot.nos-apps.com/api/users/${userData.id}`,
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
      const response = await axios.post("http://kahoot.nos-apps.com/api/login", {
        email,
        password,
      });

      if (response.data && response.data.token) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        
        try {
          // Decode JWT token
          const base64Url = token.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

          const decoded = JSON.parse(jsonPayload);
          
          if (!decoded.id || !decoded.name || !decoded.email || !decoded.ecole) {
            throw new Error("Invalid token data");
          }

          const userData = {
            id: decoded.id,
            name: decoded.name,
            email: decoded.email,
            ecole: decoded.ecole,
          };

          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          
          toast.success("Connexion réussie");
          navigate("/dashboard");
        } catch (error) {
          console.error("Error decoding token:", error);
          toast.error("Erreur lors de la connexion");
          localStorage.removeItem("token");
        }
      } else {
        toast.error("Réponse du serveur invalide");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.response?.status === 401) {
        toast.error("Email ou mot de passe incorrect");
      } else {
        toast.error("Erreur lors de la connexion");
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
    toast.success("Déconnexion réussie");
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
