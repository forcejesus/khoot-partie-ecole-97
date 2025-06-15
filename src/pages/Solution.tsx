import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Users, BarChart, Award, 
  Smartphone, Globe, Zap, Shield,
  Target, Lightbulb, Heart, Star,
  Sparkles, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Solution = () => {
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

  const features = [
    {
      icon: BookOpen,
      title: "Apprentissage gamifié",
      description: "Transformez l'éducation en aventure captivante avec nos jeux inspirés des traditions africaines",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Gestion des apprenants",
      description: "Suivez facilement les progrès de chaque élève avec des outils intuitifs et performants",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: BarChart,
      title: "Analytiques avancées",
      description: "Obtenez des insights précieux sur les performances avec des tableaux de bord détaillés",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Système de récompenses",
      description: "Motivez vos apprenants avec des badges et certificats inspirés de l'artisanat africain",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: "Accessible partout",
      description: "Plateforme optimisée pour tous les appareils, même avec une connexion limitée"
    },
    {
      icon: Globe,
      title: "Multilingue",
      description: "Interface disponible en français et langues locales africaines"
    },
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Infrastructure adaptée aux réalités technologiques africaines"
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Protection des données conforme aux standards internationaux"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence éducative",
      description: "Nous croyons que chaque enfant africain mérite une éducation de qualité mondiale"
    },
    {
      icon: Lightbulb,
      title: "Innovation culturelle",
      description: "Nous intégrons la richesse culturelle africaine dans nos solutions technologiques"
    },
    {
      icon: Heart,
      title: "Impact social",
      description: "Notre mission est de contribuer au développement durable de l'Afrique par l'éducation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
      
      <div className="container mx-auto py-12 px-4 md:px-6 relative z-10">
        {/* En-tête amélioré */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mb-20 text-center"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-orange-200 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-orange-500 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700 font-inter">Innovation éducative africaine</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
            <motion.span 
              className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Notre Solution AKILI
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium leading-relaxed font-inter">
            Une plateforme éducative révolutionnaire qui marie l'intelligence africaine traditionnelle 
            avec les technologies modernes pour transformer l'apprentissage.
          </p>

          {/* Ornements décoratifs */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </motion.div>

        {/* Fonctionnalités principales */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 
            variants={fadeInVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-poppins"
          >
            Fonctionnalités Principales
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden h-full rounded-2xl">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`}></div>
                  
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className={`mx-auto w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 font-poppins">{feature.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-gray-600 text-center leading-relaxed font-inter">{feature.description}</p>
                    
                    {/* Ornement décoratif */}
                    <div className="flex justify-center mt-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <div className="w-3 h-1 bg-orange-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Avantages */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="mb-20"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 opacity-50"></div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-poppins"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Pourquoi Choisir AKILI ?
              </motion.h2>
              
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-poppins">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-inter">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Nos valeurs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 
            variants={fadeInVariants}
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-poppins"
          >
            Nos Valeurs
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border border-gray-200 bg-white/95 backdrop-blur-sm relative overflow-hidden rounded-2xl">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
                  
                  <CardHeader className="text-center relative z-10">
                    <div className="mx-auto w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-xl">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 font-poppins">{value.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 text-center leading-relaxed font-inter">{value.description}</p>
                    
                    {/* Ornement décoratif */}
                    <div className="flex justify-center mt-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <div className="w-4 h-1 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to action modifié - sans le bouton démo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
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
              Prêt à révolutionner l'éducation ?
            </motion.h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
              Rejoignez le mouvement AKILI et donnez à vos apprenants les outils 
              pour exceller dans le monde numérique tout en honorant leurs racines africaines.
            </p>
            
            <div className="flex justify-center">
              <Link to="/offres">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl border-0 relative overflow-hidden group font-poppins">
                    <span className="relative z-10 flex items-center">
                      Découvrir nos offres
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
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
