
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SchoolInformationForm from "@/components/settings/SchoolInformationForm";
import SubscriptionDetails from "@/components/settings/SubscriptionDetails";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      
      {!user ? (
        <div className="space-y-6">
          <Skeleton className="h-12 w-48 mb-8" />
          <Skeleton className="h-[400px] w-full rounded-lg" />
        </div>
      ) : (
        <Tabs defaultValue="ecole">
          <TabsList className="mb-8">
            <TabsTrigger value="ecole">Information de l'École</TabsTrigger>
            <TabsTrigger value="abonnement">Abonnement</TabsTrigger>
          </TabsList>

          <TabsContent value="ecole" className="space-y-6">
            <SchoolInformationForm initialData={initialSchoolData} />
          </TabsContent>

          <TabsContent value="abonnement">
            <SubscriptionDetails />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Settings;
