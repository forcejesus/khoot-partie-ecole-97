
import React from "react";
import { motion } from "framer-motion";

const HeroSlogan = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      variants={fadeInVariants}
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 font-poppins leading-tight text-white"
    >
      📚⚡ Éveillez la curiosité, libérez le potentiel, et faites briller chaque apprenant grâce à un apprentissage intelligent et ludique.
    </motion.div>
  );
};

export default HeroSlogan;
