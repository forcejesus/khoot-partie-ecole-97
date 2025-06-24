
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, ArrowUp, Calendar, DollarSign, Users, Zap, Phone, Mail, Headphones } from "lucide-react";
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
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{abonnement?.nom || "Plan Standard"}</h3>
            <p className="text-gray-600 font-medium">{abonnement?.description || "Abonnement actuel"}</p>
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

        {/* Contact Information Section */}
        <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-8 rounded-2xl border border-orange-300">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
              <Headphones className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-2xl font-bold text-orange-800 mb-2">AKILI Partenaire</h4>
            <p className="text-lg text-orange-700 font-medium">Contactez-nous pour plus d'informations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Téléphone</h5>
              <p className="text-xl font-bold text-blue-600">+242 06 500 11 44</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mx-auto mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2">Email</h5>
              <p className="text-xl font-bold text-green-600">partenaire@akili.guru</p>
            </div>
          </div>
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
