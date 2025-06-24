
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, X, Headphones } from "lucide-react";

interface ContactUpgradeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactUpgradeDialog = ({ open, onOpenChange }: ContactUpgradeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>

          <div className="p-8">
            <DialogHeader className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Contactez notre équipe
              </DialogTitle>
              <p className="text-lg text-gray-600 max-w-md mx-auto">
                Pour mettre à niveau votre abonnement, notre équipe commerciale est à votre disposition
              </p>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Téléphone */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Téléphone</h3>
                    <p className="text-sm text-gray-600">Appelez-nous directement</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900 mb-2">+242 06 500 11 44</p>
                <p className="text-sm text-gray-600">Du lundi au vendredi, 8h-17h</p>
              </div>

              {/* Email */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600">Écrivez-nous</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-gray-900 mb-2">contact@akili-app.com</p>
                <p className="text-sm text-gray-600">Réponse sous 24h</p>
              </div>

              {/* Adresse */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Adresse</h3>
                    <p className="text-sm text-gray-600">Visitez-nous</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-2">1990 Plateaux des 15 ans</p>
                <p className="text-sm text-gray-600">Brazzaville, République du Congo</p>
              </div>

              {/* Horaires */}
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-200 shadow-sm hover:shadow-lg transition-all duration-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Horaires</h3>
                    <p className="text-sm text-gray-600">Disponibilité</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-gray-900 mb-1">Lun - Ven : 8h - 17h</p>
                <p className="text-lg font-bold text-gray-900 mb-2">Sam : 9h - 13h</p>
                <p className="text-sm text-gray-600">Fermé le dimanche</p>
              </div>
            </div>

            {/* Message d'information */}
            <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-6 rounded-2xl border border-orange-300 mb-6">
              <h4 className="text-lg font-bold text-orange-800 mb-3 flex items-center gap-2">
                <Headphones className="h-5 w-5" />
                Comment procéder ?
              </h4>
              <div className="space-y-2 text-orange-700">
                <p className="font-medium">• Contactez-nous par téléphone ou email</p>
                <p className="font-medium">• Expliquez vos besoins d'upgrade</p>
                <p className="font-medium">• Notre équipe vous proposera la meilleure solution</p>
                <p className="font-medium">• Finalisation rapide de votre nouveau abonnement</p>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                onClick={() => window.open('tel:+24206500114')}
              >
                <Phone className="h-4 w-4" />
                Appeler maintenant
              </Button>
              <Button 
                className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center gap-2"
                onClick={() => window.open('mailto:contact@akili-app.com?subject=Demande de mise à niveau d\'abonnement')}
              >
                <Mail className="h-4 w-4" />
                Envoyer un email
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactUpgradeDialog;
