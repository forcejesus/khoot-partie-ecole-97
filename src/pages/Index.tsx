
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Users, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";
import OffresSection from "@/components/OffresSection";

const Index = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 font-african">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background patterns */}
        <div className="absolute inset-0 bg-african-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
                  Révolutionnez l'éducation
                </span>
                <br />
                <span className="text-gray-800">
                  en Afrique avec AKILI
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                La plateforme d'apprentissage interactif nouvelle génération. Créez des quiz engageants, suivez les progrès en temps réel et motivez vos élèves comme jamais auparavant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/inscription-ecoles">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-6 text-lg">
                    Prennez un abonnement
                  </Button>
                </Link>
                <Link to="/solution">
                  <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                    Découvrir la solution <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <motion.div 
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                className="mt-12 grid grid-cols-2 gap-4"
              >
                {[
                  { icon: CheckCircle2, text: "Facile à utiliser" },
                  { icon: Zap, text: "Installation rapide" },
                  { icon: Users, text: "+10,000 élèves actifs" },
                  { icon: BarChart2, text: "Résultats mesurables" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <item.icon className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-orange-200">
                <img 
                  src="/images/hero-app.png" 
                  alt="AKILI Platform" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-30 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Nos offres AKILI */}
      <OffresSection />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-100 via-white to-red-50 relative">
        <div className="absolute inset-0 bg-tribal-dots opacity-10"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Ce que disent nos <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">utilisateurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment AKILI aide les enseignants et écoles à améliorer l'engagement des élèves
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amadou Diallo",
                role: "Directeur, École Primaire de Dakar",
                image: "/images/testimonial-1.jpg",
                quote: "AKILI a transformé notre école. Les enseignants créent facilement des quiz interactifs et les élèves sont plus motivés. Nos résultats scolaires se sont améliorés de 40%."
              },
              {
                name: "Fatima Nkosi",
                role: "Enseignante, Lycée de Kinshasa",
                image: "/images/testimonial-2.jpg",
                quote: "Avec AKILI, mes cours de mathématiques sont devenus interactifs. Les élèves participent activement et je peux suivre leur compréhension en temps réel."
              },
              {
                name: "Emmanuel Okafor",
                role: "Parent d'élève, Lagos",
                image: "/images/testimonial-3.jpg",
                quote: "Mon fils attend avec impatience ses cours depuis que son école utilise AKILI. L'apprentissage par le jeu a ravivé sa passion pour les études."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                transition={{ delay: index * 0.2 }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl p-12 text-white text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-kente-stripes opacity-10"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
              Prêt à transformer l'éducation dans votre école ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10">
              Rejoignez plus de 500 écoles à travers l'Afrique qui utilisent déjà AKILI pour créer des expériences d'apprentissage engageantes et mesurer les progrès de leurs élèves.
            </p>
            <div className="flex justify-center relative z-10">
              <Link to="/inscription-ecoles">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Prennez un abonnement
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
