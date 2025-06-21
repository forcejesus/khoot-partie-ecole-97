
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroDescriptions = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div variants={staggerContainer} className="space-y-3 sm:space-y-4 md:space-y-6">
      <motion.p
        variants={fadeInVariants}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-violet-100 leading-relaxed font-light font-inter relative group flex items-center justify-center gap-2 sm:gap-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xl sm:text-2xl md:text-3xl">🎲</span>
        <motion.span 
          className="relative z-10 group-hover:text-white transition-colors duration-300 text-center"
        >
          {t('home.gamifiedCourses')}
        </motion.span>
        <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.p>
      
      <motion.p
        variants={fadeInVariants}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-violet-100 leading-relaxed font-light font-inter relative group flex items-center justify-center gap-2 sm:gap-3"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xl sm:text-2xl md:text-3xl">⚡</span>
        <motion.span 
          className="relative z-10 group-hover:text-white transition-colors duration-300 text-center"
        >
          {t('home.funExperiences')}
        </motion.span>
        <motion.div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.p>
    </motion.div>
  );
};

export default HeroDescriptions;
