
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
    <div className="space-y-8">
      {/* En-tête */}
      <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <SettingsIcon className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Paramètres</h1>
            <p className="text-xl text-gray-600">
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
            <TabsList className="w-full h-auto p-0 bg-transparent border-b border-orange-200">
              <TabsTrigger 
                value="ecole" 
                className="flex-1 flex items-center gap-3 px-8 py-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 hover:bg-orange-50 transition-all"
              >
                <School className="h-5 w-5" />
                Information de l'École
              </TabsTrigger>
              <TabsTrigger 
                value="abonnement"
                className="flex-1 flex items-center gap-3 px-8 py-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-orange-500 data-[state=active]:bg-orange-50 data-[state=active]:text-orange-700 hover:bg-orange-50 transition-all"
              >
                <CreditCard className="h-5 w-5" />
                Abonnement
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ecole" className="p-8">
              <SchoolInformationForm initialData={initialSchoolData} />
            </TabsContent>

            <TabsContent value="abonnement" className="p-8">
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
