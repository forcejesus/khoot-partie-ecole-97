
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const OffersCallToAction = () => {
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
      className="text-center mt-20 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-12 relative overflow-hidden"
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
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
        </motion.div>
        
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 30px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Prêt à transformer votre institution ?
        </motion.h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
          Rejoignez les centaines d'écoles qui font confiance à AKILI pour révolutionner l'apprentissage en Afrique. 
          L'excellence éducative vous attend.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/inscription-ecoles">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins">
                <span className="relative z-10 flex items-center">
                  Prendre un abonnement
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
          </Link>
          
          <Link to="/contact">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm font-poppins">
                Nous contacter
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OffersCallToAction;
