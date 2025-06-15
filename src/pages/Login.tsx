
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, LogIn } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
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
    
    if (!email.trim() || !password.trim()) {
      toast({
        title: "Erreur de saisie",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="w-full max-w-md">
        <Card className="overflow-hidden shadow-card border-0">
          <div className="h-2 bg-gradient-to-r from-primary via-primary-light to-primary-dark" />
          <CardHeader className="space-y-2 text-center pb-2 pt-6">
            <CardTitle className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t("login.title")}
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("login.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4 pb-8 px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {t("login.email")}
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="exemple@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-3 h-11 bg-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    {t("login.password")}
                  </label>
                  <a 
                    href="#" 
                    className="text-xs text-primary hover:text-primary-dark transition-colors"
                  >
                    {t("login.forgotPassword")}
                  </a>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-3 h-11 bg-white"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-11 font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("login.loggingIn")}
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    {t("login.loginButton")}
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            {t("login.noAccount")} {" "}
            <a 
              href="#" 
              className="font-medium text-primary hover:text-primary-dark transition-colors"
            >
              {t("login.contactAdmin")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
