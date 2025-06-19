
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 px-4"
    >
      <Link to="/inscription-ecoles">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-semibold rounded-xl sm:rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              {t("home.getStarted")}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default HeroButtons;
