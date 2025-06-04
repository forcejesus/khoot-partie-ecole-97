
import React, { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FAQ = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const faqs = [
    {
      question: "Qu'est-ce qu'AKILI exactement ?",
      answer: "AKILI est une plateforme éducative interactive qui transforme l'apprentissage en expérience ludique. Elle combine jeux éducatifs, gestion d'apprenants et analytiques avancées pour révolutionner l'éducation en Afrique."
    },
    {
      question: "Quels âges et niveaux scolaires sont supportés ?",
      answer: "AKILI s'adapte à tous les niveaux, de l'école primaire à l'enseignement supérieur. Nos jeux et contenus sont personnalisables selon l'âge, le niveau et les besoins spécifiques de chaque apprenant."
    },
    {
      question: "Comment fonctionne la gamification ?",
      answer: "Nos jeux transforment les leçons traditionnelles en aventures captivantes. Les apprenants gagnent des points, débloquent des badges, et progressent dans des parcours adaptatifs qui respectent leur rythme d'apprentissage."
    },
    {
      question: "Quelle connexion internet est nécessaire ?",
      answer: "AKILI est optimisée pour fonctionner même avec des connexions limitées. La plateforme peut fonctionner en mode hors-ligne partiel et synchronise automatiquement les données quand la connexion est rétablie."
    },
    {
      question: "Comment suivre les progrès des apprenants ?",
      answer: "Notre tableau de bord offre une vue complète des performances : temps passé, compétences acquises, difficultés rencontrées. Les enseignants et parents reçoivent des rapports détaillés et des recommandations personnalisées."
    },
    {
      question: "Quels appareils sont supportés ?",
      answer: "AKILI fonctionne sur tous les appareils : ordinateurs, tablettes, smartphones Android et iOS. L'interface s'adapte automatiquement à la taille de l'écran pour une expérience optimale."
    },
    {
      question: "Comment commencer avec AKILI ?",
      answer: "C'est simple ! Choisissez votre offre, créez votre compte, ajoutez vos apprenants et commencez immédiatement. Notre équipe vous accompagne avec une formation gratuite et un support dédié."
    },
    {
      question: "Quelles langues sont disponibles ?",
      answer: "AKILI est disponible en français et progressivement dans les langues locales africaines. Nous travaillons continuellement pour enrichir notre support multilingue."
    }
  ];

  const contactInfo = [
    {
      type: "Support technique",
      email: "support@akili-education.cg",
      phone: "+242 06 956 53 90"
    },
    {
      type: "Partenariats",
      email: "partenaires@akili-education.cg", 
      phone: "+242 05 123 45 67"
    },
    {
      type: "Formations",
      email: "formations@akili-education.cg",
      phone: "+242 06 789 01 23"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            Questions Fréquentes
          </h1>
          
          <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium">
            Trouvez rapidement les réponses à vos questions sur AKILI. 
            Notre sagesse numérique au service de votre curiosité !
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-african border-2 border-orange-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
            
            <div className="relative z-10">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-orange-200 rounded-xl px-6 bg-gradient-to-r from-white to-orange-50"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-orange-600 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
            Vous ne trouvez pas votre réponse ?
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-african border-2 border-orange-200">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Nos coordonnées</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                  <h4 className="font-bold text-gray-800 mb-3">{contact.type}</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-600 text-sm">{contact.email}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4 text-orange-600" />
                      <span className="text-gray-600 text-sm">{contact.phone}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proverbe africain */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-tribal-dots"></div>
          
          <div className="relative z-10">
            <p className="text-2xl text-white italic font-medium mb-4">
              "Celui qui pose une question est ignorant pendant cinq minutes, 
              celui qui ne la pose pas reste ignorant toute sa vie."
            </p>
            <p className="text-yellow-200 font-medium">
              - Proverbe africain
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
