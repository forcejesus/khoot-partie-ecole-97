
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Index from "./pages/Index";
import Offres from "./pages/Offres";
import Solution from "./pages/Solution";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Apprenants from "./pages/Apprenants";
import Enseignants from "./pages/Enseignants";
import Jeux from "./pages/Jeux";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <TooltipProvider>
            <ThemeProvider>
              <AuthProvider>
                <Toaster />
                <Sonner position="top-right" />
                <Routes>
                  {/* Routes publiques avec Navbar AKILI et Footer */}
                  <Route path="/" element={<><Navbar /><Index /><Footer /></>} />
                  <Route path="/offres" element={<><Navbar /><Offres /><Footer /></>} />
                  <Route path="/solution" element={<><Navbar /><Solution /><Footer /></>} />
                  <Route path="/faq" element={<><Navbar /><FAQ /><Footer /></>} />
                  <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
                  <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
                  
                  {/* Routes protégées avec Dashboard Layout AKILI */}
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout>
                          <Dashboard />
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/apprenants"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout>
                          <Apprenants />
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/enseignants"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout>
                          <Enseignants />
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/jeux"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout>
                          <Jeux />
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/settings"
                    element={
                      <ProtectedRoute>
                        <DashboardLayout>
                          <Settings />
                        </DashboardLayout>
                      </ProtectedRoute>
                    }
                  />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </AuthProvider>
            </ThemeProvider>
          </TooltipProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
