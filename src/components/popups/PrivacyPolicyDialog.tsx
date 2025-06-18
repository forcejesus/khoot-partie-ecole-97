
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyDialog = ({ open, onOpenChange }: PrivacyPolicyDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800">
            Politique de Confidentialité
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Dernière mise à jour : Décembre 2024
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">1. Collecte des Informations</h3>
              <p className="text-gray-600 leading-relaxed">
                AKILI collecte des informations lorsque vous vous inscrivez sur notre plateforme, utilisez nos services, 
                ou interagissez avec notre contenu éducatif. Ces informations incluent votre nom, adresse e-mail, 
                informations scolaires, et données d'utilisation de la plateforme.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">2. Utilisation des Informations</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Personnaliser votre expérience d'apprentissage</li>
                <li>Améliorer nos services éducatifs</li>
                <li>Communiquer avec vous concernant votre compte</li>
                <li>Analyser l'utilisation de la plateforme pour optimiser les contenus</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">3. Protection des Données</h3>
              <p className="text-gray-600 leading-relaxed">
                AKILI met en place des mesures de sécurité appropriées pour protéger vos informations personnelles 
                contre l'accès non autorisé, la modification, la divulgation ou la destruction. Nous utilisons des 
                protocoles de chiffrement et des serveurs sécurisés.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">4. Partage des Informations</h3>
              <p className="text-gray-600 leading-relaxed">
                Nous ne vendons, n'échangeons, ni ne transférons vos informations personnelles à des tiers sans 
                votre consentement, sauf dans les cas suivants :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Fournisseurs de services tiers de confiance qui nous aident à exploiter notre plateforme</li>
                <li>Respect des obligations légales</li>
                <li>Protection des droits et de la sécurité d'AKILI et de ses utilisateurs</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">5. Droits des Utilisateurs</h3>
              <p className="text-gray-600 leading-relaxed">
                Vous avez le droit de :
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                <li>Accéder à vos données personnelles</li>
                <li>Corriger ou mettre à jour vos informations</li>
                <li>Demander la suppression de votre compte</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">6. Cookies</h3>
              <p className="text-gray-600 leading-relaxed">
                Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez choisir de désactiver 
                les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-lg mb-3 text-gray-800">7. Contact</h3>
              <p className="text-gray-600 leading-relaxed">
                Pour toute question concernant cette politique de confidentialité, contactez-nous à : 
                <strong> privacy@akili-education.cg</strong>
              </p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyDialog;
