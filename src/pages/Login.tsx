
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogIn, Eye, EyeOff, Shield, Star, ArrowRight, Sparkles, Users, Trophy, Target, Home, Award } from "lucide-react";
import { toast } from "sonner";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center p-4">
      {/* Container principal unifié */}
      <div className="w-full max-w-7xl mx-auto">
        <Card className="overflow-hidden shadow-2xl border-0 bg-white backdrop-blur-sm">
          <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700" />
          
          <div className="flex min-h-[700px]">
            {/* Section publicitaire - Gauche */}
            <div className="flex-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 relative flex items-center justify-center p-12">
              {/* Motifs décoratifs */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-300"></div>
                <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-md animate-pulse delay-500"></div>
              </div>

              <div className="relative z-10 text-center text-white max-w-lg">
                <div className="mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-6 bg-white/20 backdrop-blur-sm rounded-full">
                      <Sparkles className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold mb-4 leading-tight">
                    Plateforme Éducative Innovante
                  </h2>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Améliorez le potentiel de vos apprenants en utilisant leur environnement familier pour créer une expérience d'apprentissage magique et transformatrice
                  </p>
                  
                  {/* Liste des avantages avec icônes */}
                  <div className="space-y-6 mb-8 text-left">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white/20 rounded-full mt-1">
                        <Trophy className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Créez des jeux captivants</h4>
                        <p className="text-white/80 text-sm">Système de suivi et classement pour éveiller l'esprit compétitif et la motivation naturelle de vos élèves</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white/20 rounded-full mt-1">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">Suivi personnalisé</h4>
                        <p className="text-white/80 text-sm">Permettez à vos enseignants de comprendre et accompagner chaque apprenant dans son parcours unique</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-white/20 rounded-full mt-1">
                        <Home className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">100% en ligne</h4>
                        <p className="text-white/80 text-sm">L'apprentissage continue à la maison, créant un pont naturel entre l'école et le foyer familial</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={() => navigate("/offres")}
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Découvrir nos offres
                  </Button>
                </div>
              </div>
            </div>

            {/* Section formulaire de connexion - Droite */}
            <div className="flex-1 flex items-center justify-center p-12 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 bg-clip-text text-transparent mb-4">
                    AKILI
                  </h1>
                  <p className="text-gray-600 text-base mb-6">
                    {t("login.subtitle")}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-blue-700 bg-blue-50 p-3 rounded-lg border border-blue-200">
                    <Shield className="h-4 w-4" />
                    <span className="font-medium">{t("login.adminAccess")}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
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
                        className="h-12 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-lg shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      🔒 {t("login.password")}
                    </label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pr-12 h-12 bg-white border-2 border-gray-200 focus:border-blue-500 transition-colors rounded-lg shadow-sm"
                        placeholder="••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t("login.loggingIn")}
                      </>
                    ) : (
                      <>
                        <LogIn className="mr-2 h-5 w-5" />
                        {t("login.loginButton")}
                      </>
                    )}
                  </Button>
                </form>

                {/* Tips de sécurité */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-gray-600 text-center">
                    💡 <strong>{t("login.securityTip.title")}:</strong> {t("login.securityTip.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
