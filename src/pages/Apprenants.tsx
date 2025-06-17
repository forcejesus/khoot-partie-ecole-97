
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Upload, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AddApprenantDialog } from "@/components/AddApprenantDialog";
import BulkImportModal from "@/components/BulkImportModal";
import { ApprenantsList } from "@/components/ApprenantsList";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApprenantsContent = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              {t("students.title")}
            </h1>
            <p className="text-orange-100 text-sm md:text-xl">
              {t("students.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Barre d'actions */}
      <Card className="border-orange-200 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg md:text-xl text-orange-700">Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-3 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder={t("students.search")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-orange-200 focus:border-orange-400 bg-white"
                />
              </div>
              
              <AddApprenantDialog onSuccess={handleRefresh} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setIsBulkImportOpen(true)}
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50 font-medium w-full sm:w-auto"
              >
                <Upload className="mr-2 h-4 w-4" />
                Importer un fichier Excel
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des apprenants */}
      <Card className="border-orange-200 bg-white">
        <CardContent className="p-0">
          <ApprenantsList searchTerm={searchTerm} />
        </CardContent>
      </Card>

      {/* Modales */}
      {isBulkImportOpen && (
        <BulkImportModal
          type="apprenants"
          onSuccess={() => {
            setIsBulkImportOpen(false);
            handleRefresh();
          }}
        />
      )}
    </div>
  );
};

const Apprenants = () => {
  return (
    <DashboardLayoutWithSidebar>
      <ApprenantsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Apprenants;
