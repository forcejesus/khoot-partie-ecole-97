
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { User, AuthContextType } from "@/types/auth";
import { AuthService } from "@/services/authService";
import { decodeJWTToken, createUserFromToken } from "@/utils/jwtUtils";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AuthProvider useEffect - checking stored token and user");
    const token = AuthService.getTokenFromStorage();
    const userData = AuthService.getUserFromStorage();
    console.log("Stored token exists:", !!token);
    console.log("Stored user data:", userData);
    
    if (token && userData) {
      console.log("Setting user from storage:", userData);
      setUser(userData);
    }
  }, []);

  const refreshUser = async () => {
    const token = AuthService.getTokenFromStorage();
    const storedUser = AuthService.getUserFromStorage();
    
    if (!token || !storedUser) {
      return;
    }
    
    try {
      const response = await AuthService.refreshUserData(storedUser.id);
      
      if (response && response.success) {
        const updatedUser = {
          ...storedUser,
          ecole: response.data.ecole
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error("Error refreshing user data:", error);
    }
  };

  const login = async (email: string, password: string) => {
    console.log("Login attempt for:", email);
    setIsLoading(true);
    
    try {
      const responseData = await AuthService.loginUser(email, password);

      if (responseData && responseData.token && responseData.statut === 200) {
        // Vérifier que le rôle est "admin"
        if (!AuthService.validateAdminRole(responseData.role)) {
          console.log("User role is not admin:", responseData.role);
          toast.error("🚫 Accès refusé. Seuls les administrateurs peuvent se connecter.", {
            duration: 5000,
          });
          return;
        }

        const token = responseData.token;
        
        try {
          const decoded = decodeJWTToken(token);
          console.log("Decoded token:", decoded);
          
          const userData = createUserFromToken(decoded);
          console.log("Setting user data:", userData);
          
          setUser(userData);
          AuthService.storeUserData(userData, token);
          
          toast.success("🎉 Connexion réussie ! Bienvenue dans votre espace administrateur.", {
            duration: 3000,
          });
          navigate("/dashboard");
        } catch (error) {
          console.error("Error decoding token:", error);
          toast.error("⚠️ Erreur d'authentification. Token invalide.", {
            duration: 4000,
          });
          AuthService.clearStorage();
        }
      } else {
        console.log("Login failed - invalid response:", responseData);
        toast.error("🚫 Identifiants incorrects. Vérifiez vos informations de connexion.", {
          duration: 4000,
        });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Messages d'erreur plus spécifiques
      if (error.response?.status === 401) {
        toast.error("🚫 Identifiants incorrects. Vérifiez votre email et mot de passe.", {
          duration: 5000,
        });
      } else if (error.response?.status === 400) {
        toast.error("⚠️ Données de connexion invalides.", {
          duration: 4000,
        });
      } else if (error.code === 'ECONNREFUSED' || error.code === 'NETWORK_ERROR' || !error.response) {
        toast.error("🌐 Impossible de se connecter au serveur. Vérifiez votre connexion internet.", {
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
    AuthService.clearStorage();
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
