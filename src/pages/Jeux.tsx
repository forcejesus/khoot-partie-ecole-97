
import React, { useState } from "react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Input } from "@/components/ui/input";
import { Search, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { JeuxList } from "@/components/JeuxList";

const JeuxContent = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6 md:space-y-8">
      {/* En-tête avec ornements africains */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center">
            <Gamepad2 className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              {t("games.title")}
            </h1>
            <p className="text-orange-100 text-sm md:text-xl">
              {t("games.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Barre de recherche avec style africain */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-card border-2 border-orange-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
        
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder={t("games.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 border-2 border-orange-200 focus:border-orange-400 bg-white/90 text-lg py-3"
          />
        </div>
      </div>

      {/* Liste des jeux */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-card border-2 border-orange-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
        
        <div className="relative z-10">
          <JeuxList />
        </div>
      </div>
    </div>
  );
};

const Jeux = () => {
  return (
    <DashboardLayoutWithSidebar>
      <JeuxContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Jeux;
