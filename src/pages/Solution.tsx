
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
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Solution = () => {
  const { t } = useLanguage();
  
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
      icon: "🎮",
      title: t("solution.features.gamification.title"),
      description: t("solution.features.gamification.description"),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "👨‍🏫",
      title: t("solution.features.management.title"),
      description: t("solution.features.management.description"),
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "📊",
      title: t("solution.features.analytics.title"),
      description: t("solution.features.analytics.description"),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏅",
      title: t("solution.features.rewards.title"),
      description: t("solution.features.rewards.description"),
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: t("solution.benefits.accessible.title"),
      description: t("solution.benefits.accessible.description")
    },
    {
      icon: Globe,
      title: t("solution.benefits.multilingual.title"),
      description: t("solution.benefits.multilingual.description")
    },
    {
      icon: Zap,
      title: t("solution.benefits.performance.title"),
      description: t("solution.benefits.performance.description")
    },
    {
      icon: Shield,
      title: t("solution.benefits.security.title"),
      description: t("solution.benefits.security.description")
    }
  ];

  const values = [
    {
      icon: Target,
      title: t("solution.values.excellence.title"),
      description: t("solution.values.excellence.description")
    },
    {
      icon: Lightbulb,
      title: t("solution.values.innovation.title"),
      description: t("solution.values.innovation.description")
    },
    {
      icon: Heart,
      title: t("solution.values.impact.title"),
      description: t("solution.values.impact.description")
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Navbar />
      
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
            <span className="text-sm font-medium text-gray-700 font-inter">{t("solution.badge")}</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
            <motion.span 
              className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              {t("solution.title")}
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium leading-relaxed font-inter">
            {t("solution.subtitle")}
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

        {/* Fonctionnalités principales améliorées */}
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
            {t("solution.features.title")}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 border-0 bg-white/95 backdrop-blur-sm relative overflow-hidden h-full rounded-2xl">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${feature.color}`}></div>
                  
                  <CardHeader className="relative z-10 pb-4">
                    {/* Layout horizontal avec icône et titre */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shadow-xl`}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 font-poppins flex-1">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <p className="text-gray-600 leading-relaxed font-inter text-base">
                      {feature.description}
                    </p>
                    
                    {/* Ornement décoratif */}
                    <div className="flex justify-start mt-6">
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
                {t("solution.benefits.title")}
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
            {t("solution.values.title")}
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
      </div>
      
      <Footer />
    </div>
  );
};

export default Solution;
