
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

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center"
    >
      {/* Section simplifiée sans les cards */}
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-violet-200 leading-relaxed font-inter max-w-4xl mx-auto"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        Découvrez une plateforme éducative révolutionnaire qui transforme l'apprentissage en aventure passionnante pour vos élèves.
      </motion.p>
    </motion.div>
  );
};

export default HeroFeatures;
