
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const faqItems = [
    {
      question: "Qu'est-ce que KHOOT ECES ?",
      answer: "KHOOT ECES est une plateforme d'apprentissage interactive qui permet aux enseignants de créer des quiz engageants et aux apprenants de participer à des sessions en temps réel sur leurs appareils mobiles ou ordinateurs."
    },
    {
      question: "Comment puis-je créer un compte ?",
      answer: "Pour créer un compte, cliquez sur le bouton 'Se connecter' en haut à droite, puis choisissez l'option pour créer un nouveau compte. Suivez les instructions pour remplir le formulaire d'inscription."
    },
    {
      question: "Est-ce que KHOOT ECES est disponible sur mobile ?",
      answer: "Oui, KHOOT ECES est entièrement optimisé pour les appareils mobiles. Vous pouvez accéder à toutes les fonctionnalités depuis votre smartphone ou tablette sans avoir à télécharger d'application."
    },
    {
      question: "Quelles sont les différentes formules d'abonnement ?",
      answer: "Nous proposons trois formules principales : Standard (25 000 FCFA), Premium (50 000 FCFA) et Entreprise (sur mesure). Chaque formule offre différents niveaux d'accès aux fonctionnalités et au support."
    },
    {
      question: "Comment puis-je payer mon abonnement ?",
      answer: "Nous acceptons plusieurs modes de paiement, y compris les cartes bancaires, les transferts mobiles (Mobile Money) et les virements bancaires pour les institutions."
    },
    {
      question: "Puis-je essayer KHOOT ECES gratuitement ?",
      answer: "Oui, nous proposons une période d'essai gratuite de 14 jours pour tester toutes les fonctionnalités de la formule Premium sans engagement."
    },
    {
      question: "Comment fonctionnent les statistiques d'apprentissage ?",
      answer: "Notre système collecte les données de performance des apprenants en temps réel et les présente sous forme de graphiques et tableaux intuitifs. Vous pouvez analyser les résultats par question, par apprenant ou par groupe."
    },
    {
      question: "Est-il possible d'importer des questions existantes ?",
      answer: "Oui, vous pouvez importer des questions depuis des fichiers Excel, CSV ou Word, ou depuis d'autres plateformes compatibles."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block mb-6">
            Questions fréquentes
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Retrouvez les réponses à vos questions les plus courantes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-all font-medium text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a 
            href="/contact" 
            className="text-lg font-medium text-purple-600 hover:text-purple-700 underline"
          >
            Contactez-nous directement
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
