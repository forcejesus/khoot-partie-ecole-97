
import React from "react";
import { Award } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

export const DashboardHeader = () => {
  const { user } = useAuth();
  
  console.log("DashboardHeader rendering, user:", user);

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
          <Award className="h-8 w-8 md:h-10 md:w-10 text-white" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Tableau de bord
          </h1>
          {user && (
            <p className="text-orange-100 text-sm md:text-xl">
              Bonjour <span className="font-semibold text-white">{user.name}</span> ! 👋
            </p>
          )}
          {user?.ecole && (
            <p className="text-orange-200 text-xs md:text-sm mt-1">
              {user.ecole.libelle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
