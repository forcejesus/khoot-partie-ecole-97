
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Upload, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { AddEnseignantDialog } from "@/components/AddEnseignantDialog";
import BulkImportModal from "@/components/BulkImportModal";
import { EnseignantsList } from "@/components/EnseignantsList";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EnseignantsContent = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isBulkImportOpen, setIsBulkImportOpen] = useState(false);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {t("teachers.title")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("teachers.subtitle")}
            </p>
          </div>
        </div>
      </div>

      {/* Barre d'actions */}
      <Card className="border-orange-200 bg-white">
        <CardHeader>
          <CardTitle className="text-xl text-orange-700">Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t("teachers.search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400 bg-white"
              />
            </div>
            
            <div className="flex gap-3">
              <Button
                onClick={() => setIsBulkImportOpen(true)}
                variant="outline"
                className="border-orange-300 text-orange-600 hover:bg-orange-50 font-medium"
              >
                <Upload className="mr-2 h-4 w-4" />
                {t("teachers.importCsv")}
              </Button>
              
              <AddEnseignantDialog onSuccess={handleRefresh} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Liste des enseignants */}
      <Card className="border-orange-200 bg-white">
        <CardContent className="p-0">
          <EnseignantsList />
        </CardContent>
      </Card>

      {/* Modales */}
      {isBulkImportOpen && (
        <BulkImportModal
          type="enseignants"
          onSuccess={() => {
            setIsBulkImportOpen(false);
            handleRefresh();
          }}
        />
      )}
    </div>
  );
};

const Enseignants = () => {
  return (
    <DashboardLayoutWithSidebar>
      <EnseignantsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Enseignants;
