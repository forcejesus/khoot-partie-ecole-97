
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gamepad2, Users, BarChart3, Trophy, 
  Zap, Smartphone, Globe, Sparkles, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const OffresSection = () => {
  const features = [
    {
      icon: "🎮",
      title: "Quiz interactifs",
      description: "Créez des quiz captivants en quelques clics avec des questions variées et des résultats en temps réel",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "👥",
      title: "Collaboration",
      description: "Encouragez le travail d'équipe avec des défis collaboratifs et des activités de groupe dynamiques",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📊",
      title: "Analyses",
      description: "Obtenez des insights détaillés sur les performances et adaptez votre pédagogie en conséquence",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏆",
      title: "Gamification",
      description: "Motivez avec des badges, classements et récompenses pour maintenir l'engagement toute l'année",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    { icon: "⚡", title: "5 minutes", description: "Pour démarrer" },
    { icon: "📱", title: "Multi-appareils", description: "Partout, tout le temps" },
    { icon: "🌍", title: "Hors ligne", description: "Même sans internet" },
    { icon: "✨", title: "Zéro formation", description: "Interface intuitive" }
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
            La solution complète pour 
            <span className="text-purple-600"> l'éducation moderne</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Tout ce dont vous avez besoin pour transformer vos cours en expériences 
            interactives qui captent l'attention et améliorent les résultats
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
              Prêt à révolutionner votre enseignement ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment AKILI peut transformer l'expérience d'apprentissage dans votre établissement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-10 py-6 text-lg font-semibold rounded-full">
                En savoir plus
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffresSection;
