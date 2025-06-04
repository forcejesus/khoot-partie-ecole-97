
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, Users, BarChart, Award, 
  Smartphone, Globe, Zap, Shield,
  Target, Lightbulb, Heart, Star
} from "lucide-react";
import { motion } from "framer-motion";

const Solution = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
      color: "from-african-gold to-african-ochre"
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
        {/* En-tête avec ornements africains */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            Notre Solution AKILI
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto rounded-full shadow-african" />
          
          <p className="text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium">
            Une plateforme éducative révolutionnaire qui marie l'intelligence africaine traditionnelle 
            avec les technologies modernes pour transformer l'apprentissage.
          </p>
        </motion.div>

        {/* Fonctionnalités principales */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
            Fonctionnalités Principales
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-african transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden h-full">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
                
                <CardHeader className="text-center relative z-10">
                  <div className={`mx-auto w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-card`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 font-african">{feature.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center">{feature.description}</p>
                  
                  {/* Ornement décoratif */}
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-african-terracotta rounded-full"></div>
                      <div className="w-3 h-1 bg-african-gold rounded-full"></div>
                      <div className="w-2 h-2 bg-african-kente rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-african border-2 border-orange-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
            <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
                Pourquoi Choisir AKILI ?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-50 flex items-center justify-center shadow-card">
                      <benefit.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 font-african">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Nos valeurs */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
            Nos Valeurs
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-african transition-all duration-500 border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente"></div>
                <div className="absolute inset-0 opacity-5 bg-mask-texture"></div>
                
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-card">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-african">{value.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                  
                  {/* Ornement décoratif */}
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-african-gold rounded-full"></div>
                      <div className="w-4 h-1 bg-african-kente rounded-full"></div>
                      <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Call to action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-tribal-dots"></div>
          
          <div className="relative z-10">
            <Star className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6 font-african">
              Prêt à révolutionner l'éducation ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Rejoignez le mouvement AKILI et donnez à vos apprenants les outils 
              pour exceller dans le monde numérique tout en honorant leurs racines africaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-yellow-50 px-8 py-4 font-semibold">
                Découvrir nos offres
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4">
                Demander une démo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
