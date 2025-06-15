
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactHeader = () => {
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
      className="mb-20 text-center"
    >
      <motion.div 
        className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-orange-500 rounded-full"
        />
        <span className="text-sm font-medium text-gray-700 font-inter">{t("contact.badge")}</span>
        <Sparkles className="w-4 h-4 text-orange-500" />
      </motion.div>
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
        <motion.span 
          className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2"
          animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          {t("contact.title")}
        </motion.span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium leading-relaxed font-inter">
        {t("contact.subtitle")}
      </p>

      {/* Ornements décoratifs */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
          <div className="w-8 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="w-8 h-2 bg-gradient-to-l from-orange-500 to-red-500 rounded-full"></div>
          <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactHeader;
