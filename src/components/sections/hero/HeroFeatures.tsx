
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
      icon: "📚", 
      title: "Des contenus adaptés à chaque élève", 
      description: "Les élèves progressent à leur rythme avec des ressources personnalisées.",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "👨‍🏫", 
      title: "Les enseignants créent, l'école valorise", 
      description: "Les profs conçoivent les contenus, l'école suit et valorise les résultats.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: "📈", 
      title: "Un suivi simple et intelligent", 
      description: "Des tableaux de bord clairs pour piloter les progrès en temps réel.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col gap-4 w-full max-w-4xl mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          whileHover={{ x: 8, scale: 1.02 }}
          className="group relative bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300 w-full hover:bg-white/15"
        >
          {/* Layout horizontal avec icône à gauche et texte à droite */}
          <div className="flex items-center gap-4">
            {/* Icône à gauche */}
            <motion.div 
              className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.4 }}
            >
              {feature.icon}
            </motion.div>
            
            {/* Contenu à droite */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white font-poppins mb-1 text-base lg:text-lg leading-tight group-hover:text-yellow-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-violet-200 group-hover:text-white font-inter leading-relaxed text-sm transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>
          
          {/* Effet de brillance subtile */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
