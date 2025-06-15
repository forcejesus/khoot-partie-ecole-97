
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
      className="text-center lg:text-left"
    >
      <motion.div 
        variants={fadeInVariants}
        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-green-400 rounded-full"
        />
        <span className="text-sm font-medium text-white/90 font-inter">Révolutionnez l'éducation en Afrique</span>
        <Sparkles className="w-4 h-4 text-yellow-300" />
      </motion.div>

      {/* Nom AKILI centré et mis en valeur */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-8"
      >
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight tracking-tight font-poppins"
        >
          <motion.span 
            className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent block drop-shadow-2xl"
            animate={{ 
              backgroundPosition: ["0%", "100%", "0%"],
              textShadow: [
                "0 0 30px rgba(251, 146, 60, 0.8)",
                "0 0 50px rgba(251, 146, 60, 1)",
                "0 0 30px rgba(251, 146, 60, 0.8)"
              ],
              scale: [1, 1.02, 1]
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

      {/* Nouveau contenu philosophique */}
      <motion.div
        variants={staggerContainer}
        className="mb-10 space-y-6"
      >
        <motion.div 
          variants={fadeInVariants}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-center mb-6 font-poppins"
            animate={{ 
              color: ["#ffffff", "#fbbf24", "#ffffff"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            C'est la rencontre entre le jeu et le savoir
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            className="space-y-4 text-center"
          >
            <motion.p 
              variants={fadeInVariants}
              className="text-lg md:text-xl text-violet-100 leading-relaxed font-light font-inter"
            >
              Une application conçue pour <span className="font-semibold text-orange-300">faire aimer l'apprentissage</span> aux jeunes, 
              en partant de ce qu'ils aiment déjà.
            </motion.p>
            
            <motion.p 
              variants={fadeInVariants}
              className="text-lg md:text-xl text-violet-100 leading-relaxed font-light font-inter"
            >
              Plutôt que de combattre l'addiction aux écrans, 
              <span className="font-semibold text-yellow-300"> AKILI la réinvente pour le bien</span>.
            </motion.p>
          </motion.div>

          {/* Ornement décoratif */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-3">
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                className="w-3 h-3 bg-orange-400 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-4 h-4 bg-red-400 rounded-full"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="w-3 h-3 bg-yellow-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
