
import React from "react";
import { motion } from "framer-motion";

const ContactQuote = () => {
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
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="text-center mt-20 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-10 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        style={{ backgroundSize: "200% 100%" }}
      />
      
      <div className="relative z-10">
        <motion.p 
          className="text-2xl md:text-3xl text-white italic font-medium mb-4 font-inter"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 30px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          "Seuls, nous pouvons faire si peu ; ensemble, nous pouvons faire tant."
        </motion.p>
        <p className="text-yellow-200 font-medium text-lg font-inter">
          - Helen Keller
        </p>
      </div>
    </motion.div>
  );
};

export default ContactQuote;
