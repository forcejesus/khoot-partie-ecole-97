
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Apprenants from "./pages/Apprenants";
import Enseignants from "./pages/Enseignants";
import Jeux from "./pages/Jeux";
import Settings from "./pages/Settings";
import Notifications from "@/pages/Notifications";
import Index from "@/pages/Index";
import Offres from "@/pages/Offres";
import Solution from "@/pages/Solution";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import InscriptionEcoles from "@/pages/InscriptionEcoles";

// Créer une instance de QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <LanguageProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
            </ThemeProvider>
          </LanguageProvider>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
