
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
      icon: "🎮", 
      title: "Apprentissage Gamifié", 
      description: "Transformez chaque leçon en un moment fun et interactif grâce à des quiz, défis et jeux dynamiques qui captivent vos élèves.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "👨‍🏫", 
      title: "Gestion des Élèves Simplifiée", 
      description: "Gardez le contrôle en un clin d'œil : suivez les progrès, identifiez les points forts et intervenez rapidement grâce à une interface claire et intuitive.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: "📊", 
      title: "Analyses Avancées", 
      description: "Prenez de meilleures décisions pédagogiques avec des tableaux de bord détaillés et des statistiques en temps réel.",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: "🏅", 
      title: "Système de Récompenses", 
      description: "Motivez et valorisez les efforts des élèves grâce à des badges, niveaux et certificats à débloquer tout au long de leur parcours.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col gap-3 sm:gap-4 w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          whileHover={{ x: 4, scale: 1.01 }}
          className="group relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:border-white/40 transition-all duration-300 w-full hover:bg-white/15"
        >
          {/* Layout horizontal avec icône à gauche et texte à droite */}
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6">
            {/* Icône à gauche */}
            <motion.div 
              className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${feature.gradient} rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl md:text-3xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.4 }}
            >
              {feature.icon}
            </motion.div>
            
            {/* Contenu à droite */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white font-poppins mb-1 sm:mb-2 text-sm sm:text-base md:text-lg lg:text-xl leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-violet-200 group-hover:text-white font-inter leading-relaxed text-xs sm:text-sm md:text-base transition-colors duration-300">
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
