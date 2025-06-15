
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
    { icon: "🌍", title: t("home.solution.benefits.offline"), description: t("home.solution.benefits.offlineDesc") },
    { icon: "✨", title: t("home.solution.benefits.intuitive"), description: t("home.solution.benefits.intuitiveDesc") }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
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
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t("home.solution.subtitle")}
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <div className="font-bold text-lg text-gray-900 mb-1">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-3xl overflow-hidden">
                <CardHeader className="text-center p-8">
                  <div className={`mx-auto w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg text-3xl group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-3xl p-12 border-2 border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t("home.solution.cta.title")}
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t("home.solution.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                {t("home.solution.cta.startFree")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-10 py-6 text-lg font-semibold rounded-full">
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
