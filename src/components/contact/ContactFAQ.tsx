
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFAQ = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const faqData = [
    {
      question: "Qu'est-ce qu'AKILI ?",
      answer: "AKILI est une plateforme d'apprentissage interactif qui transforme l'éducation en Afrique grâce à des quiz et jeux éducatifs innovants. Notre mission est de faire aimer l'apprentissage aux jeunes en réinventant l'usage des écrans pour le bien."
    },
    {
      question: "Comment fonctionne la plateforme AKILI ?",
      answer: "AKILI propose des contenus éducatifs gamifiés adaptés aux programmes scolaires africains. Les enseignants peuvent créer des quiz interactifs, suivre les progrès des élèves et utiliser des outils pédagogiques modernes pour enrichir leurs cours."
    },
    {
      question: "Quels sont les tarifs d'AKILI ?",
      answer: "Nous proposons plusieurs formules adaptées aux besoins des établissements : une offre Essentiels à partir de 15 000 FCFA/mois, une offre Avancée à 25 000 FCFA/mois, et une offre Premium à 40 000 FCFA/mois. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "AKILI est-il disponible hors ligne ?",
      answer: "Oui, AKILI propose des fonctionnalités hors ligne pour garantir la continuité pédagogique même dans les zones avec une connectivité limitée. Les contenus peuvent être synchronisés dès que la connexion est rétablie."
    },
    {
      question: "Comment puis-je former mes enseignants à AKILI ?",
      answer: "Nous proposons des formations complètes pour accompagner vos équipes pédagogiques. Nos formateurs certifiés assurent la prise en main de la plateforme et partagent les meilleures pratiques d'enseignement numérique."
    },
    {
      question: "Dans quels pays AKILI est-il disponible ?",
      answer: "AKILI est actuellement déployé dans plusieurs pays d'Afrique subsaharienne. Nous nous adaptons aux programmes scolaires locaux et aux langues d'enseignement de chaque région."
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="mb-20 max-w-4xl mx-auto"
      id="faq"
    >
      <div className="text-center mb-12">
        <motion.div 
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <HelpCircle className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-gray-700 font-inter">Questions fréquentes</span>
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
          FAQ
        </h2>
        <p className="text-lg text-gray-600 font-inter">
          Trouvez rapidement les réponses à vos questions les plus courantes
        </p>
      </div>

      <Card className="border border-gray-200 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl">
        <CardContent className="p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-orange-600 font-poppins">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed font-inter">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactFAQ;
