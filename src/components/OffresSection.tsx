
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gamepad2, Users, BarChart3, Trophy, 
  Zap, Smartphone, Globe, Sparkles 
} from "lucide-react";
import { motion } from "framer-motion";

const OffresSection = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Quiz interactifs en temps réel",
      description: "Créez des quiz captivants en quelques clics. Les élèves participent depuis leurs appareils et voient leurs résultats instantanément",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Apprentissage collaboratif",
      description: "Encouragez la participation active de tous les élèves avec des défis en équipe et des activités de groupe interactives",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Suivi des performances",
      description: "Analysez les résultats en détail, identifiez les difficultés et adaptez votre pédagogie en conséquence",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Motivation par le jeu",
      description: "Classements, badges et défis pour maintenir l'engagement et la motivation des apprenants tout au long de l'année",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Installation rapide",
      description: "Déployez AKILI en moins de 5 minutes"
    },
    {
      icon: Smartphone,
      title: "Multi-appareils",
      description: "Fonctionne sur smartphones, tablettes et ordinateurs"
    },
    {
      icon: Globe,
      title: "Accès hors ligne",
      description: "Continuez à enseigner même sans internet"
    },
    {
      icon: Sparkles,
      title: "Interface intuitive",
      description: "Facile à utiliser pour tous les enseignants"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-tribal-dots opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <Gamepad2 className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-african">
            AKILI : <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">L'excellence éducative interactive</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            La première plateforme d'apprentissage gamifiée conçue pour les écoles modernes. 
            Transformez vos cours traditionnels en expériences interactives qui captent l'attention et améliorent les résultats.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
                <benefit.icon className="w-5 h-5 text-orange-600" />
                <span className="font-medium text-gray-700">{benefit.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-2 border-orange-100 hover:shadow-african transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-800 font-african">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-african">
            Prêt à moderniser votre pédagogie ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez plus de 500 écoles qui ont déjà adopté AKILI pour améliorer l'engagement de leurs élèves et optimiser leurs résultats scolaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium">
              Commencer gratuitement
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium">
              En savoir plus
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OffresSection;
