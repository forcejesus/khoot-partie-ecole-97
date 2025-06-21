
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
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }
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
      <motion.div variants={fadeInVariants} className="mb-6 sm:mb-8">
        <motion.div
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md rounded-full border border-yellow-400/30 text-sm sm:text-base text-white font-bold shadow-lg"
          whileHover={{ scale: 1.05, rotateZ: 2 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl mr-3 animate-bounce">🎮</span>
          ✨ Transformez l'apprentissage en jeu captivant !
        </motion.div>
      </motion.div>

      {/* Titre AKILI avec animation lettre par lettre */}
      <motion.div variants={fadeInVariants} className="mb-8 sm:mb-12 relative">
        <motion.h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-black mb-6 sm:mb-8 leading-none tracking-tighter font-poppins">
          <motion.div className="relative inline-block">
            {/* Effet de lueur derrière le texte */}
            <motion.div
              className="absolute inset-0 blur-xl opacity-40"
              animate={{
                background: [
                  "linear-gradient(45deg, #f97316, #ef4444, #fbbf24, #10b981)",
                  "linear-gradient(45deg, #ef4444, #fbbf24, #10b981, #f97316)",
                  "linear-gradient(45deg, #fbbf24, #10b981, #f97316, #ef4444)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.span
              className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent block"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
                filter: [
                  "drop-shadow(0 0 15px rgba(251, 146, 60, 0.5))",
                  "drop-shadow(0 0 25px rgba(251, 146, 60, 0.7))",
                  "drop-shadow(0 0 15px rgba(251, 146, 60, 0.5))"
                ]
              }}
              transition={{
                backgroundPosition: { duration: 6, repeat: Infinity },
                filter: { duration: 3, repeat: Infinity }
              }}
              style={{
                backgroundSize: "400% 400%",
                textShadow: "0 0 50px rgba(251, 146, 60, 0.4)"
              }}
            >
              {t("home.title").split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block"
                  whileHover={{
                    scale: 1.3,
                    rotateY: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
        </motion.h1>
      </motion.div>

      {/* Slogans améliorés et plus fun */}
      <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
        <motion.div variants={fadeInVariants} className="relative">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 font-poppins leading-tight relative"
            animate={{ 
              color: ["#ffffff", "#fbbf24", "#f97316", "#10b981", "#ffffff"] 
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <motion.span className="relative z-10 flex items-center justify-center gap-4">
              🚀 {t("home.subtitle")} 🎯
            </motion.span>
            
            {/* Effet de surbrillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent rounded-lg"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.h2>
        </motion.div>
        
        {/* Descriptions avec animations décalées et emojis */}
        <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6">
          <motion.p
            variants={fadeInVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-violet-100 leading-relaxed font-light font-inter relative group flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-3xl">🎲</span>
            <motion.span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t("home.description1")}
            </motion.span>
            <span className="text-3xl">📚</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.p>
          
          <motion.p
            variants={fadeInVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-violet-100 leading-relaxed font-light font-inter relative group flex items-center justify-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-3xl">⚡</span>
            <motion.span className="relative z-10 group-hover:text-white transition-colors duration-300">
              {t("home.description2")}
            </motion.span>
            <span className="text-3xl">🏆</span>
            <motion.div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
