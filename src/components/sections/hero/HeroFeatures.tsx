
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
      description: "Les élèves progressent à leur rythme avec des ressources personnalisées." 
    },
    { 
      icon: "👨‍🏫", 
      title: "Les enseignants créent, l'école valorise", 
      description: "Les profs conçoivent les contenus, l'école suit et valorise les résultats." 
    },
    { 
      icon: "📈", 
      title: "Un suivi simple et intelligent", 
      description: "Des tableaux de bord clairs pour piloter les progrès en temps réel." 
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 text-2xl">
            {feature.icon}
          </div>
          <h3 className="font-semibold text-white font-poppins mb-2">{feature.title}</h3>
          <p className="text-sm text-violet-200 font-inter">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
