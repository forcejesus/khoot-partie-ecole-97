
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
      {/* Badge d'introduction */}
      <motion.div
        variants={fadeInVariants}
        className="mb-6 sm:mb-8"
      >
        <motion.div 
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm sm:text-base text-white/90 font-medium"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
          transition={{ duration: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          🚀 Plateforme éducative innovante
        </motion.div>
      </motion.div>

      {/* Titre AKILI avec animation lettre par lettre */}
      <motion.div
        variants={fadeInVariants}
        className="mb-8 sm:mb-12 relative"
      >
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-black mb-6 sm:mb-8 leading-none tracking-tighter font-poppins"
        >
          <motion.div className="relative inline-block">
            {/* Effet de lueur derrière le texte */}
            <motion.div
              className="absolute inset-0 blur-2xl opacity-50"
              animate={{
                background: [
                  "linear-gradient(45deg, #f97316, #ef4444, #fbbf24)",
                  "linear-gradient(45deg, #ef4444, #fbbf24, #f97316)",
                  "linear-gradient(45deg, #fbbf24, #f97316, #ef4444)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <motion.span 
              className="relative z-10 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent block"
              animate={{ 
                backgroundPosition: ["0%", "100%", "0%"],
                filter: [
                  "drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))",
                  "drop-shadow(0 0 40px rgba(251, 146, 60, 1))",
                  "drop-shadow(0 0 20px rgba(251, 146, 60, 0.8))"
                ]
              }}
              transition={{ 
                backgroundPosition: { duration: 6, repeat: Infinity },
                filter: { duration: 3, repeat: Infinity }
              }}
              style={{ 
                backgroundSize: "300% 300%",
                textShadow: "0 0 80px rgba(251, 146, 60, 0.5)"
              }}
            >
              {t("home.title").split('').map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ delay: index * 0.1 }}
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.2, 
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

      {/* Slogan principal avec effet de machine à écrire */}
      <motion.div
        variants={staggerContainer}
        className="space-y-6 sm:space-y-8 max-w-5xl mx-auto"
      >
        <motion.div 
          variants={fadeInVariants}
          className="relative"
        >
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 font-poppins leading-tight relative"
            animate={{ 
              color: ["#ffffff", "#fbbf24", "#f97316", "#ffffff"],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <motion.span
              className="relative z-10"
            >
              {t("home.subtitle")}
            </motion.span>
            
            {/* Effet de surbrillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.h2>
        </motion.div>
        
        {/* Descriptions avec animations décalées */}
        <motion.div 
          variants={staggerContainer}
          className="space-y-4 sm:space-y-6"
        >
          <motion.p 
            variants={fadeInVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-violet-100 leading-relaxed font-light font-inter relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="relative z-10 group-hover:text-white transition-colors duration-300"
            >
              {t("home.description1")}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.p>
          
          <motion.p 
            variants={fadeInVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-violet-100 leading-relaxed font-light font-inter relative group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span 
              className="relative z-10 group-hover:text-white transition-colors duration-300"
            >
              {t("home.description2")}
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.p>
        </motion.div>

        {/* Stats rapides avec animations */}
        <motion.div
          variants={fadeInVariants}
          className="mt-12 sm:mt-16"
        >
          <motion.div 
            className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12"
            variants={staggerContainer}
          >
            {[
              { number: "10K+", label: "Élèves actifs", icon: "👥" },
              { number: "500+", label: "Écoles partenaires", icon: "🏫" },
              { number: "98%", label: "Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="text-center group cursor-pointer"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm sm:text-base text-violet-200 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
