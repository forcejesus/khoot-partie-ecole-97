import React, { useState } from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQ = () => {
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
      phone: "+242 06 956 53 90",
      color: "from-violet-500 to-purple-500",
      icon: MessageCircle
    },
    {
      type: "Partenariats",
      email: "partenaires@akili-education.cg", 
      phone: "+242 05 123 45 67",
      color: "from-orange-500 to-red-500",
      icon: Mail
    },
    {
      type: "Formations",
      email: "formations@akili-education.cg",
      phone: "+242 06 789 01 23",
      color: "from-indigo-500 to-blue-500",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 relative overflow-hidden font-inter">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-violet-200/30 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-20 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"
        />
      </div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête moderne */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16 text-center"
        >
          <motion.div 
            variants={fadeInVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-purple-100 rounded-full px-6 py-3 mb-8 border border-violet-200 shadow-lg"
          >
            <HelpCircle className="w-5 h-5 text-violet-600" />
            <span className="text-violet-700 font-semibold">Centre d'aide</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>
          
          <motion.h1 
            variants={fadeInVariants}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins"
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Questions Fréquentes
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInVariants}
            className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Trouvez rapidement les réponses à vos questions sur AKILI. 
            Notre sagesse numérique au service de votre curiosité !
          </motion.p>
        </motion.div>

        {/* FAQ Accordion moderne avec tailles ajustées */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={fadeInVariants}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-violet-100 rounded-2xl px-6 bg-gradient-to-r from-white to-violet-50/50 hover:from-violet-50 hover:to-purple-50 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-violet-600 transition-colors py-6 font-poppins text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-6 font-inter text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Section Contact moderne */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={fadeInVariants}
            className="text-4xl md:text-5xl font-bold mb-12 font-poppins"
          >
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Vous ne trouvez pas votre réponse ?
            </span>
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {contactInfo.map((contact, index) => (
              <motion.div 
                key={index} 
                variants={fadeInVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${contact.color}`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-bold text-gray-800 mb-6 text-lg font-poppins">{contact.type}</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-gray-600">
                    <Mail className="h-4 w-4 text-violet-500" />
                    <span className="text-sm font-inter">{contact.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-gray-600">
                    <Phone className="h-4 w-4 text-violet-500" />
                    <span className="text-sm font-inter">{contact.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Proverbe africain moderne */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="relative"
        >
          <div className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
            
            <div className="relative z-10 text-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <Sparkles className="w-12 h-12 text-yellow-300 mx-auto" />
              </motion.div>
              <p className="text-2xl md:text-3xl text-white italic font-medium mb-6 leading-relaxed font-inter">
                "Celui qui pose une question est ignorant pendant cinq minutes, 
                celui qui ne la pose pas reste ignorant toute sa vie."
              </p>
              <p className="text-yellow-200 font-semibold text-lg font-poppins">
                - Proverbe africain
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
