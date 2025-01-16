import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  // Si l'utilisateur n'est pas connecté et qu'il n'y a pas de token, rediriger vers login
  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  // Si l'utilisateur est connecté ou qu'il y a un token, afficher le contenu protégé
  return <>{children}</>;
};

export default ProtectedRoute;