
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogIn, Eye, EyeOff, ArrowRight, Sparkles, Trophy, Target, Home, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, isLoading, user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'utilisateur est déjà connecté
    const token = localStorage.getItem("token");
    if (user || token) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error(`📧 ${t("login.validation.emailRequired")}`, {
        duration: 3000,
      });
      return;
    }
    
    if (!password.trim()) {
      toast.error(`🔒 ${t("login.validation.passwordRequired")}`, {
        duration: 3000,
      });
      return;
    }
    
    try {
      await login(email, password);
    } catch (error) {
      console.error("Erreur de connexion:", error);
    }
  };

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
                <div className="w-full max-w-md">
                  <div className="text-center mb-6 lg:mb-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 lg:mb-6" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #fb923c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      AKILI
                    </h1>
                    <p className="text-gray-600 text-sm lg:text-base mb-4 lg:mb-6">
                      {t("login.subtitle")}
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-sm p-3 rounded-lg border mb-4 lg:mb-6" style={{ color: '#f97316', backgroundColor: '#fff7ed', borderColor: '#fed7aa' }}>
                      <GraduationCap className="h-4 w-4" />
                      <span className="font-medium">Espace École</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                    <div className="space-y-2 lg:space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        📧 {t("login.email")}
                      </label>
                      <div className="relative">
                        <Input
                          type="email"
                          placeholder="admin@exemple.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-10 lg:h-12 bg-white border-2 border-gray-200 transition-colors rounded-lg shadow-sm text-sm lg:text-base"
                          style={{ '--tw-ring-color': '#f97316' } as any}
                        />
                      </div>
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        🔒 {t("login.password")}
                      </label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="pr-12 h-10 lg:h-12 bg-white border-2 border-gray-200 transition-colors rounded-lg shadow-sm text-sm lg:text-base"
                          placeholder="••••••••"
                          style={{ '--tw-ring-color': '#f97316' } as any}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4 lg:h-5 lg:w-5" /> : <Eye className="h-4 w-4 lg:h-5 lg:w-5" />}
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-10 lg:h-12 font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-sm lg:text-base"
                      disabled={isLoading}
                      style={{ 
                        background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #fb923c 100%)'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 lg:h-5 lg:w-5 animate-spin" />
                          {t("login.loggingIn")}
                        </>
                      ) : (
                        <>
                          <LogIn className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                          {t("login.loginButton")}
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Tips de sécurité */}
                  <div className="mt-4 lg:mt-6 p-3 lg:p-4 rounded-lg border" style={{ backgroundColor: '#fff7ed', borderColor: '#fed7aa' }}>
                    <p className="text-xs text-gray-600 text-center">
                      💡 <strong>{t("login.securityTip.title")}:</strong> {t("login.securityTip.description")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Section publicitaire - En bas sur mobile, à gauche sur desktop */}
              <div className="order-2 lg:order-1 flex-1 bg-gradient-to-br from-orange-500 via-orange-600 to-yellow-600 relative flex items-center justify-center p-4 sm:p-6 lg:p-12" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #fb923c 100%)' }}>
                {/* Motifs décoratifs */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 lg:top-20 left-10 lg:left-20 w-16 lg:w-20 h-16 lg:h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-16 lg:bottom-32 right-16 lg:right-32 w-12 lg:w-16 h-12 lg:h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
                  <div className="absolute top-1/3 right-1/4 w-20 lg:w-24 h-20 lg:h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-300"></div>
                  <div className="absolute bottom-10 lg:bottom-20 left-1/3 w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full blur-md animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 text-center text-white max-w-lg">
                  <div className="mb-6 lg:mb-8">
                    <div className="flex justify-center mb-4 lg:mb-6">
                      <div className="p-4 lg:p-6 bg-white/20 backdrop-blur-sm rounded-full">
                        <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 xl:h-12 xl:w-12 text-white" />
                      </div>
                    </div>
                    <h2 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
                      Plateforme Éducative Innovante
                    </h2>
                    <p className="text-base lg:text-lg xl:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
                      Améliorez le potentiel de vos apprenants en utilisant leur environnement familier pour créer une expérience d'apprentissage magique et transformatrice
                    </p>
                    
                    {/* Liste des avantages avec icônes */}
                    <div className="space-y-3 lg:space-y-4 xl:space-y-6 mb-6 lg:mb-8 text-left">
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                          <Trophy className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">Créez des jeux captivants</h4>
                          <p className="text-white/80 text-xs lg:text-sm">Système de suivi et classement pour éveiller l'esprit compétitif et la motivation naturelle de vos élèves</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                          <Target className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">Suivi personnalisé</h4>
                          <p className="text-white/80 text-xs lg:text-sm">Permettez à vos enseignants de comprendre et accompagner chaque apprenant dans son parcours unique</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 lg:space-x-4">
                        <div className="p-2 lg:p-3 bg-white/20 rounded-full mt-1 flex-shrink-0">
                          <Home className="h-3 w-3 lg:h-4 lg:w-4 xl:h-6 xl:w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1 text-xs lg:text-sm xl:text-base">100% en ligne</h4>
                          <p className="text-white/80 text-xs lg:text-sm">L'apprentissage continue à la maison, créant un pont naturel entre l'école et le foyer familial</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={() => navigate("/offres")}
                      size="lg"
                      className="bg-white hover:bg-orange-50 font-bold text-sm lg:text-base xl:text-lg px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                      style={{ color: '#f97316' }}
                    >
                      <ArrowRight className="mr-2 h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5" />
                      Découvrir nos offres
                    </Button>
                  </div>
                </div>
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
