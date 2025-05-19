
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Offres = () => {
  const navigate = useNavigate();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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
            Nos offres
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à tous vos besoins d'apprentissage interactif
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-full"
          >
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Standard</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">25 000 FCFA</div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Accès à tous les quiz
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Statistiques de base
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Support par email
                    </li>
                  </ul>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Choisir
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-full"
          >
            <Card className="relative transform hover:-translate-y-2 transition-all duration-500 border-2 border-purple-500 shadow-xl hover:shadow-2xl bg-white z-10 h-full">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                Populaire
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Premium</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">50 000 FCFA</div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Tous les quiz et fonctionnalités
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Statistiques avancées
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Support prioritaire
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Personnalisation
                    </li>
                  </ul>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Choisir
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-full"
          >
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Entreprise</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Sur mesure
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Solution personnalisée
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Support dédié
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      Formation sur site
                    </li>
                    <li className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-purple-500 mr-2" />
                      API access
                    </li>
                  </ul>
                </div>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Contactez-nous
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offres;
