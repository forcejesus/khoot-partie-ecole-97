
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
    <div className="space-y-6">
      {/* En-tête amélioré */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white shadow-lg">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Gamepad2 className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2 tracking-tight">
              Bibliothèque de Jeux
            </h1>
            <p className="text-orange-100 text-lg font-medium">
              Gérez et explorez tous vos jeux éducatifs
            </p>
          </div>
        </div>
      </div>

      {/* Barre de recherche améliorée - plus en évidence */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 h-6 w-6" />
            <Input
              placeholder="Rechercher un jeu, une école ou une ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-16 pr-6 border-3 border-orange-300 focus:border-orange-500 bg-gray-50 text-lg py-4 h-16 rounded-xl font-medium text-black placeholder:text-gray-500 focus:bg-white transition-all"
            />
          </div>
          <p className="text-center text-gray-600 mt-3 text-sm">
            Tapez pour rechercher parmi tous les jeux disponibles
          </p>
        </div>
      </div>

      {/* Liste des jeux */}
      <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden">
        <JeuxList searchTerm={searchTerm} />
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
