
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CreditCard } from "lucide-react";

const SubscriptionDetails = () => {
  return (
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
  );
};

export default SubscriptionDetails;
