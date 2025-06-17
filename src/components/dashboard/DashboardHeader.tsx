
import React from "react";
import { Award } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const DashboardHeader = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Award className="h-10 w-10 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {t("dashboard.title")}
          </h1>
          {user && (
            <p className="text-xl text-gray-600">
              Bonjour <span className="font-semibold text-orange-600">{user.name}</span> ! 👋
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
