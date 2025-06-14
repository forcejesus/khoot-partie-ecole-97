
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play, Users, BarChart2, Zap, CheckCircle2, Star, Globe, Award, Target, Sparkles, BookOpen, TrendingUp } from "lucide-react";
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
    { icon: Users, number: "10,000+", label: "Élèves actifs", color: "text-blue-400" },
    { icon: Globe, number: "500+", label: "Écoles partenaires", color: "text-green-400" },
    { icon: Award, number: "95%", label: "Satisfaction", color: "text-yellow-400" },
    { icon: Target, number: "40%", label: "Amélioration des résultats", color: "text-purple-400" }
  ];

  const features = [
    {
      color: "from-orange-500 to-red-500",
      icon: "🎯",
      title: "Quiz en temps réel",
      description: "Créez des quiz interactifs que vos élèves adorent. Questions variées, résultats instantanés.",
      gradient: "hover:from-orange-600 hover:to-red-600"
    },
    {
      color: "from-green-500 to-emerald-500", 
      icon: "📊",
      title: "Analyses détaillées",
      description: "Suivez les progrès individuels et collectifs avec des rapports visuels et actionables.",
      gradient: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      color: "from-blue-500 to-indigo-500",
      icon: "🏆", 
      title: "Gamification",
      description: "Badges, classements et récompenses pour maintenir la motivation au maximum.",
      gradient: "hover:from-blue-600 hover:to-indigo-600"
    }
  ];

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
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
                <span className="text-sm font-medium text-white/90">Plateforme éducative moderne</span>
                <Sparkles className="w-4 h-4 text-yellow-300" />
              </motion.div>

              <motion.h1 
                variants={fadeInVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
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
                  className="text-white font-normal text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent"
                >
                  Apprentissage interactif
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInVariants}
                className="text-xl md:text-2xl text-violet-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              >
                Créez des quiz captivants, engagez vos élèves en temps réel 
                et transformez votre classe avec la gamification moderne
              </motion.p>
              
              <motion.div 
                variants={fadeInVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              >
                <Link to="/inscription-ecoles">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        Commencer gratuitement
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/solution">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/20 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm shadow-xl">
                      <Play className="mr-3 h-6 w-6" />
                      Voir la démo
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
                    <div className="font-bold text-2xl md:text-3xl text-white mb-2">{stat.number}</div>
                    <div className="text-sm text-violet-200 font-medium">{stat.label}</div>
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

      {/* Enhanced Features Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInVariants} className="inline-flex items-center gap-2 bg-violet-100 rounded-full px-6 py-2 mb-8">
              <BookOpen className="w-5 h-5 text-violet-600" />
              <span className="text-violet-700 font-semibold">Fonctionnalités</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Tout ce dont vous avez besoin pour 
              <span className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text"> captiver vos élèves</span>
            </motion.h2>
            <motion.p 
              variants={fadeInVariants}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Des outils simples et puissants pour créer des expériences d'apprentissage inoubliables
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${feature.color} ${feature.gradient} rounded-2xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-lg relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg relative z-10">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Section Nos offres AKILI */}
      <OffresSection />
      
      {/* Enhanced Testimonials */}
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
      
      {/* Enhanced CTA Final */}
      <section className="py-24 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"2\"/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
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
    </div>
  );
};

export default Index;
