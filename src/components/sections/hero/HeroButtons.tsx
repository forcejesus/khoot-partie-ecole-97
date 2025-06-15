
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroButtons = () => {
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
      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    >
      <Link to="/inscription-ecoles">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins">
            <span className="relative z-10 flex items-center">
              Commencer gratuitement
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </Link>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 text-white font-semibold px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
      >
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
          <Play className="w-4 h-4 ml-1" />
        </div>
        Voir la démo
      </motion.button>
    </motion.div>
  );
};

export default HeroButtons;
