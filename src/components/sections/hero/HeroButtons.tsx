
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroButtons = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12 sm:mt-16 px-4"
    >
      {/* Bouton principal */}
      <Link to="/inscription-ecoles">
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group"
        >
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-2xl border-0 overflow-hidden font-poppins min-w-[280px] sm:min-w-[320px]"
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
              {t("home.getStarted")}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            </span>
            
            {/* Particules flottantes */}
            <motion.div
              className="absolute top-1 right-2 w-1 h-1 bg-white rounded-full"
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-2 left-3 w-1 h-1 bg-white rounded-full"
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            />
          </Button>
        </motion.div>
      </Link>

      {/* Bouton secondaire */}
      <motion.div
        variants={buttonVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group"
      >
        <Button 
          variant="outline"
          size="lg"
          className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-2xl transition-all duration-300 font-poppins min-w-[200px] sm:min-w-[240px]"
        >
          <span className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
            <Play className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
            Voir la démo
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons;
