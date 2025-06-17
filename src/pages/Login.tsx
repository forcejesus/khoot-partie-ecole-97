
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogIn, Eye, EyeOff, Shield } from "lucide-react";
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
      toast.error("📧 Veuillez saisir votre adresse email", {
        duration: 3000,
      });
      return;
    }
    
    if (!password.trim()) {
      toast.error("🔒 Veuillez saisir votre mot de passe", {
        duration: 3000,
      });
      return;
    }

    if (password.length < 6) {
      toast.error("🔑 Le mot de passe doit contenir au moins 6 caractères", {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 p-4 relative overflow-hidden">
      {/* Motifs de fond décoratifs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-red-500 rounded-full blur-2xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-500 rounded-full blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

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
              <span className="font-medium">Accès réservé aux administrateurs</span>
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
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    🔒 {t("login.password")}
                  </label>
                  <button 
                    type="button"
                    className="text-xs text-orange-600 hover:text-orange-700 transition-colors font-medium"
                    onClick={() => toast.info("Contactez l'administrateur système pour réinitialiser votre mot de passe", { duration: 4000 })}
                  >
                    {t("login.forgotPassword")}
                  </button>
                </div>
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
                    Connexion en cours...
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
                💡 <strong>Conseil :</strong> Utilisez un mot de passe fort contenant des lettres, chiffres et symboles
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm">
            {t("login.noAccount")} {" "}
            <button 
              onClick={() => toast.info("Contactez votre responsable informatique pour obtenir un accès administrateur", { duration: 5000 })}
              className="font-semibold text-orange-600 hover:text-orange-700 transition-colors underline"
            >
              {t("login.contactAdmin")}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
