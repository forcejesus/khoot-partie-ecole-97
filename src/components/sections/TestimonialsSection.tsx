
import React from "react";
import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Dr. Amadou Diallo",
      role: "Directeur, École Internationale de Dakar",
      image: "👨🏿‍🏫",
      quote: "AKILI a révolutionné notre approche pédagogique. Les élèves sont plus engagés et nos résultats ont augmenté de 40%.",
      rating: 5
    },
    {
      name: "Fatima Nkomo",
      role: "Enseignante de Mathématiques, Yaoundé",
      image: "👩🏿‍🏫",
      quote: "Mes cours sont devenus interactifs et amusants. Les élèves participent comme jamais auparavant !",
      rating: 5
    },
    {
      name: "Emmanuel Okafor",
      role: "Coordinateur IT, Lagos Academy",
      image: "👨🏿‍💼",
      quote: "L'interface est intuitive et la plateforme fonctionne parfaitement même avec notre connexion limitée.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 to-purple-50/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInVariants} className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-6 py-2 mb-8">
            <TrendingUp className="w-5 h-5 text-violet-600" />
            <span className="text-violet-700 font-semibold">Témoignages</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Rejoignez les <span className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text">leaders de l'éducation</span>
          </motion.h2>
          <motion.p 
            variants={fadeInVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Découvrez comment AKILI transforme l'apprentissage dans les écoles africaines
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
              
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-8 italic text-lg font-medium">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-2xl mr-4 shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
