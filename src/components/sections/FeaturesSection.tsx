
import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
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
      color: "from-orange-500 to-red-500",
      icon: "🎯",
      title: t("home.features.quiz.title"),
      description: t("home.features.quiz.description"),
      gradient: "hover:from-orange-600 hover:to-red-600"
    },
    {
      color: "from-green-500 to-emerald-500", 
      icon: "📊",
      title: t("home.features.analytics.title"),
      description: t("home.features.analytics.description"),
      gradient: "hover:from-green-600 hover:to-emerald-600"
    },
    {
      color: "from-blue-500 to-indigo-500",
      icon: "🏆", 
      title: t("home.features.gamification.title"),
      description: t("home.features.gamification.description"),
      gradient: "hover:from-blue-600 hover:to-indigo-600"
    }
  ];

  return (
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
            <span className="text-violet-700 font-semibold">{t("home.features.badge")}</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
          >
            {t("home.features.title").split(" captiver vos élèves").length > 1 ? (
              <>
                {t("home.features.title").split(" captiver vos élèves")[0]}
                <span className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text"> captiver vos élèves</span>
              </>
            ) : (
              <>
                {t("home.features.title").split(" captivate your students").length > 1 ? (
                  <>
                    {t("home.features.title").split(" captivate your students")[0]}
                    <span className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text"> captivate your students</span>
                  </>
                ) : (
                  <>
                    {t("home.features.title").substring(0, t("home.features.title").lastIndexOf(" "))}
                    <span className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text"> {t("home.features.title").substring(t("home.features.title").lastIndexOf(" "))}</span>
                  </>
                )}
              </>
            )}
          </motion.h2>
          <motion.p 
            variants={fadeInVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t("home.features.subtitle")}
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
  );
};

export default FeaturesSection;
