
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BarChart2, Zap, CheckCircle2, Star, Globe, Award, Target } from "lucide-react";
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

  const stats = [
    { icon: Users, number: "10,000+", label: "Élèves actifs" },
    { icon: Globe, number: "500+", label: "Écoles partenaires" },
    { icon: Award, number: "95%", label: "Satisfaction" },
    { icon: Target, number: "40%", label: "Amélioration des résultats" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-white/90">Plateforme éducative moderne</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  AKILI
                </span>
                <br />
                <span className="text-white font-normal text-3xl md:text-4xl lg:text-5xl">
                  Apprentissage interactif
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-violet-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Créez des quiz captivants, engagez vos élèves en temps réel 
                et transformez votre classe avec la gamification
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link to="/inscription-ecoles">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
                    Commencer gratuitement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solution">
                  <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm">
                    <Play className="mr-2 h-5 w-5" />
                    Voir la démo
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <stat.icon className="h-6 w-6 text-orange-300 mx-auto mb-2" />
                    <div className="font-bold text-xl md:text-2xl text-white mb-1">{stat.number}</div>
                    <div className="text-xs text-violet-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Tout ce dont vous avez besoin pour 
              <span className="text-violet-600"> captiver vos élèves</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des outils simples et puissants pour créer des expériences d'apprentissage inoubliables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                color: "bg-gradient-to-br from-orange-500 to-red-500",
                icon: "🎯",
                title: "Quiz en temps réel",
                description: "Créez des quiz interactifs que vos élèves adorent. Questions variées, résultats instantanés."
              },
              {
                color: "bg-gradient-to-br from-green-500 to-emerald-500", 
                icon: "📊",
                title: "Analyses détaillées",
                description: "Suivez les progrès individuels et collectifs avec des rapports visuels et actionables."
              },
              {
                color: "bg-gradient-to-br from-blue-500 to-indigo-500",
                icon: "🏆", 
                title: "Gamification",
                description: "Badges, classements et récompenses pour maintenir la motivation au maximum."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center group hover:-translate-y-1"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Section Nos offres AKILI */}
      <OffresSection />
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rejoignez les <span className="text-violet-600">leaders de l'éducation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment AKILI transforme l'apprentissage dans les écoles africaines
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Prêt à transformer votre école ?
            </h2>
            <p className="text-lg md:text-xl mb-12 text-violet-100 leading-relaxed">
              Rejoignez plus de 500 écoles qui utilisent déjà AKILI pour créer 
              des expériences d'apprentissage extraordinaires
            </p>
            <div className="flex justify-center">
              <Link to="/inscription-ecoles">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
                  Commencer maintenant
                  <ArrowRight className="ml-2 h-6 w-6" />
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
