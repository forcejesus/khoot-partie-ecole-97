
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gamepad2, Users, BarChart3, Trophy, 
  Zap, Smartphone, Globe, Sparkles, ArrowRight, Star
} from "lucide-react";
import { motion } from "framer-motion";

const OffresSection = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Quiz interactifs en temps réel",
      description: "Créez des quiz captivants en quelques clics. Les élèves participent depuis leurs appareils et voient leurs résultats instantanément",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: Users,
      title: "Apprentissage collaboratif",
      description: "Encouragez la participation active de tous les élèves avec des défis en équipe et des activités de groupe interactives",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: BarChart3,
      title: "Suivi des performances",
      description: "Analysez les résultats en détail, identifiez les difficultés et adaptez votre pédagogie en conséquence",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Trophy,
      title: "Motivation par le jeu",
      description: "Classements, badges et défis pour maintenir l'engagement et la motivation des apprenants tout au long de l'année",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Installation rapide",
      description: "Déployez AKILI en moins de 5 minutes",
      stat: "5min"
    },
    {
      icon: Smartphone,
      title: "Multi-appareils",
      description: "Fonctionne sur smartphones, tablettes et ordinateurs",
      stat: "100%"
    },
    {
      icon: Globe,
      title: "Accès hors ligne",
      description: "Continuez à enseigner même sans internet",
      stat: "24/7"
    },
    {
      icon: Sparkles,
      title: "Interface intuitive",
      description: "Facile à utiliser pour tous les enseignants",
      stat: "0 formation"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-orange-50/30 to-yellow-50/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Solution complète</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-african leading-tight">
            AKILI : <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">L'excellence éducative</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal text-gray-700">pour l'ère moderne</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            La première plateforme d'apprentissage gamifiée conçue pour les écoles modernes. 
            Transformez vos cours traditionnels en expériences interactives qui captent l'attention et améliorent les résultats.
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
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <benefit.icon className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="font-bold text-2xl text-orange-600 mb-1">{benefit.stat}</div>
                <div className="font-semibold text-gray-900 mb-1">{benefit.title}</div>
                <div className="text-sm text-gray-600">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full bg-gradient-to-br ${feature.bgColor} border-2 border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden`}>
                <CardHeader className="text-center relative">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg relative z-10`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 font-african relative z-10">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-gray-700 text-center leading-relaxed">{feature.description}</p>
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
          className="text-center mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-orange-200 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-african">
              Prêt à révolutionner votre enseignement ?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment AKILI peut transformer l'expérience d'apprentissage dans votre établissement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl">
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
