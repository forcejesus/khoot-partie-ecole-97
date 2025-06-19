
import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, Target } from "lucide-react";

const HeroStats = () => {
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const stats = [
    {
      icon: Users,
      label: "Élèves engagés",
      value: "10K+",
      description: "Apprenants actifs",
      color: "text-blue-400"
    },
    {
      icon: Globe,
      label: "Écoles partenaires",
      value: "500+",
      description: "Institutions",
      color: "text-green-400"
    },
    {
      icon: Award,
      label: "Satisfaction",
      value: "98%",
      description: "Taux de réussite",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      label: "Progression",
      value: "+40%",
      description: "Amélioration moyenne",
      color: "text-purple-400"
    }
  ];

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={staggerContainer} 
      className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 px-4"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={fadeInVariants}
          className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20 text-center"
        >
          <div className="flex justify-center mb-2">
            <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white font-poppins">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm text-violet-200 font-inter">
            {stat.description}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
