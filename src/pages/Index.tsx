
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap, Users, BarChart2, Play, Star } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 font-cairo">
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/50">
        {/* Geometric patterns background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-full px-4 py-2 mb-8"
              >
                <Star className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-800">Solution n°1 en éducation interactive</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
                  AKILI
                </span>
                <br />
                <span className="text-gray-900 text-4xl md:text-5xl font-normal">
                  Transformez vos cours
                </span>
                <br />
                <span className="text-gray-700 text-3xl md:text-4xl font-light">
                  en expériences captivantes
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                La plateforme d'apprentissage interactif nouvelle génération. Créez des quiz engageants, 
                suivez les progrès en temps réel et motivez vos élèves comme jamais auparavant.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                <Link to="/inscription-ecoles">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Prennez un abonnement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solution">
                  <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-10 py-6 text-lg font-semibold rounded-xl">
                    <Play className="mr-2 h-5 w-5" />
                    Découvrir la solution
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <motion.div 
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { icon: CheckCircle2, text: "Facile à utiliser", desc: "Installation en 5min" },
                  { icon: Users, text: "+10,000 élèves", desc: "Nous font confiance" },
                  { icon: BarChart2, text: "Résultats mesurables", desc: "+40% d'engagement" },
                  { icon: Zap, text: "Support 24/7", desc: "Équipe dédiée" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-100 shadow-lg"
                  >
                    <item.icon className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900 text-sm">{item.text}</div>
                    <div className="text-xs text-gray-600">{item.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-100">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 h-12 flex items-center justify-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                    <div className="w-3 h-3 rounded-full bg-white/30"></div>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-br from-orange-50 to-yellow-50">
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-orange-300 to-red-300 rounded w-3/4"></div>
                    <div className="h-3 bg-orange-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="h-20 bg-white rounded-xl shadow-sm border border-orange-200 flex items-center justify-center">
                        <div className="text-2xl">📊</div>
                      </div>
                      <div className="h-20 bg-white rounded-xl shadow-sm border border-orange-200 flex items-center justify-center">
                        <div className="text-2xl">🎯</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section Nos offres AKILI */}
      <OffresSection />
      
      {/* Testimonials Section - Redesigned */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-800">Témoignages</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-african">
              Ce que disent nos <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">utilisateurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment AKILI aide les enseignants et écoles à améliorer l'engagement des élèves
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "Amadou Diallo",
                role: "Directeur, École Primaire de Dakar",
                image: "/images/testimonial-1.jpg",
                quote: "AKILI a transformé notre école. Les enseignants créent facilement des quiz interactifs et les élèves sont plus motivés. Nos résultats scolaires se sont améliorés de 40%.",
                rating: 5
              },
              {
                name: "Fatima Nkosi",
                role: "Enseignante, Lycée de Kinshasa",
                image: "/images/testimonial-2.jpg",
                quote: "Avec AKILI, mes cours de mathématiques sont devenus interactifs. Les élèves participent activement et je peux suivre leur compréhension en temps réel.",
                rating: 5
              },
              {
                name: "Emmanuel Okafor",
                role: "Parent d'élève, Lagos",
                image: "/images/testimonial-3.jpg",
                quote: "Mon fils attend avec impatience ses cours depuis que son école utilise AKILI. L'apprentissage par le jeu a ravivé sa passion pour les études.",
                rating: 5
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
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gradient-to-br from-orange-400 to-red-400">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Redesigned */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden max-w-5xl mx-auto"
          >
            {/* Background patterns */}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 right-20 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-african leading-tight">
                Prêt à transformer l'éducation dans votre école ?
              </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-90">
                Rejoignez plus de 500 écoles à travers l'Afrique qui utilisent déjà AKILI pour créer des expériences d'apprentissage engageantes.
              </p>
              <div className="flex justify-center">
                <Link to="/inscription-ecoles">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Prennez un abonnement
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
