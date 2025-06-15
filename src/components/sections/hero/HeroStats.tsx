
import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Award, Target } from "lucide-react";

const HeroStats = () => {
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

  const stats = [
    { icon: Users, label: "Élèves engagés", value: "10K+", description: "Apprenants actifs", color: "text-blue-400" },
    { icon: Globe, label: "Écoles partenaires", value: "500+", description: "Institutions", color: "text-green-400" },
    { icon: Award, label: "Satisfaction", value: "98%", description: "Taux de réussite", color: "text-yellow-400" },
    { icon: Target, label: "Progression", value: "+40%", description: "Amélioration moyenne", color: "text-purple-400" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="grid grid-cols-2 gap-6"
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          className="text-center bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
        >
          <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
          <div className="font-black text-3xl text-white mb-2 font-poppins">{stat.value}</div>
          <div className="font-bold text-sm text-white mb-1 font-poppins">{stat.description}</div>
          <div className="text-xs text-violet-200 font-medium font-inter">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
