
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
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

  const benefits = [
    "Suivi personnalisé de chaque élève",
    "Outils pédagogiques avancés",
    "Apprentissage gamifié et interactif",
    "Analyses détaillées des progrès",
    "Support technique 24/7",
    "Formation continue des enseignants"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium text-white/90 font-inter">Transformez votre école</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent font-poppins leading-tight">
            Pourquoi choisir AKILI ?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-inter px-4 mb-8">
            Rejoignez les écoles qui révolutionnent l'éducation avec AKILI. Notre plateforme offre tous les outils nécessaires pour maximiser le potentiel de vos élèves.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left side - Benefits */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 font-poppins">
                  Un abonnement AKILI inclut :
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white/90 text-sm sm:text-base font-inter">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="text-center">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-2xl p-6 sm:p-8 shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-12 h-12 sm:w-16 sm:h-16 text-white mx-auto mb-4" />
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 font-poppins">
                    Prêt à transformer votre école ?
                  </h4>
                  <p className="text-white/90 text-sm sm:text-base mb-6 font-inter">
                    Contactez-nous dès aujourd'hui pour découvrir nos offres d'abonnement personnalisées.
                  </p>
                  
                  <Link to="/contact">
                    <motion.button
                      className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto font-poppins"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Nous contacter
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                <motion.p 
                  className="text-white/60 text-xs sm:text-sm mt-4 font-inter"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  ✨ Consultation gratuite • Devis personnalisé • Support dédié
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
