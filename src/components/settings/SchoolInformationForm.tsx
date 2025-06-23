import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Phone, Mail, School } from "lucide-react";

interface SchoolInformationFormProps {
  initialData: {
    libelle: string;
    adresse: string;
    ville: string;
    phone: string;
    email: string;
  };
}

const SchoolInformationForm = ({ initialData }: SchoolInformationFormProps) => {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ecoleData, setEcoleData] = useState(initialData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEcoleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateSchool = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      if (!token || !user?.ecoleId) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const response = await axios.put(
        `http://kahoot.nos-apps.com/api/ecole/update/${user.ecoleId}`,
        ecoleData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Informations de l'école mises à jour avec succès",
        });
        refreshUser();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de mettre à jour les informations de l'école",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg border border-orange-200">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <School className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Informations de l'École</h2>
            <p className="text-gray-600 font-medium">
              Gérez les informations de votre établissement scolaire
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label htmlFor="libelle" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Building className="h-4 w-4 text-orange-600" />
              Nom de l'école
            </label>
            <Input
              id="libelle"
              name="libelle"
              placeholder="Nom de l'école"
              value={ecoleData.libelle}
              onChange={handleInputChange}
              className="border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-900 font-medium placeholder:text-gray-400 transition-all duration-200 hover:bg-white focus:bg-white"
            />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="adresse" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              Adresse
            </label>
            <Input
              id="adresse"
              name="adresse"
              placeholder="Adresse"
              value={ecoleData.adresse}
              onChange={handleInputChange}
              className="border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-900 font-medium placeholder:text-gray-400 transition-all duration-200 hover:bg-white focus:bg-white"
            />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="ville" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-orange-600" />
              Ville
            </label>
            <Input
              id="ville"
              name="ville"
              placeholder="Ville"
              value={ecoleData.ville}
              onChange={handleInputChange}
              className="border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-900 font-medium placeholder:text-gray-400 transition-all duration-200 hover:bg-white focus:bg-white"
            />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Phone className="h-4 w-4 text-orange-600" />
              Téléphone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="Téléphone"
              value={ecoleData.phone}
              onChange={handleInputChange}
              className="border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-900 font-medium placeholder:text-gray-400 transition-all duration-200 hover:bg-white focus:bg-white"
            />
          </div>
          
          <div className="space-y-3 md:col-span-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Mail className="h-4 w-4 text-orange-600" />
              Email
            </label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              value={ecoleData.email}
              onChange={handleInputChange}
              className="border-2 border-gray-200 focus:border-orange-400 bg-white/80 backdrop-blur-sm rounded-xl py-3 px-4 text-gray-900 font-medium placeholder:text-gray-400 transition-all duration-200 hover:bg-white focus:bg-white"
            />
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-orange-200">
          <Button 
            onClick={handleUpdateSchool} 
            disabled={isLoading}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            {isLoading ? "Enregistrement..." : "Enregistrer les modifications"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchoolInformationForm;
