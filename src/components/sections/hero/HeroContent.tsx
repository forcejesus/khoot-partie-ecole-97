
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroContent = () => {
  const { t } = useLanguage();
  
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center"
    >
      {/* Titre AKILI centré - Taille agrandie avec responsive */}
      <motion.div
        variants={fadeInVariants}
        className="mb-8"
      >
        <motion.h1 
          className="text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] font-black mb-6 leading-none tracking-tighter font-poppins"
        >
          <motion.span 
            className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent block drop-shadow-2xl"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
              textShadow: [
                "0 0 40px rgba(251, 146, 60, 0.9)",
                "0 0 60px rgba(251, 146, 60, 1)",
                "0 0 40px rgba(251, 146, 60, 0.9)"
              ]
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity },
              textShadow: { duration: 3, repeat: Infinity }
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            {t("home.title")}
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Slogan principal centré */}
      <motion.div
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.h2 
          variants={fadeInVariants}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-poppins leading-tight"
          animate={{ 
            color: ["#ffffff", "#fbbf24", "#ffffff"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {t("home.subtitle")}
        </motion.h2>
        
        {/* Slogans */}
        <motion.div 
          variants={staggerContainer}
          className="space-y-4"
        >
          <motion.p 
            variants={fadeInVariants}
            className="text-lg md:text-xl lg:text-2xl text-violet-100 leading-relaxed font-light font-inter"
          >
            {t("home.description1")}
          </motion.p>
          
          <motion.p 
            variants={fadeInVariants}
            className="text-lg md:text-xl lg:text-2xl text-violet-100 leading-relaxed font-light font-inter"
          >
            {t("home.description2")}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
