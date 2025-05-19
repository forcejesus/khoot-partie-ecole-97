
import React, { useState, useEffect } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { School, Building, MapPin, Phone, Mail, CreditCard } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Settings = () => {
  const { user, refreshUser } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [ecoleData, setEcoleData] = useState({
    libelle: user?.ecole?.libelle || "",
    adresse: user?.ecole?.adresse || "",
    ville: user?.ecole?.ville || "",
    phone: user?.ecole?.phone || "",
    email: user?.ecole?.email || "",
  });

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
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      <Tabs defaultValue="ecole">
        <TabsList className="mb-8">
          <TabsTrigger value="ecole">Information de l'École</TabsTrigger>
          <TabsTrigger value="abonnement">Abonnement</TabsTrigger>
        </TabsList>

        <TabsContent value="ecole" className="space-y-6">
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
        </TabsContent>

        <TabsContent value="abonnement">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <CardTitle>Détails de l'abonnement</CardTitle>
              </div>
              <CardDescription>
                Informations sur votre abonnement actuel
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-medium">Plan Premium</h3>
                    <p className="text-muted-foreground">Abonnement actif</p>
                  </div>
                  <Badge className="bg-green-600">Actif</Badge>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Montant</span>
                    <span className="font-medium">50.000 F CFA / mois</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date de renouvellement</span>
                    <span className="font-medium">15 juin 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Méthode de paiement</span>
                    <span className="font-medium">Carte de crédit (****4242)</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Fonctionnalités incluses</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center text-sm gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Apprenants illimités</span>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>25 enseignants max</span>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Création de jeux illimitée</span>
                      </div>
                      <div className="flex items-center text-sm gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Support prioritaire</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Changer de formule</Button>
                <Button variant="destructive">Annuler l'abonnement</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
