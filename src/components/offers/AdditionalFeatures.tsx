
import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";

const AdditionalFeatures = () => {
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

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Plateforme rapide et réactive adaptée aux connexions africaines",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Sécurité robuste",
      description: "Protection des données conforme aux standards internationaux",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Approche pédagogique",
      description: "Méthodes d'apprentissage modernes et efficaces",
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200 relative overflow-hidden mb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 opacity-50"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-poppins"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Pourquoi choisir AKILI ?
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {additionalFeatures.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeInVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 font-poppins">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-inter">{feature.description}</p>
              
              {/* Ornement décoratif */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdditionalFeatures;
