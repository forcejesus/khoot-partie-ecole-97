
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown, Users, Zap, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";

const Offres = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const offers = [
    {
      name: "Découverte",
      price: "25 000 FCFA",
      period: "/mois",
      description: "Pour les écoles qui débutent leur transformation numérique",
      icon: Users,
      color: "from-orange-500 to-red-500",
      borderColor: "border-orange-200",
      bgGradient: "from-white to-orange-50",
      features: [
        "Jusqu'à 50 apprenants",
        "5 jeux éducatifs de base",
        "Tableau de bord simple",
        "Support par email",
        "Formation en ligne",
        "Rapports mensuels"
      ]
    },
    {
      name: "Sagesse",
      price: "50 000 FCFA", 
      period: "/mois",
      description: "L'offre la plus populaire pour une croissance équilibrée",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
      borderColor: "border-yellow-400",
      bgGradient: "from-yellow-50 to-orange-50",
      isPopular: true,
      features: [
        "Jusqu'à 200 apprenants",
        "Tous les jeux éducatifs",
        "Analytiques avancées",
        "Support prioritaire",
        "Formation personnalisée",
        "Rapports en temps réel",
        "Personnalisation complète",
        "Intégration API"
      ]
    },
    {
      name: "Excellence",
      price: "Sur mesure",
      period: "",
      description: "Solution enterprise pour les grandes institutions",
      icon: Crown,
      color: "from-green-500 to-emerald-500",
      borderColor: "border-green-200",
      bgGradient: "from-white to-green-50",
      features: [
        "Apprenants illimités",
        "Jeux personnalisés",
        "IA prédictive avancée",
        "Support dédié 24/7",
        "Formation sur site",
        "Rapports personnalisés",
        "White-label complet",
        "SLA garantie"
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Performance optimale",
      description: "Plateforme rapide et réactive adaptée aux connexions africaines"
    },
    {
      icon: Shield,
      title: "Sécurité robuste",
      description: "Protection des données conforme aux standards internationaux"
    },
    {
      icon: Target,
      title: "Approche pédagogique",
      description: "Méthodes d'apprentissage inspirées des traditions africaines"
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
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            Nos Offres AKILI
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto rounded-full shadow-african" />
          
          <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium">
            Choisissez l'offre qui correspond à vos besoins et libérez le potentiel éducatif de votre institution
          </p>
        </motion.div>

        {/* Grille des offres */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
              transition={{ delay: index * 0.2 }}
              className="h-full"
            >
              <Card className={`relative group hover:shadow-african transition-all duration-500 border-2 ${offer.borderColor} h-full bg-gradient-to-br ${offer.bgGradient} ${offer.isPopular ? 'transform scale-105 shadow-xl' : ''}`}>
                {offer.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
                    Populaire
                  </div>
                )}
                
                {/* Bordure colorée africaine */}
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${offer.color}`}></div>
                
                {/* Motif de fond */}
                <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
                
                <CardHeader className="text-center relative z-10">
                  <div className={`mx-auto w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center shadow-card`}>
                    <offer.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-800 font-african">{offer.name}</CardTitle>
                  <p className="text-gray-600 mt-2">{offer.description}</p>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="text-center mb-8">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${offer.color} bg-clip-text text-transparent`}>
                      {offer.price}
                    </div>
                    <span className="text-gray-500">{offer.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className={`w-full bg-gradient-to-r ${offer.color} hover:opacity-90 transition-all text-white font-medium py-3`}>
                    {offer.name === "Excellence" ? "Nous contacter" : "Choisir cette offre"}
                  </Button>
                  
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
            </motion.div>
          ))}
        </div>

        {/* Fonctionnalités additionnelles */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-african border-2 border-orange-200 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
          <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african">
              Pourquoi choisir AKILI ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-orange-100 to-red-50 flex items-center justify-center shadow-card">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-african">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mt-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-african">
            Prêt à transformer votre institution ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez les centaines d'écoles qui font confiance à AKILI pour révolutionner l'apprentissage en Afrique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-4">
              Demander une démo
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4">
              Nous contacter
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Offres;
