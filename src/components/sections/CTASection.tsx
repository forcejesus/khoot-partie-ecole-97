
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-bold mb-8"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Prêt à transformer votre école ?
          </motion.h2>
          <motion.p 
            variants={fadeInVariants}
            className="text-xl md:text-2xl mb-12 text-violet-100 leading-relaxed max-w-4xl mx-auto"
          >
            Rejoignez plus de 500 écoles qui utilisent déjà AKILI pour créer 
            des expériences d'apprentissage extraordinaires
          </motion.p>
          <motion.div 
            variants={fadeInVariants}
            className="flex justify-center"
          >
            <Link to="/inscription-ecoles">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-8 text-2xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    Commencer maintenant
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-3 h-7 w-7" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
