
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HeroContent = () => {
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
      className="text-center max-w-4xl mx-auto"
    >
      {/* Badge de présentation */}
      <motion.div 
        variants={fadeInVariants}
        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-12 border border-white/20 shadow-lg"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-green-400 rounded-full"
        />
        <span className="text-sm font-medium text-white/90 font-inter">Révolutionnez l'éducation en Afrique</span>
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>

      {/* Titre AKILI - Centré et mis en valeur */}
      <motion.div
        variants={fadeInVariants}
        className="mb-16"
      >
        <motion.h1 
          className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-tighter font-poppins"
        >
          <motion.span 
            className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent block drop-shadow-2xl"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
              textShadow: [
                "0 0 40px rgba(251, 146, 60, 0.9)",
                "0 0 60px rgba(251, 146, 60, 1)",
                "0 0 40px rgba(251, 146, 60, 0.9)"
              ],
              scale: [1, 1.03, 1]
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity },
              textShadow: { duration: 3, repeat: Infinity },
              scale: { duration: 4, repeat: Infinity }
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            AKILI
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* Contenu philosophique principal */}
      <motion.div
        variants={staggerContainer}
        className="space-y-8"
      >
        <motion.div 
          variants={fadeInVariants}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
        >
          {/* Titre principal */}
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 font-poppins leading-tight"
            animate={{ 
              color: ["#ffffff", "#fbbf24", "#ffffff"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            C'est la rencontre entre le jeu et le savoir
          </motion.h2>
          
          {/* Slogans */}
          <motion.div 
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p 
              variants={fadeInVariants}
              className="text-xl md:text-2xl lg:text-3xl text-violet-100 leading-relaxed font-light font-inter"
            >
              Une application conçue pour <span className="font-bold text-orange-300 bg-orange-300/20 px-3 py-1 rounded-lg">faire aimer l'apprentissage</span> aux jeunes, 
              en partant de ce qu'ils aiment déjà.
            </motion.p>
            
            <motion.p 
              variants={fadeInVariants}
              className="text-xl md:text-2xl lg:text-3xl text-violet-100 leading-relaxed font-light font-inter"
            >
              Plutôt que de combattre l'addiction aux écrans, 
              <span className="font-bold text-yellow-300 bg-yellow-300/20 px-3 py-1 rounded-lg ml-2">AKILI la réinvente pour le bien</span>.
            </motion.p>
          </motion.div>

          {/* Ornements décoratifs améliorés */}
          <motion.div 
            variants={fadeInVariants}
            className="flex justify-center mt-10"
          >
            <div className="flex items-center space-x-4">
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full shadow-lg"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1], 
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="w-6 h-6 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full shadow-lg"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1], 
                  opacity: [0.7, 1, 0.7],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
