
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LogIn, Eye, EyeOff, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, isLoading } = useAuth();
  const { t } = useLanguage();

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
              className="h-10 lg:h-12 bg-white border-2 border-gray-200 transition-colors rounded-lg shadow-sm text-sm lg:text-base text-gray-900 placeholder:text-gray-500"
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
              className="pr-12 h-10 lg:h-12 bg-white border-2 border-gray-200 transition-colors rounded-lg shadow-sm text-sm lg:text-base text-gray-900 placeholder:text-gray-500"
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
    </div>
  );
};

export default LoginForm;
