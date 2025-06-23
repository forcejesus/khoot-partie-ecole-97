
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

      {/* Barre de recherche améliorée */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
        <div className="relative max-w-lg">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Rechercher un jeu, une école ou une ville..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 border-2 border-gray-200 focus:border-orange-400 bg-gray-50 text-base py-3 rounded-xl font-medium"
          />
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
