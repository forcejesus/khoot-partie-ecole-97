
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchoolInformationForm from "@/components/settings/SchoolInformationForm";
import SubscriptionDetails from "@/components/settings/SubscriptionDetails";
import { EnhancedSkeleton } from "@/components/ui/enhanced-skeleton";
import { Settings as SettingsIcon, School, CreditCard } from "lucide-react";
import { DashboardLayoutWithSidebar } from "@/layouts/DashboardLayoutWithSidebar";
import { Card, CardContent } from "@/components/ui/card";

const SettingsContent = () => {
  const { user } = useAuth();
  
  const initialSchoolData = {
    libelle: user?.ecole?.libelle || "",
    adresse: user?.ecole?.adresse || "",
    ville: user?.ecole?.ville || "",
    phone: user?.ecole?.phone || "",
    email: user?.ecole?.email || "",
  };

  return (
    <div className="space-y-6 md:space-y-8">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
            <SettingsIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Paramètres</h1>
            <p className="text-orange-100 text-sm md:text-xl">
              Gérez les informations de votre établissement
            </p>
          </div>
        </div>
      </div>
      
      {!user ? (
        <div className="space-y-6">
          <EnhancedSkeleton className="h-12 w-48 mb-8" />
          <Card className="border-orange-200">
            <CardContent className="p-8">
              <EnhancedSkeleton variant="card" count={3} />
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="border-orange-200 bg-white">
          <Tabs defaultValue="ecole" className="w-full">
            <TabsList className="w-full h-auto p-0 bg-transparent border-b border-orange-200 grid grid-cols-2">
              <TabsTrigger 
                value="ecole" 
                className="flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 hover:bg-orange-50 transition-all"
              >
                <School className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Information de l'École</span>
                <span className="sm:hidden">École</span>
              </TabsTrigger>
              <TabsTrigger 
                value="abonnement"
                className="flex items-center justify-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 text-xs md:text-sm font-medium border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 hover:bg-orange-50 transition-all"
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                <span className="hidden sm:inline">Abonnement</span>
                <span className="sm:hidden">Abonnement</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ecole" className="p-4 md:p-8">
              <SchoolInformationForm initialData={initialSchoolData} />
            </TabsContent>

            <TabsContent value="abonnement" className="p-4 md:p-8">
              <SubscriptionDetails />
            </TabsContent>
          </Tabs>
        </Card>
      )}
    </div>
  );
};

const Settings = () => {
  return (
    <DashboardLayoutWithSidebar>
      <SettingsContent />
    </DashboardLayoutWithSidebar>
  );
};

export default Settings;
