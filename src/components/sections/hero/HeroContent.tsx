
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroContent = () => {
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

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateX: -45
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center px-4 sm:px-6 relative z-10"
    >
      {/* Badge d'introduction fun */}
      <motion.div variants={fadeInVariants} className="mb-4 sm:mb-6 md:mb-8">
        <motion.div
          className="inline-flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-full border border-yellow-400/30 text-xs sm:text-sm md:text-base text-white font-bold shadow-lg"
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-lg sm:text-xl md:text-2xl mr-2 sm:mr-3 animate-bounce">🎮</span>
          <span className="hidden sm:inline">✨ Transformez l'apprentissage en jeu captivant !</span>
          <span className="sm:hidden">✨ Apprentissage gamifié !</span>
        </motion.div>
      </motion.div>

      {/* Titre AKILI avec animation 3D améliorée */}
      <motion.div variants={fadeInVariants} className="mb-6 sm:mb-8 md:mb-12 relative">
        <motion.h1 
          variants={titleVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-4 sm:mb-6 md:mb-8 leading-none tracking-tighter font-poppins"
        >
          <motion.div className="relative inline-block">
            {/* Effet de lueur principale */}
            <motion.div
              className="absolute inset-0 blur-3xl opacity-80"
              animate={{
                background: [
                  "radial-gradient(ellipse at center, rgba(251, 146, 60, 0.8), rgba(239, 68, 68, 0.6), rgba(251, 191, 36, 0.4))",
                  "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.8), rgba(251, 191, 36, 0.6), rgba(16, 185, 129, 0.4))",
                  "radial-gradient(ellipse at center, rgba(251, 191, 36, 0.8), rgba(16, 185, 129, 0.6), rgba(251, 146, 60, 0.4))"
                ],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Ombre 3D multiple */}
            <motion.div
              className="absolute inset-0 text-black/30"
              style={{ transform: "translate(6px, 6px)" }}
              animate={{
                transform: [
                  "translate(6px, 6px)",
                  "translate(8px, 8px)",
                  "translate(6px, 6px)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t("home.title")}
            </motion.div>
            
            <motion.div
              className="absolute inset-0 text-black/20"
              style={{ transform: "translate(3px, 3px)" }}
              animate={{
                transform: [
                  "translate(3px, 3px)",
                  "translate(4px, 4px)",
                  "translate(3px, 3px)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              {t("home.title")}
            </motion.div>
            
            <motion.span
              className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0%", "200%", "0%"],
                textShadow: [
                  "0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.4)",
                  "0 0 40px rgba(239, 68, 68, 0.8), 0 0 80px rgba(239, 68, 68, 0.4)",
                  "0 0 30px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.4)"
                ]
              }}
              transition={{
                backgroundPosition: { duration: 6, repeat: Infinity },
                textShadow: { duration: 3, repeat: Infinity }
              }}
              style={{
                backgroundSize: "300% 300%",
                filter: "drop-shadow(0 0 20px rgba(251, 146, 60, 0.6))"
              }}
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 40px rgba(251, 146, 60, 0.8))",
                transition: { duration: 0.3 }
              }}
            >
              {t("home.title")}
            </motion.span>
          </motion.div>
        </motion.h1>
      </motion.div>

      {/* Slogan avec fade-in simple */}
      <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 md:space-y-8 max-w-7xl mx-auto">
        <motion.div 
          variants={fadeInVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 font-poppins leading-tight text-white"
        >
          📚⚡ Éveillez la curiosité, libérez le potentiel, et faites briller chaque apprenant grâce à un apprentissage intelligent et ludique.
        </motion.div>
        
        {/* Descriptions résumées avec fade-in */}
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
              Cours gamifiés et captivants
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
              Expériences d'apprentissage amusantes
            </motion.span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
