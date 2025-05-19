
import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen, Users, Target, Sparkles, Award, Clock, Shield,
  BarChart, LineChart, PieChart, TrendingUp
} from "lucide-react";

const Solution = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const features = [
    {
      icon: Sparkles,
      title: "Apprentissage gamifié",
      description: "Transformez les leçons en jeux captivants qui motivent vos apprenants"
    },
    {
      icon: Award,
      title: "Système de récompenses",
      description: "Encouragez la participation avec des badges et classements en temps réel"
    },
    {
      icon: Clock,
      title: "Sessions chronométrées",
      description: "Créez une ambiance dynamique avec des défis limités dans le temps"
    },
    {
      icon: Shield,
      title: "Sécurité des données",
      description: "Protection des informations personnelles et des résultats d'apprentissage"
    }
  ];
  
  const advancedFeatures = [
    {
      icon: BarChart,
      title: "Analytiques avancées",
      description: "Suivez les performances des apprenants avec des graphiques détaillés et exportables"
    },
    {
      icon: LineChart, 
      title: "Progression personnalisée",
      description: "Parcours adaptatif selon les forces et faiblesses identifiées"
    },
    {
      icon: PieChart,
      title: "Rapports institutionnels", 
      description: "Générez des rapports consolidés pour l'ensemble de votre établissement"
    },
    {
      icon: TrendingUp,
      title: "Intelligence prédictive",
      description: "Anticipe les besoins d'apprentissage grâce à l'IA et aux modèles prédictifs"
    }
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
            Notre Solution
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre plateforme KHOOT ECES transforme l'apprentissage en Afrique
          </p>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Fonctionnalités principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Fonctionnalités avancées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Comment ça fonctionne</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Créez vos quiz</h3>
              <p className="text-gray-600">
                Utilisez notre interface intuitive pour créer des questions interactives et engageantes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Invitez vos apprenants</h3>
              <p className="text-gray-600">
                Partagez un simple code ou lien pour que vos apprenants rejoignent la session en temps réel
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Analysez les résultats</h3>
              <p className="text-gray-600">
                Obtenez des statistiques détaillées et des insights sur la performance de chaque apprenant
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solution;
