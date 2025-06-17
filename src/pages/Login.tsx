
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogIn, Eye, EyeOff, Shield, Star, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen flex bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motifs de fond décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500 rounded-full blur-2xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Section formulaire de connexion - Collé à droite */}
      <div className="flex-1 flex items-center justify-end pr-0">
        <div className="w-full max-w-md relative z-10">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <div className="h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500" />
            
            <CardHeader className="space-y-4 text-center pb-4 pt-8">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                {t("login.title")}
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                {t("login.subtitle")}
              </CardDescription>
              <div className="flex items-center justify-center space-x-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                <Shield className="h-4 w-4" />
                <span className="font-medium">{t("login.adminAccess")}</span>
              </div>
            </CardHeader>

            <CardContent className="pt-2 pb-8 px-8">
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
                      className="pl-4 h-12 bg-white border-2 border-gray-200 focus:border-orange-500 transition-colors rounded-lg"
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
                      className="pl-4 pr-12 h-12 bg-white border-2 border-gray-200 focus:border-orange-500 transition-colors rounded-lg"
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
                  className="w-full h-12 font-semibold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 hover:from-orange-700 hover:via-red-700 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
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
              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  💡 <strong>{t("login.securityTip.title")}:</strong> {t("login.securityTip.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section publicitaire pleine page - Collée à gauche */}
      <div className="flex-1 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 relative flex items-center justify-start pl-0">
        {/* Motifs décoratifs pour la bannière */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-16 h-16 bg-white/10 rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 text-center text-white p-12 max-w-lg">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-full">
                <Star className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              {t("login.promotion.title")}
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t("login.promotion.description")}
            </p>
            
            {/* Liste des avantages */}
            <div className="space-y-4 mb-8 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Accès à tous nos jeux éducatifs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Suivi des performances en temps réel</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white/90">Support technique prioritaire</span>
              </div>
            </div>

            <Button
              onClick={() => navigate("/offres")}
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t("login.promotion.button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
