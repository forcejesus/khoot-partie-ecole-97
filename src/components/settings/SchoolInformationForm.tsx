
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { School, User, MapPin, Phone, Mail, Info, Users, Crown } from "lucide-react";
import { parametresService, type ParametresData } from "@/services/parametresService";
import { useToast } from "@/hooks/use-toast";

const SchoolInformationForm = () => {
  const [parametresData, setParametresData] = useState<ParametresData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchParametres = async () => {
      try {
        setIsLoading(true);
        const response = await parametresService.getParametres();
        
        if (response.success && response.data) {
          setParametresData(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des paramètres:", error);
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Impossible de récupérer les informations de l'école",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchParametres();
  }, [toast]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
          <div className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    );
  }

  const { ecole, abonnement } = parametresData || {};

  const getStatusBadge = (statut: string) => {
    if (statut === "actif") {
      return <Badge className="bg-green-500 text-white px-3 py-1 text-sm">Actif</Badge>;
    } else if (statut === "expiré") {
      return <Badge className="bg-red-500 text-white px-3 py-1 text-sm">Expiré</Badge>;
    } else {
      return <Badge className="bg-orange-500 text-white px-3 py-1 text-sm">{statut}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Information Alert */}
      <Alert className="border-blue-200 bg-blue-50">
        <Info className="h-5 w-5 text-blue-600" />
        <AlertDescription className="text-lg text-blue-800">
          <strong>Informations d'administration système</strong>
          <br />
          Ces informations ont été enregistrées lors de l'obtention de votre abonnement et sont utilisées pour l'administration du système. 
          Pour toute demande de modification, veuillez contacter le service partenaire AKILI :
          <br />
          <div className="mt-3 space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">+242 06 500 11 44</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="font-semibold">contact@akili-app.com</span>
            </div>
          </div>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Informations de l'École */}
        <Card className="border-orange-200">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <School className="h-6 w-6 text-white" />
              </div>
              Informations de l'École
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Nom de l'établissement</Label>
              <Input 
                value={ecole?.libelle || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Adresse</Label>
              <Input 
                value={ecole?.adresse || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Ville</Label>
              <Input 
                value={ecole?.ville || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Pays</Label>
              <Input 
                value={ecole?.pays?.libelle || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Téléphone</Label>
              <Input 
                value={ecole?.telephone || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Email</Label>
              <Input 
                value={ecole?.email || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
          </CardContent>
        </Card>

        {/* Informations de l'Administrateur */}
        <Card className="border-orange-200">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl text-gray-800">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              Administrateur Principal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-semibold text-gray-700">Statut :</span>
              {ecole?.admin?.statut && getStatusBadge(ecole.admin.statut)}
            </div>

            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Nom complet</Label>
              <Input 
                value={`${ecole?.admin?.prenom || ""} ${ecole?.admin?.nom || ""}`.trim() || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Matricule</Label>
              <Input 
                value={ecole?.admin?.matricule || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Genre</Label>
              <Input 
                value={ecole?.admin?.genre || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Téléphone</Label>
              <Input 
                value={ecole?.admin?.phone || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Email</Label>
              <Input 
                value={ecole?.admin?.email || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
            
            <div>
              <Label className="text-lg font-semibold text-gray-700 mb-2 block">Adresse</Label>
              <Input 
                value={ecole?.admin?.adresse || "Non renseigné"} 
                readOnly 
                className="text-lg py-3 bg-gray-50 border-gray-200" 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchoolInformationForm;
