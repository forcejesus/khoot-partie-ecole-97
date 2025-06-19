
import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Écoles partenaires",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      number: "95%",
      label: "Taux de satisfaction",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Amélioration des résultats",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      number: "24/7",
      label: "Support disponible",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-violet-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-orange-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
            <span className="text-xs sm:text-sm font-medium text-gray-700 font-inter">Nos résultats parlent</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-poppins leading-tight">
            L'impact AKILI en chiffres
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-inter px-4">
            Découvrez comment AKILI transforme l'éducation dans les écoles africaines avec des résultats concrets et mesurables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: index * 0.1 }
                }
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-2 font-poppins"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              
              <p className="text-gray-600 font-medium font-inter text-sm sm:text-base">{stat.label}</p>
              
              {/* Ornement décoratif */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full opacity-60"></div>
                  <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full opacity-60"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
