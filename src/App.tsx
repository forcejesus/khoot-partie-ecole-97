
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Apprenants from "@/pages/Apprenants";
import Enseignants from "@/pages/Enseignants";
import EnseignantJeux from "@/pages/EnseignantJeux";
import Jeux from "@/pages/Jeux";
import JeuDetails from "@/pages/JeuDetails";
import PlanificationDetails from "@/pages/PlanificationDetails";
import Notifications from "@/pages/Notifications";
import Settings from "@/pages/Settings";
import Contact from "@/pages/Contact";
import Solution from "@/pages/Solution";
import Offres from "@/pages/Offres";
import FAQ from "@/pages/FAQ";
import InscriptionEcoles from "@/pages/InscriptionEcoles";
import ErrorBoundary from "@/components/ErrorBoundary";
import "@/App.css";

function App() {
  console.log("App component rendering...");
  
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <LanguageProvider>
            <Router>
              <ScrollToTop />
              <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
                <Routes>
                  {/* Routes publiques */}
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/solution" element={<Solution />} />
                  <Route path="/offres" element={<Offres />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/inscription-ecoles" element={<InscriptionEcoles />} />
                  
                  {/* Routes protégées */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/apprenants" element={
                    <ProtectedRoute>
                      <Apprenants />
                    </ProtectedRoute>
                  } />
                  <Route path="/enseignants" element={
                    <ProtectedRoute>
                      <Enseignants />
                    </ProtectedRoute>
                  } />
                  <Route path="/enseignants/:enseignantId/jeux" element={
                    <ProtectedRoute>
                      <EnseignantJeux />
                    </ProtectedRoute>
                  } />
                  <Route path="/jeux" element={
                    <ProtectedRoute>
                      <Jeux />
                    </ProtectedRoute>
                  } />
                  <Route path="/jeux/:id" element={
                    <ProtectedRoute>
                      <JeuDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/planifications/:id" element={
                    <ProtectedRoute>
                      <PlanificationDetails />
                    </ProtectedRoute>
                  } />
                  <Route path="/notifications" element={
                    <ProtectedRoute>
                      <Notifications />
                    </ProtectedRoute>
                  } />
                  <Route path="/settings" element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
              <Toaster />
            </Router>
          </LanguageProvider>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
