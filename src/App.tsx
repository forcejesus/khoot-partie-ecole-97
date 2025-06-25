
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Apprenants from "./pages/Apprenants";
import Enseignants from "./pages/Enseignants";
import EnseignantJeux from "./pages/EnseignantJeux";
import Jeux from "./pages/Jeux";
import JeuDetails from "./pages/JeuDetails";
import PlanificationDetails from "./pages/PlanificationDetails";
import Settings from "./pages/Settings";
import Notifications from "@/pages/Notifications";
import Index from "@/pages/Index";
import Offres from "@/pages/Offres";
import Solution from "@/pages/Solution";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import InscriptionEcoles from "@/pages/InscriptionEcoles";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  console.log("ProtectedRoute - token exists:", !!token);
  
  if (!token) {
    console.log("No token found, redirecting to login");
    return <Navigate to="/login" replace />;
  }
  
  console.log("Token found, rendering protected content");
  return <>{children}</>;
};

function App() {
  console.log("App component rendering...");
  
  return (
    <LanguageProvider>
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            {/* Routes publiques */}
            <Route path="/" element={<Index />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/inscription-ecoles" element={<InscriptionEcoles />} />
            <Route path="/login" element={<Login />} />
            
            {/* Routes protégées */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/apprenants"
              element={
                <ProtectedRoute>
                  <Apprenants />
                </ProtectedRoute>
              }
            />
            <Route
              path="/enseignants"
              element={
                <ProtectedRoute>
                  <Enseignants />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jeux"
              element={
                <ProtectedRoute>
                  <Jeux />
                </ProtectedRoute>
              }
            />
            <Route
              path="/jeux/:id"
              element={
                <ProtectedRoute>
                  <JeuDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planifications/:id"
              element={
                <ProtectedRoute>
                  <PlanificationDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route 
              path="/notifications" 
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </AuthProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;
