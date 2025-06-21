
import React from "react";
import { motion } from "framer-motion";

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
      label: "Écoles partenaires",
      description: "AKILI accompagne les établissements dans leur transformation numérique",
      color: "from-blue-500 to-cyan-500",
      image: "🏫",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      label: "Enseignants",
      description: "AKILI offre aux éducateurs des outils modernes et efficaces",
      color: "from-purple-500 to-pink-500",
      image: "👨‍🏫",
      hoverColor: "from-purple-600 to-pink-600"
    },
    {
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
      className="w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Titre d'accroche */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-6 sm:mb-8 md:mb-12"
      >
        <motion.h3 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-4 font-poppins"
          whileHover={{ scale: 1.02 }}
        >
          ✨ AKILI est conçu pour ces acteurs ✨
        </motion.h3>
      </motion.div>

      {/* Layout en format ListTile : 2 sur première ligne, 1 sur la seconde */}
      <motion.div 
        variants={staggerContainer}
        className="space-y-4 sm:space-y-6"
      >
        {/* Première ligne : 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {userActors.slice(0, 2).map((actor, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -4
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient background effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${actor.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
              
              <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                {/* Image/Icône à gauche */}
                <motion.div
                  className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0"
                  animate={{ 
                    y: [0, -4, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {actor.image}
                </motion.div>
                
                {/* Contenu à droite */}
                <div className="flex-1 text-left">
                  <motion.h4 
                    className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 font-poppins"
                    whileHover={{ scale: 1.02 }}
                  >
                    {actor.label}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-violet-200 text-sm sm:text-base md:text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                  >
                    {actor.description}
                  </motion.p>
                </div>
              </div>

              {/* Effet de lueur au survol */}
              <motion.div
                className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${actor.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Seconde ligne : 1 card centrée */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeInVariants}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden w-full max-w-md md:max-w-lg"
            whileHover={{ 
              scale: 1.02,
              y: -4
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background effect */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${userActors[2].color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
            />
            
            <div className="relative z-10 flex items-center gap-4 sm:gap-6">
              {/* Image/Icône à gauche */}
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0"
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                {userActors[2].image}
              </motion.div>
              
              {/* Contenu à droite */}
              <div className="flex-1 text-left">
                <motion.h4 
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 font-poppins"
                  whileHover={{ scale: 1.02 }}
                >
                  {userActors[2].label}
                </motion.h4>
                
                <motion.p 
                  className="text-violet-200 text-sm sm:text-base md:text-lg font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                >
                  {userActors[2].description}
                </motion.p>
              </div>
            </div>

            {/* Effet de lueur au survol */}
            <motion.div
              className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${userActors[2].color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroFeatures;
