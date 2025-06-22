
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginForm from "@/components/auth/LoginForm";
import LoginPromotionalSection from "@/components/auth/LoginPromotionalSection";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà connecté
    const token = localStorage.getItem("token");
    if (user || token) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <Navbar />
      
      <div className="flex items-center justify-center p-4 py-8">
        {/* Container principal unifié */}
        <div className="w-full max-w-7xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-600" />
            
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Section formulaire de connexion - En haut sur mobile, à droite sur desktop */}
              <div className="order-1 lg:order-2 flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-gradient-to-br from-orange-50 to-yellow-50">
                <LoginForm />
              </div>

              {/* Section publicitaire - En bas sur mobile, à gauche sur desktop */}
              <div className="order-2 lg:order-1">
                <LoginPromotionalSection />
              </div>
            </div>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
