
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroBadge = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div variants={fadeInVariants} className="mb-4 sm:mb-6 md:mb-8">
      <motion.div
        className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-full border border-yellow-400/30 text-xs sm:text-sm md:text-base text-white font-bold shadow-lg"
        whileHover={{ scale: 1.05, rotateZ: 2 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 animate-bounce">🎮</span>
        <span className="hidden sm:inline">{t('home.badge')}</span>
        <span className="sm:hidden">✨ Apprentissage gamifié !</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroBadge;
