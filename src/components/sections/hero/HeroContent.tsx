
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
      transition: { duration: 1, ease: [0.25, 0.4, 0.25, 1] }
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

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90, scale: 0.5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.4, 0.25, 1],
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const typewriterVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const typewriterText = "📚⚡ Éveillez la curiosité, libérez le potentiel, et faites briller chaque apprenant grâce à un apprentissage intelligent et ludique.";

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
        <motion.h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-4 sm:mb-6 md:mb-8 leading-none tracking-tighter font-poppins">
          <motion.div className="relative inline-block perspective-1000">
            {/* Effet de lueur 3D derrière le texte */}
            <motion.div
              className="absolute inset-0 blur-2xl opacity-60"
              animate={{
                background: [
                  "linear-gradient(45deg, #f97316, #ef4444, #fbbf24, #10b981)",
                  "linear-gradient(90deg, #ef4444, #fbbf24, #10b981, #8b5cf6)",
                  "linear-gradient(135deg, #fbbf24, #10b981, #f97316, #ef4444)",
                  "linear-gradient(180deg, #10b981, #8b5cf6, #ef4444, #fbbf24)"
                ],
                scale: [1, 1.1, 1.05, 1]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            {/* Multiple couches d'ombre pour effet 3D */}
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
              transition={{ duration: 4, repeat: Infinity }}
            >
              AKILI
            </motion.div>
            
            <motion.span
              className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0%", "200%", "0%"],
                filter: [
                  "drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4))",
                  "drop-shadow(0 0 30px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 50px rgba(239, 68, 68, 0.4))",
                  "drop-shadow(0 0 20px rgba(251, 146, 60, 0.8)) drop-shadow(0 0 40px rgba(251, 146, 60, 0.4))"
                ]
              }}
              transition={{
                backgroundPosition: { duration: 8, repeat: Infinity },
                filter: { duration: 4, repeat: Infinity }
              }}
              style={{
                backgroundSize: "400% 400%",
                textShadow: "0 0 80px rgba(251, 146, 60, 0.6)"
              }}
            >
              {t("home.title").split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ delay: index * 0.15 }}
                  className="inline-block origin-bottom"
                  whileHover={{
                    scale: 1.4,
                    rotateY: 360,
                    z: 50,
                    transition: { duration: 0.8, type: "spring" }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
        </motion.h1>
      </motion.div>

      {/* Slogan avec animation d'écriture */}
      <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 md:space-y-8 max-w-7xl mx-auto">
        <motion.div variants={fadeInVariants} className="relative overflow-hidden">
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 font-poppins leading-tight text-white relative"
          >
            <motion.div
              className="overflow-hidden whitespace-nowrap"
              variants={typewriterVariants}
            >
              <motion.span
                className="inline-block"
                animate={{
                  color: ["#ffffff", "#fbbf24", "#f97316", "#10b981", "#ffffff"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                {typewriterText}
              </motion.span>
            </motion.div>
            
            {/* Curseur clignotant */}
            <motion.span
              className="inline-block w-1 bg-white ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
        </motion.div>
        
        {/* Descriptions résumées avec animations décalées */}
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
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 3, duration: 1 }}
            >
              Cours gamifiés et interactifs
            </motion.span>
            <span className="text-xl sm:text-2xl md:text-3xl">📚</span>
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
              animate={{ opacity: [0, 1] }}
              transition={{ delay: 4, duration: 1 }}
            >
              Expériences d'apprentissage intelligentes
            </motion.span>
            <span className="text-xl sm:text-2xl md:text-3xl">🏆</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
