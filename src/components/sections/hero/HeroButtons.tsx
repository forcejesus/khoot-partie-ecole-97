
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
      className="flex justify-center items-center mt-8 sm:mt-12 md:mt-16 px-4"
    >
      {/* Bouton principal uniquement */}
      <Link to="/inscription-ecoles">
        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group"
        >
          <Button 
            size="lg" 
            className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-xl sm:rounded-2xl shadow-2xl border-0 overflow-hidden font-poppins min-w-[240px] sm:min-w-[280px] md:min-w-[320px]"
          >
            {/* Effet de brillance */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="hidden sm:inline">{t("home.getStarted")}</span>
              <span className="sm:hidden">Commencer</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </motion.div>
            </span>
            
            {/* Particules flottantes */}
            <motion.div
              className="absolute top-1 right-2 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-2 left-3 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full"
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
            />
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
