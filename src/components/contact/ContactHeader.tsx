import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
const ContactHeader = () => {
  const {
    t
  } = useLanguage();
  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  return <motion.div initial="hidden" animate="visible" variants={fadeInVariants} className="mb-20 text-center">
      
      
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
        <motion.span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2" animate={{
        backgroundPosition: ["0%", "100%", "0%"]
      }} transition={{
        duration: 5,
        repeat: Infinity
      }} style={{
        backgroundSize: "200% 200%"
      }}>
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
    </motion.div>;
};
export default ContactHeader;