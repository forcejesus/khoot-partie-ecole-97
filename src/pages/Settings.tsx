
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchoolInformationForm from "@/components/settings/SchoolInformationForm";
import SubscriptionDetails from "@/components/settings/SubscriptionDetails";
import { Skeleton } from "@/components/ui/skeleton";
import { Settings as SettingsIcon, School, CreditCard } from "lucide-react";

const Settings = () => {
  const { user } = useAuth();
  
  const initialSchoolData = {
    libelle: user?.ecole?.libelle || "",
    adresse: user?.ecole?.adresse || "",
    ville: user?.ecole?.ville || "",
    phone: user?.ecole?.phone || "",
    email: user?.ecole?.email || "",
  };

  return (
    <div className="min-h-full bg-gray-50 dark:bg-slate-900">
      <div className="mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
            <SettingsIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Paramètres</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">
              Gérez les informations de votre établissement
            </p>
          </div>
        </div>
      </div>
      
      {!user ? (
        <div className="space-y-6">
          <Skeleton className="h-12 w-48 mb-8" />
          <Skeleton className="h-[400px] w-full rounded-lg" />
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <Tabs defaultValue="ecole" className="w-full">
            <TabsList className="w-full h-auto p-0 bg-transparent">
              <TabsTrigger 
                value="ecole" 
                className="flex-1 flex items-center gap-3 px-8 py-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
              >
                <School className="h-5 w-5" />
                Information de l'École
              </TabsTrigger>
              <TabsTrigger 
                value="abonnement"
                className="flex-1 flex items-center gap-3 px-8 py-4 text-sm font-medium border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-blue-900/20 data-[state=active]:text-blue-700 dark:data-[state=active]:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all"
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
        </div>
      )}
    </div>
  );
};

export default Settings;
