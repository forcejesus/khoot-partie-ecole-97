
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
    >
      <Link to="/inscription-ecoles">
        <motion.div variants={fadeInVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins"
            >
              <span className="relative z-10 flex items-center">
                {t("home.getStarted")}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 h-6 w-6" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>
        </motion.div>
      </Link>

      <motion.div variants={fadeInVariants}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/30 text-white hover:bg-white hover:text-violet-800 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm hover:backdrop-blur-none transition-all duration-300 font-poppins"
          >
            <Play className="mr-3 h-6 w-6" />
            {t("home.learnMore")}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons;
