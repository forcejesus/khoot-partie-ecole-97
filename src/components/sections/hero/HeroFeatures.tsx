
import React from "react";
import { motion } from "framer-motion";
import { School, Users, GraduationCap } from "lucide-react";

const HeroFeatures = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const userActors = [
    {
      icon: School,
      label: "Écoles partenaires",
      description: "AKILI accompagne les établissements dans leur transformation numérique",
      color: "from-blue-500 to-cyan-500",
      image: "🏫",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      label: "Enseignants",
      description: "AKILI offre aux éducateurs des outils modernes et efficaces",
      color: "from-purple-500 to-pink-500",
      image: "👨‍🏫",
      hoverColor: "from-purple-600 to-pink-600"
    },
    {
      icon: GraduationCap,
      label: "Apprenants",
      description: "AKILI révèle le potentiel de chaque apprenant avec des jeux captivants",
      color: "from-orange-500 to-red-500",
      image: "🎓",
      hoverColor: "from-orange-600 to-red-600"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6"
    >
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        {userActors.map((actor, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              z: 50
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Gradient background effect animé */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${actor.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative z-10 text-center">
              {/* Image principale */}
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-6"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {actor.image}
              </motion.div>
              
              {/* Label principal */}
              <motion.div 
                className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-poppins"
                whileHover={{ scale: 1.05 }}
              >
                {actor.label}
              </motion.div>

              {/* Description */}
              <motion.div 
                className="text-violet-200 text-xs sm:text-sm md:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed px-1 sm:px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                whileHover={{ opacity: 1 }}
              >
                {actor.description}
              </motion.div>
            </div>

            {/* Effet de lueur au survol */}
            <motion.div
              className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${actor.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              style={{ zIndex: -1 }}
            />

            {/* Particules décoratives */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1 sm:w-1 h-1 sm:h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroFeatures;
