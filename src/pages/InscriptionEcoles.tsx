
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Users, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const InscriptionEcoles = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Remplissez le formulaire",
      description: "Fournissez-nous les informations de base sur votre école"
    },
    {
      number: "02", 
      title: "Choisissez votre offre",
      description: "Sélectionnez l'abonnement qui correspond à vos besoins"
    },
    {
      number: "03",
      title: "Configuration rapide",
      description: "Notre équipe configure votre plateforme en moins de 24h"
    },
    {
      number: "04",
      title: "Formation incluse",
      description: "Formation gratuite pour vos enseignants et administrateurs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
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
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <School className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            Inscription des Écoles
          </h1>
          
          <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium">
            Rejoignez plus de 500 écoles qui font confiance à AKILI pour transformer l'apprentissage de leurs élèves
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire d'inscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <Card className="bg-white/95 backdrop-blur-sm border-2 border-orange-200 shadow-african">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 font-african text-center">
                  Informations de votre école
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de l'école *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder="École Primaire..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type d'établissement *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>École Primaire</option>
                      <option>Collège</option>
                      <option>Lycée</option>
                      <option>Université</option>
                      <option>Institut de formation</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre d'élèves *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>Moins de 50</option>
                      <option>50 - 200</option>
                      <option>200 - 500</option>
                      <option>500 - 1000</option>
                      <option>Plus de 1000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pays *
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                      <option>Sénégal</option>
                      <option>Côte d'Ivoire</option>
                      <option>Mali</option>
                      <option>Burkina Faso</option>
                      <option>Niger</option>
                      <option>Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse complète *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                    rows="3"
                    placeholder="Adresse de votre école..."
                  ></textarea>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom du directeur *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder="Prénom Nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email de contact *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                      placeholder="directeur@ecole.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base"
                    placeholder="+221 XX XXX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Offre souhaitée *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-base">
                    <option>Découverte - 25 000 FCFA/mois</option>
                    <option>Sagesse - 50 000 FCFA/mois</option>
                    <option>Excellence - Sur mesure</option>
                  </select>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white py-4 text-lg font-medium">
                  Créer mon compte AKILI
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Processus d'inscription */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="space-y-8"
          >
            <Card className="bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 text-white border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-african">
                  Comment ça marche ?
                </h3>
                <p className="text-lg opacity-90">
                  Un processus simple et rapide pour démarrer avec AKILI
                </p>
              </CardContent>
            </Card>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 font-african">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="bg-green-50 border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <h4 className="text-lg font-bold text-green-800">Garantie satisfaction</h4>
                </div>
                <p className="text-green-700">
                  Essai gratuit de 30 jours. Aucun engagement à long terme. 
                  Support technique inclus et formation gratuite de vos équipes.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InscriptionEcoles;
