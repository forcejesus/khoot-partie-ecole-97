
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const OffersHeader = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="mb-16 text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
          <Star className="w-5 h-5 text-white" />
        </div>
      </div>
      
      <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
        Nos Offres AKILI
      </h1>
      
      <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium">
        Choisissez l'offre qui correspond à vos besoins et libérez le potentiel éducatif de votre institution
      </p>
    </motion.div>
  );
};

export default OffersHeader;
