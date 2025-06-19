
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gamepad2, Users, BarChart3, Trophy, 
  Zap, Smartphone, Globe, Sparkles, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const OffresSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "🎮",
      title: t("home.solution.features.interactive.title"),
      description: t("home.solution.features.interactive.description"),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "👥",
      title: t("home.solution.features.collaboration.title"),
      description: t("home.solution.features.collaboration.description"),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: t("home.solution.features.analytics.title"),
      description: t("home.solution.features.analytics.description"),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏆",
      title: t("home.solution.features.gamification.title"),
      description: t("home.solution.features.gamification.description"),
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    { icon: "⚡", title: t("home.solution.benefits.quick"), description: t("home.solution.benefits.quickDesc") },
    { icon: "📱", title: t("home.solution.benefits.multiDevice"), description: t("home.solution.benefits.multiDeviceDesc") },
    { icon: "✨", title: t("home.solution.benefits.intuitive"), description: t("home.solution.benefits.intuitiveDesc") }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-4">
            {t("home.solution.title").split(" l'éducation moderne").length > 1 ? (
              <>
                {t("home.solution.title").split(" l'éducation moderne")[0]}
                <span className="text-purple-600"> l'éducation moderne</span>
              </>
            ) : (
              <>
                {t("home.solution.title").split(" modern education").length > 1 ? (
                  <>
                    {t("home.solution.title").split(" modern education")[0]}
                    <span className="text-purple-600"> modern education</span>
                  </>
                ) : (
                  <>
                    {t("home.solution.title").substring(0, t("home.solution.title").lastIndexOf(" "))}
                    <span className="text-purple-600"> {t("home.solution.title").substring(t("home.solution.title").lastIndexOf(" "))}</span>
                  </>
                )}
              </>
            )}
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
            {t("home.solution.subtitle")}
          </p>
          
          {/* Benefits Grid responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{benefit.icon}</div>
                <div className="font-bold text-sm sm:text-base md:text-lg text-gray-900 mb-1">{benefit.title}</div>
                <div className="text-xs sm:text-sm text-gray-600">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardHeader className="text-center p-4 sm:p-6 md:p-8">
                  <div className={`mx-auto w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
                  <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action responsive */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 border-2 border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
              {t("home.solution.cta.title")}
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
              {t("home.solution.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                {t("home.solution.cta.startFree")}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-6 sm:px-8 md:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full">
                {t("home.solution.cta.learnMore")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffresSection;
