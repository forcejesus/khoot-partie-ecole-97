
import React from "react";
import { motion } from "framer-motion";

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
            AKILI
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
          La rencontre entre le jeu et le savoir
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
            Une application conçue pour <span className="font-bold text-orange-300 bg-orange-300/20 px-2 py-1 rounded-lg">faire aimer l'apprentissage</span> aux jeunes.
          </motion.p>
          
          <motion.p 
            variants={fadeInVariants}
            className="text-lg md:text-xl lg:text-2xl text-violet-100 leading-relaxed font-light font-inter"
          >
            Plutôt que de combattre l'addiction aux écrans, 
            <span className="font-bold text-yellow-300 bg-yellow-300/20 px-2 py-1 rounded-lg ml-2">AKILI la réinvente pour le bien</span>.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
