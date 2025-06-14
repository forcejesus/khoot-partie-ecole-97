
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Award, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    { icon: Users, label: "Élèves actifs", description: "Des milliers d'élèves", color: "text-blue-400" },
    { icon: Globe, label: "Écoles partenaires", description: "Centaines d'écoles", color: "text-green-400" },
    { icon: Award, label: "Satisfaction", description: "Très haute satisfaction", color: "text-yellow-400" },
    { icon: Target, label: "Amélioration", description: "Résultats exceptionnels", color: "text-purple-400" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white overflow-hidden min-h-screen flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            y: [0, -25, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-green-400/20 rounded-full blur-xl"
        />
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div 
              variants={fadeInVariants}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20 shadow-lg"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full"
              />
              <span className="text-sm font-medium text-white/90 font-inter">Plateforme éducative moderne</span>
              <Sparkles className="w-4 h-4 text-yellow-300" />
            </motion.div>

            <motion.h1 
              variants={fadeInVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight font-poppins"
            >
              <motion.span 
                className="bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                AKILI
              </motion.span>
              <br />
              <motion.span 
                variants={fadeInVariants}
                className="text-white font-normal text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent font-inter"
              >
                Apprentissage interactif
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInVariants}
              className="text-xl md:text-2xl text-violet-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light font-inter"
            >
              Créez des quiz captivants, engagez vos élèves en temps réel 
              et transformez votre classe avec la gamification moderne
            </motion.p>
            
            <motion.div 
              variants={fadeInVariants}
              className="flex justify-center mb-16"
            >
              <Link to="/inscription-ecoles">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins">
                    <span className="relative z-10 flex items-center">
                      Commencer gratuitement
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300"
                >
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                  <div className="font-bold text-lg md:text-xl text-white mb-2 font-poppins">{stat.description}</div>
                  <div className="text-sm text-violet-200 font-medium font-inter">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
