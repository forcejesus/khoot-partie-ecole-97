
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroFeatures = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const userActors = [
    {
      label: t('home.heroFeatures.schools.label'),
      description: t('home.heroFeatures.schools.description'),
      color: "from-blue-500 to-cyan-500",
      image: "🏫",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      label: t('home.heroFeatures.teachers.label'),
      description: t('home.heroFeatures.teachers.description'),
      color: "from-purple-500 to-pink-500",
      image: "👨‍🏫",
      hoverColor: "from-purple-600 to-pink-600"
    },
    {
      label: t('home.heroFeatures.learners.label'),
      description: t('home.heroFeatures.learners.description'),
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
      className="w-full max-w-5xl mx-auto px-4 sm:px-6"
    >
      {/* Titre d'accroche compact */}
      <motion.div
        variants={fadeInVariants}
        className="text-center mb-6 sm:mb-8"
      >
        <motion.h3 
          className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2 font-poppins"
          whileHover={{ scale: 1.02 }}
        >
          {t('home.heroFeatures.title')}
        </motion.h3>
      </motion.div>

      {/* Layout compact en format ListTile */}
      <motion.div 
        variants={staggerContainer}
        className="space-y-3 sm:space-y-4"
      >
        {/* Première ligne : 2 cards compactes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {userActors.slice(0, 2).map((actor, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient background effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${actor.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
              />
              
              <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                {/* Image/Icône à gauche - plus petit */}
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0"
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {actor.image}
                </motion.div>
                
                {/* Contenu à droite - plus compact */}
                <div className="flex-1 text-left">
                  <motion.h4 
                    className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 font-poppins"
                    whileHover={{ scale: 1.01 }}
                  >
                    {actor.label}
                  </motion.h4>
                  
                  <motion.p 
                    className="text-violet-200 text-xs sm:text-sm md:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                  >
                    {actor.description}
                  </motion.p>
                </div>
              </div>

              {/* Effet de lueur au survol - plus subtil */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${actor.color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300`}
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Seconde ligne : 1 card centrée et compacte */}
        <div className="flex justify-center">
          <motion.div
            variants={fadeInVariants}
            className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden w-full max-w-sm md:max-w-md"
            whileHover={{ 
              scale: 1.02,
              y: -2
            }}
            transition={{ duration: 0.2 }}
          >
            {/* Gradient background effect */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${userActors[2].color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300`}
            />
            
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              {/* Image/Icône à gauche - plus petit */}
              <motion.div
                className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0"
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }}
              >
                {userActors[2].image}
              </motion.div>
              
              {/* Contenu à droite - plus compact */}
              <div className="flex-1 text-left">
                <motion.h4 
                  className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 font-poppins"
                  whileHover={{ scale: 1.01 }}
                >
                  {userActors[2].label}
                </motion.h4>
                
                <motion.p 
                  className="text-violet-200 text-xs sm:text-sm md:text-base font-medium opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed"
                >
                  {userActors[2].description}
                </motion.p>
              </div>
            </div>

            {/* Effet de lueur au survol - plus subtil */}
            <motion.div
              className={`absolute -inset-1 bg-gradient-to-r ${userActors[2].color} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300`}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroFeatures;
