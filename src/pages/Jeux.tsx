
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
    <div className="space-y-4 sm:space-y-6 md:space-y-8">
      {/* En-tête avec ornements africains */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">
              {t("games.title")}
            </h1>
            <p className="text-orange-100 text-sm sm:text-base md:text-lg lg:text-xl">
              {t("games.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Barre de recherche avec style africain */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-card border-2 border-orange-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
        
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
          <Input
            placeholder={t("games.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 sm:pl-12 border-2 border-orange-200 focus:border-orange-400 bg-white/90 text-base sm:text-lg py-2 sm:py-3"
          />
        </div>
      </div>

      {/* Liste des jeux */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-card border-2 border-orange-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
        
        <div className="relative z-10">
          <JeuxList searchTerm={searchTerm} />
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
