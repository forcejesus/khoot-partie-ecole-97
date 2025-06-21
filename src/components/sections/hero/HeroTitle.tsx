
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroTitle = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 30
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  return (
    <motion.div variants={fadeInVariants} className="mb-6 sm:mb-8 md:mb-12 relative">
      <motion.h1 
        variants={titleVariants}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-4 sm:mb-6 md:mb-8 leading-none tracking-tighter font-poppins"
      >
        <motion.div className="relative inline-block">
          {/* Effet de lueur animée */}
          <motion.div
            className="absolute inset-0 blur-3xl opacity-60"
            animate={{
              background: [
                "radial-gradient(ellipse at center, rgba(251, 146, 60, 0.6), rgba(239, 68, 68, 0.4), rgba(251, 191, 36, 0.3))",
                "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.6), rgba(251, 191, 36, 0.4), rgba(16, 185, 129, 0.3))",
                "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.6), rgba(16, 185, 129, 0.4), rgba(251, 146, 60, 0.3))"
              ],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Ombre multiple pour effet 3D */}
          <motion.div
            className="absolute inset-0 text-black/20"
            style={{ transform: "translate(4px, 4px)" }}
            animate={{
              transform: [
                "translate(4px, 4px)",
                "translate(6px, 6px)",
                "translate(4px, 4px)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t("home.title")}
          </motion.div>
          
          <motion.div
            className="absolute inset-0 text-black/15"
            style={{ transform: "translate(2px, 2px)" }}
            animate={{
              transform: [
                "translate(2px, 2px)",
                "translate(3px, 3px)",
                "translate(2px, 2px)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            {t("home.title")}
          </motion.div>
          
          {/* Texte principal avec gradient animé */}
          <motion.span
            className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent block"
            animate={{
              backgroundPosition: ["0%", "200%", "0%"]
            }}
            transition={{
              backgroundPosition: { duration: 6, repeat: Infinity }
            }}
            style={{
              backgroundSize: "300% 300%",
              filter: "drop-shadow(0 0 20px rgba(251, 146, 60, 0.4))"
            }}
            whileHover={{
              scale: 1.02,
              filter: "drop-shadow(0 0 30px rgba(251, 146, 60, 0.6))",
              transition: { duration: 0.3 }
            }}
          >
            {t("home.title")}
          </motion.span>
        </motion.div>
      </motion.h1>
    </motion.div>
  );
};

export default HeroTitle;
