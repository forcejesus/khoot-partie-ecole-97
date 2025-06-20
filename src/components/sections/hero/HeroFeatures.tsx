
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

  const userStats = [
    {
      icon: School,
      number: "150+",
      label: "Écoles partenaires",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: "2,500+",
      label: "Enseignants actifs",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      number: "45,000+",
      label: "Apprenants engagés",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="w-full max-w-6xl mx-auto px-4 sm:px-6"
    >
      {/* Description principale */}
      <motion.p 
        variants={fadeInVariants}
        className="text-lg sm:text-xl md:text-2xl text-violet-200 leading-relaxed font-inter max-w-4xl mx-auto text-center mb-12"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        Découvrez une plateforme éducative révolutionnaire qui transforme l'apprentissage en aventure passionnante pour vos élèves.
      </motion.p>

      {/* Cards des utilisateurs */}
      <motion.div 
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {userStats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeInVariants}
            className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              z: 50
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} mb-4 shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Number */}
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-white mb-2 font-poppins"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              
              {/* Label */}
              <div className="text-violet-200 font-medium font-inter">
                {stat.label}
              </div>
            </div>

            {/* Hover glow effect */}
            <motion.div
              className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300`}
              style={{ zIndex: -1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroFeatures;
