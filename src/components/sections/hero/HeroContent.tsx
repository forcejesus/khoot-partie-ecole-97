
import React from "react";
import { motion } from "framer-motion";
import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroSlogan from "./HeroSlogan";
import HeroDescriptions from "./HeroDescriptions";

const HeroContent = () => {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-center px-4 sm:px-6 relative z-10"
    >
      <HeroBadge />
      <HeroTitle />
      
      <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6 md:space-y-8 max-w-7xl mx-auto">
        <HeroSlogan />
        <HeroDescriptions />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
