
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Gamepad2, Trophy } from "lucide-react";

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
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    { icon: BookOpen, title: "Contenus adaptatifs", description: "Personnalisés selon le niveau" },
    { icon: Gamepad2, title: "Gamification", description: "Apprentissage ludique et motivant" },
    { icon: Trophy, title: "Suivi en temps réel", description: "Tableaux de bord intelligents" }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="space-y-4 mb-10"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <feature.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white font-poppins">{feature.title}</h3>
            <p className="text-sm text-violet-200 font-inter">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
