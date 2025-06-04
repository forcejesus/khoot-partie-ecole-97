import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, Users, Target, ArrowRight, Star, 
  Sparkles, Award, Clock, Shield, Check, LucideIcon,
  BarChart, LineChart, PieChart, MapPin, TrendingUp,
  Mail, Phone
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  // Animation pour l'apparition des éléments au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const handleDemoClick = () => {
    toast.success("Découvrez notre démo interactive !", {
      description: "Une expérience d'apprentissage révolutionnaire"
    });
    navigate("/login");
  };

  const testimonials = [
    {
      name: "Prof. Makosso",
      role: "Enseignant d'informatique",
      content: "AKILI a transformé ma façon d'enseigner. Mes étudiants sont plus engagés que jamais !",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Aminata D.",
      role: "Étudiante en économie",
      content: "Apprendre n'a jamais été aussi amusant. Je me retrouve à réviser volontairement avec AKILI !",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "École Primaire Brazzaville",
      role: "Centre de formation",
      content: "Cette plateforme nous permet de digitaliser notre offre de formation avec efficacité.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Apprentissage gamifié",
      description: "Transformez les leçons en jeux captivants inspirés des traditions africaines",
      color: "from-african-sunset to-african-terracotta"
    },
    {
      icon: Award,
      title: "Système de récompenses",
      description: "Encouragez la participation avec des badges inspirés de l'artisanat africain",
      color: "from-african-gold to-african-ochre"
    },
    {
      icon: Clock,
      title: "Sessions chronométrées",
      description: "Créez une ambiance dynamique avec des défis rythmés comme les tam-tams",
      color: "from-african-baobab to-african-earth"
    },
    {
      icon: Shield,
      title: "Sécurité des données",
      description: "Protection robuste des informations, solide comme les traditions ancestrales",
      color: "from-african-tribal to-african-copper"
    }
  ];
  
  const advancedFeatures = [
    {
      icon: BarChart,
      title: "Analytiques avancées",
      description: "Suivez les performances avec des graphiques colorés et intuitifs",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: LineChart, 
      title: "Progression personnalisée",
      description: "Parcours adaptatif respectant le rythme unique de chaque apprenant",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: PieChart,
      title: "Rapports institutionnels", 
      description: "Générez des rapports consolidés pour votre établissement",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "Intelligence prédictive",
      description: "Anticipez les besoins d'apprentissage avec notre IA innovante",
      color: "from-rose-500 to-pink-600"
    }
  ];

  const StatCard = ({ number, text, color }: { number: string; text: string; color: string }) => (
    <motion.div 
      initial="hidden" 
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className={`${color} p-8 rounded-2xl flex flex-col items-center justify-center shadow-tribal hover:scale-105 transition-all duration-500 hover:shadow-kente relative overflow-hidden animate-tribal-pulse`}
    >
      {/* Motif africain en arrière-plan avec masque tribal */}
      <div className="absolute inset-0 opacity-20 bg-mask-texture">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-mask-float">
          <defs>
            <pattern id="african-stat-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
              <polygon points="12.5,0 25,12.5 12.5,25 0,12.5" fill="white" opacity="0.3"/>
              <circle cx="12.5" cy="12.5" r="3" fill="white" opacity="0.5"/>
              <path d="M6,6 L19,19 M19,6 L6,19" stroke="white" strokeWidth="2" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#african-stat-pattern)"/>
        </svg>
      </div>
      
      {/* Bordure tribale décorative */}
      <div className="absolute top-2 left-2 right-2 h-1 bg-gradient-to-r from-african-gold via-african-kente to-african-gold rounded-full opacity-60"></div>
      <div className="absolute bottom-2 left-2 right-2 h-1 bg-gradient-to-r from-african-gold via-african-kente to-african-gold rounded-full opacity-60"></div>
      
      <h3 className="text-5xl font-bold text-white mb-3 relative z-10 font-african animate-african-dance">{number}</h3>
      <p className="text-white text-center relative z-10 font-medium">{text}</p>
      
      {/* Ornements africains */}
      <div className="absolute top-4 right-4 w-6 h-6 opacity-30">
        <svg viewBox="0 0 24 24" fill="white">
          <path d="M12 2L15 8L22 8L17 13L19 21L12 17L5 21L7 13L2 8L9 8Z"/>
        </svg>
      </div>
    </motion.div>
  );

  const FeatureCard = ({ icon: Icon, title, description, color }: { icon: LucideIcon; title: string; description: string; color?: string }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInVariants}
    >
      <Card className="group hover:shadow-african transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden h-full animate-baobab-sway">
        {/* Bordure colorée africaine avec motif Kente */}
        <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${color || 'from-orange-500 via-red-500 to-yellow-500'} animate-kente-wave`}></div>
        
        {/* Motif de fond africain */}
        <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
        
        <CardHeader className="text-center relative z-10">
          <div className={`mx-auto w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${color || 'from-orange-100 to-red-50'} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative shadow-card animate-tribal-pulse`}>
            {/* Motifs décoratifs dans l'icône */}
            <div className="absolute inset-0 opacity-20 rounded-2xl">
              <div className="w-3 h-3 bg-african-terracotta rounded-full absolute top-2 left-2 animate-pulse"></div>
              <div className="w-2 h-2 bg-african-gold rounded-full absolute top-3 right-3 animate-pulse"></div>
              <div className="w-2 h-2 bg-african-kente rounded-full absolute bottom-2 left-3 animate-pulse"></div>
              <div className="w-3 h-3 bg-african-ochre rounded-full absolute bottom-2 right-2 animate-pulse"></div>
            </div>
            <Icon className="h-10 w-10 text-orange-600 relative z-10" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800 font-african">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-gray-600 text-center leading-relaxed">
            {description}
          </p>
          
          {/* Ornement décoratif en bas */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-african-terracotta rounded-full"></div>
              <div className="w-3 h-1 bg-african-gold rounded-full"></div>
              <div className="w-2 h-2 bg-african-kente rounded-full"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Motif de fond africain global */}
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      {/* Hero Section avec thème africain renforcé */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond africaine avec overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2000')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/85 via-red-800/75 to-yellow-900/85" />
        
        {/* Motifs géométriques africains plus complexes */}
        <div className="absolute inset-0 opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="african-hero-geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,10 70,40 40,70 10,40" fill="white" opacity="0.3"/>
                <circle cx="40" cy="40" r="8" fill="white" opacity="0.5"/>
                <path d="M20,20 L60,60 M60,20 L20,60" stroke="white" strokeWidth="3" opacity="0.4"/>
                <rect x="30" y="30" width="20" height="20" fill="none" stroke="white" strokeWidth="2" opacity="0.3"/>
              </pattern>
              <pattern id="tribal-border" x="0" y="0" width="60" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,0 20,10 10,20 0,10" fill="white" opacity="0.6"/>
                <polygon points="30,0 40,10 30,20 20,10" fill="white" opacity="0.4"/>
                <polygon points="50,0 60,10 50,20 40,10" fill="white" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#african-hero-geo)" className="text-white animate-african-dance"/>
            <rect x="0" y="0" width="100%" height="40" fill="url(#tribal-border)" className="text-white"/>
            <rect x="0" y="760" width="100%" height="40" fill="url(#tribal-border)" className="text-white"/>
          </svg>
        </div>
        
        {/* Éléments décoratifs flottants */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-african-gold to-african-ochre rounded-full opacity-30 animate-mask-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-r from-african-kente to-african-sunset rounded-full opacity-40 animate-african-dance"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-gradient-to-r from-african-terracotta to-african-baobab rounded-full opacity-25 animate-tribal-pulse"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="max-w-5xl mx-auto space-y-8">
            <div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Ornements tribaux autour du titre */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                  <div className="w-8 h-8 bg-african-gold clip-path-kente-diamond opacity-60 animate-african-dance"></div>
                  <div className="w-6 h-6 bg-african-kente rounded-full opacity-80 animate-tribal-pulse"></div>
                  <div className="w-8 h-8 bg-african-gold clip-path-kente-diamond opacity-60 animate-african-dance"></div>
                </div>
                
                <h1 className="text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 font-african tracking-widest animate-tribal-pulse relative">
                  AKILI
                  {/* Effet de brillance africain */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-kente-wave"></div>
                </h1>
                
                {/* Ornement central complexe */}
                <div className="flex justify-center items-center mb-6">
                  <div className="h-2 w-24 bg-gradient-to-r from-african-gold to-african-ochre rounded-full animate-kente-wave"></div>
                  <div className="mx-6 w-12 h-12 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full flex items-center justify-center relative animate-tribal-pulse">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-african-kente rounded-full animate-african-dance"></div>
                  </div>
                  <div className="h-2 w-24 bg-gradient-to-l from-african-gold to-african-ochre rounded-full animate-kente-wave"></div>
                </div>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-2xl mb-8 leading-relaxed opacity-95 text-orange-100 max-w-4xl mx-auto font-light"
              >
                La plateforme d'apprentissage interactive qui célèbre la richesse éducative africaine
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg mb-8 text-yellow-200 italic flex items-center justify-center gap-3"
              >
                <div className="w-4 h-4 bg-african-gold clip-path-kente-diamond"></div>
                "Akili" signifie "intelligence" en swahili - Votre sagesse numérique
                <div className="w-4 h-4 bg-african-gold clip-path-kente-diamond"></div>
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col md:flex-row gap-6 justify-center"
            >
              <Link to="/solution">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-300 shadow-tribal text-lg px-10 py-8 rounded-2xl border-4 border-yellow-400/30 relative overflow-hidden animate-tribal-pulse"
                >
                  <div className="absolute inset-0 bg-kente-stripes opacity-20"></div>
                  <span className="relative z-10 flex items-center gap-3">
                    Découvrir AKILI 
                    <ArrowRight className="h-6 w-6" />
                  </span>
                </Button>
              </Link>
              <Button
                onClick={handleDemoClick}
                variant="outline"
                size="lg"
                className="bg-transparent border-4 border-yellow-300/70 text-yellow-100 hover:bg-yellow-500/20 hover:scale-105 transition-all duration-300 text-lg px-10 py-8 rounded-2xl backdrop-blur-sm animate-baobab-sway"
              >
                <span className="flex items-center gap-3">
                  Voir la démo
                  <div className="w-4 h-4 bg-yellow-300 clip-path-kente-diamond"></div>
                </span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Vague stylisée africaine avec motifs */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-orange-50 to-transparent" />
        <motion.div 
          className="absolute -bottom-2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="relative block w-full h-[80px]"
            fill="#fff7ed"
          >
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                <polygon points="20,5 30,10 20,15 10,10" fill="#ea580c" opacity="0.1"/>
              </pattern>
            </defs>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            <rect width="100%" height="100%" fill="url(#wave-pattern)"/>
          </svg>
        </motion.div>
      </section>

      {/* Section Pourquoi AKILI avec thème africain renforcé */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-b from-orange-50 via-yellow-50 to-red-50">
        {/* Motifs de fond tribaux */}
        <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-20"
          >
            {/* Ornement traditionnel au-dessus du titre */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond animate-african-dance"></div>
                <div className="w-8 h-2 bg-gradient-to-r from-african-gold to-african-ochre rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-tribal-pulse">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
                <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
                <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond animate-african-dance"></div>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent inline-block font-african">
              Pourquoi choisir AKILI ?
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto mt-6 rounded-full shadow-african" />
            <p className="text-2xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium">
              L'intelligence africaine au service de l'éducation moderne
            </p>
            
            {/* Motifs décoratifs sous le titre */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="w-3 h-3 bg-african-gold rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-african-kente rounded-full animate-african-dance"></div>
              <div className="w-3 h-3 bg-african-terracotta rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques avec thème africain renforcé */}
      <section className="py-32 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Motif de séparation tribal */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-20"
          >
            {/* Masque africain stylisé comme ornement */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-24 bg-gradient-to-b from-african-baobab to-african-earth clip-path-african-mask relative animate-mask-float">
                <div className="absolute inset-0 bg-african-pattern opacity-30"></div>
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-african-gold rounded-full"></div>
                <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-african-gold rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent inline-block font-african">
              Notre impact en Afrique
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto mt-6 rounded-full shadow-african" />
            
            {/* Proverbe africain */}
            <p className="text-xl text-african-baobab mt-8 italic font-medium">
              "Un arbre ne peut pas faire une forêt" - Proverbe africain
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <StatCard number="8000+" text="Apprenants actifs" color="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-600 shadow-tribal" />
            <StatCard number="150+" text="Écoles partenaires" color="bg-gradient-to-br from-african-terracotta via-african-sunset to-african-gold shadow-kente" />
            <StatCard number="300+" text="Formateurs certifiés" color="bg-gradient-to-br from-african-baobab via-african-earth to-african-copper shadow-african" />
            <StatCard number="99%" text="Taux de satisfaction" color="bg-gradient-to-br from-green-500 via-emerald-500 to-african-savanna shadow-tribal" />
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités avancées */}
      <section className="py-40 relative overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-red-50">
        {/* Séparateur tribal en haut */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-white transform -skew-y-2 shadow-lg" />
        <div className="absolute top-2 left-0 right-0 h-2 bg-gradient-to-r from-african-kente via-african-gold to-african-terracotta"></div>
        
        <div className="container mx-auto px-4 pt-12 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-24"
          >
            {/* Ornement en forme de tambour africain */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-african-baobab to-african-earth rounded-full flex items-center justify-center animate-tribal-pulse">
                  <div className="w-12 h-12 border-4 border-african-gold rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-african-gold rounded-full animate-african-dance"></div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-african-kente rounded-full animate-pulse"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-african-ochre rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-african-sunset rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-african-terracotta rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent inline-block font-african">
              Fonctionnalités avancées
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto mt-6 rounded-full shadow-african" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages avec style africain */}
      <section className="py-32 relative overflow-hidden bg-white">
        {/* Bordures tribales */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-african-terracotta via-african-gold to-african-kente"></div>
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-african-kente via-african-gold to-african-terracotta"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent inline-block font-african">
              Témoignages
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto mt-6 rounded-full shadow-african" />
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-8"
                    >
                      <Card className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 border-4 border-orange-200 shadow-african overflow-hidden relative animate-baobab-sway">
                        {/* Motif de fond dans la carte */}
                        <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
                        
                        {/* Bordure décorative en haut */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-african-gold via-african-kente to-african-gold"></div>
                        
                        <CardContent className="p-10 relative z-10">
                          <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-6 border-african-gold relative animate-tribal-pulse">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                              {/* Ornements autour de l'avatar */}
                              <div className="absolute -top-2 -right-2 w-6 h-6 bg-african-kente rounded-full animate-african-dance"></div>
                              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-african-terracotta rounded-full animate-pulse"></div>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                              <p className="text-xl italic mb-6 text-gray-700 leading-relaxed">"{testimonial.content}"</p>
                              <h4 className="font-bold text-2xl text-gray-900 font-african">{testimonial.name}</h4>
                              <p className="text-orange-600 font-medium text-lg">{testimonial.role}</p>
                              
                              {/* Ornement décoratif */}
                              <div className="flex justify-center md:justify-start mt-4">
                                <div className="flex items-center space-x-2">
                                  <div className="w-3 h-3 bg-african-gold rounded-full"></div>
                                  <div className="w-4 h-1 bg-african-kente rounded-full"></div>
                                  <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-6">
                <CarouselPrevious className="relative -left-0 h-12 w-12 rounded-full bg-white border-4 border-orange-200 hover:bg-orange-50 shadow-card animate-baobab-sway" />
                <CarouselNext className="relative -right-0 h-12 w-12 rounded-full bg-white border-4 border-orange-200 hover:bg-orange-50 shadow-card animate-baobab-sway" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Section Prix FCFA avec thème africain renforcé */}
      <section className="py-40 bg-gradient-to-b from-orange-50 via-yellow-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent inline-block">
              Nos offres AKILI
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mt-4 rounded-full" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-orange-200 h-full bg-gradient-to-br from-white to-orange-50">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-400"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Découverte</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">25 000 FCFA</div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Accès à tous les jeux éducatifs
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Statistiques de base
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Support par email
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full mt-8 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 transition-all">
                    Choisir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="relative transform hover:-translate-y-2 transition-all duration-500 border-2 border-yellow-400 shadow-xl hover:shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 z-10 h-full">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Sagesse</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">50 000 FCFA</div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Tous les jeux et fonctionnalités
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Analytiques avancées
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Support prioritaire
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-orange-500 mr-2" />
                        Personnalisation complète
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full mt-8 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 transition-all">
                    Choisir
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="relative group hover:shadow-2xl transition-all duration-500 border-2 border-green-200 h-full bg-gradient-to-br from-white to-green-50">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-emerald-400"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800">Excellence</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      Sur mesure
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        Solution personnalisée
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        Support dédié
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        Formation sur site
                      </li>
                      <li className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        Accès API complet
                      </li>
                    </ul>
                  </div>
                  <Button className="w-full mt-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all">
                    Contactez-nous
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <Link to="/offres">
              <Button variant="outline" className="mt-4 border-2 border-orange-300 text-orange-600 hover:bg-orange-50">
                Voir toutes nos offres <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Appel à l'action avec thème africain renforcé */}
      <section className="py-32 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        
        {/* Motifs africains en overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 400 200">
            <pattern id="african-cta" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="3" fill="white"/>
              <path d="M10,10 L30,30 M30,10 L10,30" stroke="white" strokeWidth="2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#african-cta)"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8"
          >
            Prêt à éveiller l'AKILI en vous?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
          >
            Rejoignez des milliers d'apprenants africains qui découvrent une nouvelle façon d'apprendre avec la sagesse numérique.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-lg text-lg px-10 py-6 rounded-xl w-full sm:w-auto font-semibold"
              >
                Commencer avec AKILI <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline"
                size="lg" 
                className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 text-lg px-10 py-6 rounded-xl w-full sm:w-auto"
              >
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer avec informations africaines */}
      <footer className="bg-gray-900 text-white py-24 relative overflow-hidden">
        {/* Motif de fond africain */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <pattern id="footer-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <polygon points="25,5 45,25 25,45 5,25" fill="white"/>
              <circle cx="25" cy="25" r="8" fill="none" stroke="white" strokeWidth="2"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                AKILI
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                La plateforme d'apprentissage qui honore l'intelligence africaine et prépare l'avenir numérique du continent.
              </p>
              <p className="text-orange-400 italic text-sm">
                "L'intelligence véritable honore ses racines" - Proverbe africain
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to="/solution" className="text-gray-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">
                    Notre Solution
                  </Link>
                </li>
                <li>
                  <Link to="/offres" className="text-gray-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">
                    Nos offres
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-orange-400 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  contact@akili-education.cg
                </li>
                <li className="flex items-center text-gray-400 hover:text-orange-400 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +242 06 956 53 90
                </li>
                <li className="flex items-center text-gray-400 hover:text-orange-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  Avenue de l'Indépendance
                </li>
                <li className="flex items-center text-gray-400 hover:text-orange-400 transition-colors">
                  <MapPin className="w-4 h-4 mr-2" />
                  Brazzaville, République du Congo
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <div className="flex justify-center items-center mb-4">
              <div className="h-1 w-16 bg-orange-500 rounded-full"></div>
              <div className="mx-3 w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="h-1 w-16 bg-red-500 rounded-full"></div>
            </div>
            <p className="text-gray-400">© {new Date().getFullYear()} AKILI - Intelligence Africaine Numérique. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
