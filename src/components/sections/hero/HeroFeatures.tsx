
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
      description: "Établissements innovants",
      color: "from-blue-500 to-cyan-500",
      emoji: "🏫",
      hoverColor: "from-blue-600 to-cyan-600"
    },
    {
      icon: Users,
      label: "Enseignants",
      description: "Éducateurs passionnés",
      color: "from-purple-500 to-pink-500",
      emoji: "👨‍🏫",
      hoverColor: "from-purple-600 to-pink-600"
    },
    {
      icon: GraduationCap,
      label: "Apprenants",
      description: "Élèves motivés",
      color: "from-orange-500 to-red-500",
      emoji: "🎓",
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
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {userActors.map((actor, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            whileHover={{ 
              scale: 1.08,
              rotateY: 8,
              z: 50
            }}
            transition={{ duration: 0.4 }}
          >
            {/* Gradient background effect animé */}
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${actor.color} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            <div className="relative z-10 text-center">
              {/* Emoji flottant */}
              <motion.div
                className="text-4xl mb-4"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {actor.emoji}
              </motion.div>

              {/* Icon avec effet 3D */}
              <motion.div
                className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${actor.color} ${actor.hoverColor} mb-6 shadow-2xl relative`}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: 1.1 
                }}
                transition={{ duration: 0.6 }}
              >
                <actor.icon className="w-10 h-10 text-white" />
                
                {/* Particules flottantes */}
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
              
              {/* Label principal */}
              <motion.div 
                className="text-2xl font-bold text-white mb-2 font-poppins"
                whileHover={{ scale: 1.05 }}
              >
                {actor.label}
              </motion.div>

              {/* Description */}
              <motion.div 
                className="text-violet-200 text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {actor.description}
              </motion.div>
            </div>

            {/* Effet de lueur au survol */}
            <motion.div
              className={`absolute -inset-2 bg-gradient-to-r ${actor.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              style={{ zIndex: -1 }}
            />

            {/* Particules décoratives */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroFeatures;
