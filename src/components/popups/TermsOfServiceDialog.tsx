
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsOfServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const TermsOfServiceDialog = ({ open, onOpenChange }: TermsOfServiceDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Conditions d'Utilisation
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Dernière mise à jour : Décembre 2024
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">1. Acceptation des Conditions</h3>
              <p className="text-gray-600 leading-relaxed">
                En accédant et en utilisant la plateforme AKILI, vous acceptez d'être lié par ces conditions 
                d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">2. Description du Service</h3>
              <p className="text-gray-600 leading-relaxed">
                AKILI est une plateforme éducative interactive qui propose des jeux éducatifs, des outils de 
                gestion d'apprenants et des analytiques pour transformer l'apprentissage en Afrique.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">3. Inscription et Comptes</h3>
              <p className="text-gray-600 leading-relaxed">
                Pour utiliser certaines fonctionnalités d'AKILI, vous devez créer un compte. Vous êtes responsable de :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Maintenir la confidentialité de vos informations de connexion</li>
                <li>Toutes les activités qui se produisent sous votre compte</li>
                <li>Notifier immédiatement AKILI de toute utilisation non autorisée</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">4. Utilisation Acceptable</h3>
              <p className="text-gray-600 leading-relaxed">
                Vous acceptez de ne pas utiliser AKILI pour :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Des activités illégales ou non autorisées</li>
                <li>Violer les droits de propriété intellectuelle</li>
                <li>Transmettre du contenu nuisible, offensant ou inapproprié</li>
                <li>Interférer avec le fonctionnement de la plateforme</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">5. Propriété Intellectuelle</h3>
              <p className="text-gray-600 leading-relaxed">
                Tous les contenus, marques, logos et propriétés intellectuelles sur AKILI sont protégés par 
                les lois sur le droit d'auteur et appartiennent à AKILI ou à ses partenaires licenciés.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">6. Paiements et Abonnements</h3>
              <p className="text-gray-600 leading-relaxed">
                Les services premium d'AKILI sont soumis à des frais d'abonnement. Les paiements sont traités 
                de manière sécurisée et les conditions spécifiques sont détaillées lors de l'inscription.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">7. Limitation de Responsabilité</h3>
              <p className="text-gray-600 leading-relaxed">
                AKILI ne peut être tenu responsable des dommages indirects, consécutifs ou punitifs résultant 
                de l'utilisation de nos services, dans la mesure permise par la loi.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">8. Modification des Conditions</h3>
              <p className="text-gray-600 leading-relaxed">
                AKILI se réserve le droit de modifier ces conditions à tout moment. Les utilisateurs seront 
                notifiés des changements importants.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">9. Contact</h3>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant ces conditions d'utilisation, contactez-nous à : 
                <strong> legal@akili-education.cg</strong>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceDialog;
