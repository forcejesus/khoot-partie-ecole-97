
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
      className="grid md:grid-cols-3 gap-6"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          variants={fadeInVariants}
          className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-white font-poppins mb-2">{feature.title}</h3>
          <p className="text-sm text-violet-200 font-inter">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;
