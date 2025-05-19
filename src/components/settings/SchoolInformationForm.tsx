
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
      if (!token || !user?.ecole?._id) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const response = await axios.put(
        `http://kahoot.nos-apps.com/api/ecole/update/${user.ecole._id}`,
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
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <School className="h-5 w-5 text-muted-foreground" />
          <CardTitle>Informations de l'École</CardTitle>
        </div>
        <CardDescription>
          Gérez les informations de votre établissement scolaire
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="libelle" className="text-sm font-medium flex items-center gap-2">
              <Building className="h-4 w-4 text-muted-foreground" />
              Nom de l'école
            </label>
            <Input
              id="libelle"
              name="libelle"
              placeholder="Nom de l'école"
              value={ecoleData.libelle}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="adresse" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Adresse
            </label>
            <Input
              id="adresse"
              name="adresse"
              placeholder="Adresse"
              value={ecoleData.adresse}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="ville" className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              Ville
            </label>
            <Input
              id="ville"
              name="ville"
              placeholder="Ville"
              value={ecoleData.ville}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              Téléphone
            </label>
            <Input
              id="phone"
              name="phone"
              placeholder="Téléphone"
              value={ecoleData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              Email
            </label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              value={ecoleData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleUpdateSchool} 
          disabled={isLoading}
          className="ml-auto"
        >
          {isLoading ? "Enregistrement..." : "Enregistrer les modifications"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SchoolInformationForm;
