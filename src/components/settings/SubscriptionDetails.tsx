
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard, ArrowUp, Calendar, DollarSign, Users, Zap } from "lucide-react";
import OffersUpgradeDialog from "./OffersUpgradeDialog";

const SubscriptionDetails = () => {
  const [showUpgradeDialog, setShowUpgradeDialog] = useState(false);

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
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan Premium</h3>
              <p className="text-gray-600 font-medium">Abonnement actif depuis mars 2024</p>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 px-4 py-2 text-sm font-semibold shadow-lg">
              Actif
            </Badge>
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
                  <p className="text-xl font-bold text-gray-900">50.000 F CFA / mois</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Renouvellement</p>
                  <p className="text-xl font-bold text-gray-900">15 juin 2025</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Paiement</p>
                  <p className="text-xl font-bold text-gray-900">Carte •••• 4242</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Utilisateurs</p>
                  <p className="text-xl font-bold text-gray-900">12 / 25 enseignants</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-6 bg-orange-200" />
          
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-orange-600" />
              Fonctionnalités incluses
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Apprenants illimités",
                "25 enseignants max",
                "Création de jeux illimitée", 
                "Support prioritaire",
                "Rapports avancés",
                "Intégrations API"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-sm"></div>
                  <span className="font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <Button 
            variant="outline" 
            className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Changer de formule
          </Button>
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

      <OffersUpgradeDialog 
        open={showUpgradeDialog} 
        onOpenChange={setShowUpgradeDialog} 
      />
    </>
  );
};

export default SubscriptionDetails;
