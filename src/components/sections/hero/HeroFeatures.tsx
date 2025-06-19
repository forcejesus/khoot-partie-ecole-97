
import React from "react";
import { motion } from "framer-motion";

const HeroFeatures = () => {
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
        staggerChildren: 0.15
      }
    }
  };

  const features = [
    { 
      icon: "🎯", 
      title: "Révéler les Talents", 
      description: "Identifiez et développez les compétences uniques de chaque élève grâce à un suivi personnalisé et des défis adaptés à leur potentiel.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "👨‍🏫", 
      title: "Outils Pédagogiques Avancés", 
      description: "Offrez aux enseignants une boîte à outils complète : tableau de bord intelligent, analyses détaillées et ressources interactives pour optimiser leur enseignement.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: "🚀", 
      title: "Apprentissage Gamifié", 
      description: "Transformez chaque leçon en aventure captivante où les élèves progressent naturellement, motivés par des récompenses et des défis stimulants.",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: "📈", 
      title: "Suivi des Progrès en Temps Réel", 
      description: "Visualisez instantanément l'évolution de chaque apprenant et ajustez votre approche pédagogique pour maximiser leur réussite.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          whileHover={{ y: -4, scale: 1.02 }}
          className="group relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20 hover:border-white/40 transition-all duration-300 w-full hover:bg-white/15"
        >
          {/* Layout vertical avec icône en haut */}
          <div className="text-center">
            {/* Icône en haut */}
            <motion.div 
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto mb-4`}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              {feature.icon}
            </motion.div>
            
            {/* Contenu en bas */}
            <div>
              <h3 className="font-bold text-white font-poppins mb-3 text-lg sm:text-xl md:text-2xl leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-violet-200 group-hover:text-white font-inter leading-relaxed text-sm sm:text-base md:text-lg transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>
          
          {/* Effet de brillance subtile */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
