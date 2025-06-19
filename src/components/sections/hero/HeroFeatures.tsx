
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
        staggerChildren: 0.2
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
      className="flex flex-col gap-6 w-full max-w-4xl mx-auto"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          whileHover={{ y: -8, scale: 1.02 }}
          className="group relative bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:border-white/50 transition-all duration-500 text-center shadow-xl hover:shadow-2xl w-full"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          
          {/* Icon container */}
          <motion.div 
            className={`relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {feature.icon}
          </motion.div>
          
          {/* Content */}
          <div className="relative z-10">
            <h3 className="font-bold text-white font-poppins mb-4 text-lg lg:text-xl leading-tight group-hover:text-yellow-200 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-violet-200 group-hover:text-white font-inter leading-relaxed text-sm lg:text-base transition-colors duration-300">
              {feature.description}
            </p>
          </div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
