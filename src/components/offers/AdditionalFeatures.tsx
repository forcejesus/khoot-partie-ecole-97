
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

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Plateforme rapide et réactive adaptée aux connexions africaines"
    },
    {
      icon: Shield,
      title: "Sécurité robuste",
      description: "Protection des données conforme aux standards internationaux"
    },
    {
      icon: Target,
      title: "Approche pédagogique",
      description: "Méthodes d'apprentissage modernes et efficaces"
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-african border-2 border-orange-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
      
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
          Pourquoi choisir AKILI ?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-50 flex items-center justify-center shadow-card">
                <feature.icon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 font-african">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AdditionalFeatures;
