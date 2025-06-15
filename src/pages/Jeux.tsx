
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { JeuxList } from "@/components/JeuxList";

const Jeux = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête avec ornements africains */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            {t("games.title")}
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto rounded-full shadow-african" />
          
          <p className="text-xl text-gray-700 mt-6 font-medium">
            {t("games.subtitle")}
          </p>
        </div>

        {/* Barre de recherche avec style africain */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-african border-2 border-orange-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
          <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
          
          <div className="relative max-w-md mx-auto z-10">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder={t("games.search")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 border-2 border-orange-200 focus:border-orange-400 bg-white/90 text-lg py-3"
            />
          </div>
          
          {/* Ornements décoratifs */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-african-gold rounded-full"></div>
              <div className="w-4 h-1 bg-african-kente rounded-full"></div>
              <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Liste des jeux */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-african border-2 border-orange-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente"></div>
          <div className="absolute inset-0 opacity-5 bg-mask-texture"></div>
          
          <div className="relative z-10">
            <JeuxList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jeux;
