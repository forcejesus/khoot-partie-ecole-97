
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, ArrowUp, Calendar, DollarSign, Users, Zap } from "lucide-react";
import ContactUpgradeDialog from "./ContactUpgradeDialog";
import { parametresService, type ParametresData } from "@/services/parametresService";
import { useToast } from "@/hooks/use-toast";

const SubscriptionDetails = () => {
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);
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
          description: "Impossible de récupérer les informations d'abonnement",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchParametres();
  }, [toast]);

  const formatPrice = (prix: number) => {
    return `${prix.toLocaleString('fr-FR')} F CFA`;
  };

  const getStatusBadge = (statut: string) => {
    if (statut === "actif") {
      return (
        <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
          Actif
        </Badge>
      );
    } else if (statut === "expiré") {
      return (
        <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
          Expiré
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
          {statut}
        </Badge>
      );
    }
  };

  const calculateExpirationDate = (dureeEnJours: number) => {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + dureeEnJours);
    return expirationDate.toLocaleDateString('fr-FR');
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg border border-orange-200">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CreditCard className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="h-8 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
        </div>
      </div>
    );
  }

  const { abonnement, limites } = parametresData || {};

  return (
    <>
      <div className="bg-gradient-to-br from-white to-orange-50 rounded-3xl p-8 shadow-lg border border-orange-200">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <CreditCard className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Détails de l'abonnement</h2>
              <p className="text-gray-600 font-medium">
                Informations sur votre abonnement actuel
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-orange-100 shadow-sm mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{abonnement?.nom || "Plan Standard"}</h3>
              <p className="text-gray-600 font-medium">{abonnement?.description || "Abonnement actuel"}</p>
            </div>
            {abonnement?.statut && getStatusBadge(abonnement.statut)}
          </div>
          
          <Separator className="my-6 bg-orange-200" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Montant</p>
                  <p className="text-xl font-bold text-gray-900">
                    {abonnement?.prix ? formatPrice(abonnement.prix) : "Non disponible"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Durée</p>
                  <p className="text-xl font-bold text-gray-900">
                    {abonnement?.dureeEnJours ? `${abonnement.dureeEnJours} jours` : "Non définie"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Enseignants</p>
                  <p className="text-xl font-bold text-gray-900">
                    {limites?.enseignants ? `${limites.enseignants.actuels} / ${limites.enseignants.maximum}` : "Non disponible"}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Apprenants</p>
                  <p className="text-xl font-bold text-gray-900">
                    {limites?.apprenants ? `${limites.apprenants.actuels} / ${limites.apprenants.maximum}` : "Non disponible"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-orange-200" />
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Limites actuelles
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-sm"></div>
                <span className="font-medium text-gray-700">
                  {limites?.apprenants ? `${limites.apprenants.actuels}/${limites.apprenants.maximum} apprenants` : "Apprenants : Non défini"}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-sm"></div>
                <span className="font-medium text-gray-700">
                  {limites?.enseignants ? `${limites.enseignants.actuels}/${limites.enseignants.maximum} enseignants` : "Enseignants : Non défini"}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl border border-purple-200">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 shadow-sm"></div>
                <span className="font-medium text-gray-700">
                  {limites?.jeux ? `${limites.jeux.actuels}/${limites.jeux.maximum} jeux` : "Jeux : Non défini"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button 
            onClick={() => setShowUpgradeDialog(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center gap-2"
          >
            <ArrowUp className="h-4 w-4" />
            Mettre à niveau
          </Button>
          <Button 
            variant="destructive" 
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Annuler l'abonnement
          </Button>
        </div>
      </div>

      <ContactUpgradeDialog 
        open={showUpgradeDialog} 
        onOpenChange={setShowUpgradeDialog} 
      />
    </>
  );
};

export default SubscriptionDetails;
