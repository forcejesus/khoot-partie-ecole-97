import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, Phone, Send, MessageCircle, Sparkles, HelpCircle
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Support technique",
      email: "support@akili-education.cg",
      phone: "+242 06 956 53 90",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Partenariats",
      email: "partenaires@akili-education.cg", 
      phone: "+242 06 956 53 91",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Formations",
      email: "formations@akili-education.cg",
      phone: "+242 06 956 53 92",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqData = [
    {
      question: "Qu'est-ce qu'AKILI ?",
      answer: "AKILI est une plateforme d'apprentissage interactif qui transforme l'éducation en Afrique grâce à des quiz et jeux éducatifs innovants. Notre mission est de faire aimer l'apprentissage aux jeunes en réinventant l'usage des écrans pour le bien."
    },
    {
      question: "Comment fonctionne la plateforme AKILI ?",
      answer: "AKILI propose des contenus éducatifs gamifiés adaptés aux programmes scolaires africains. Les enseignants peuvent créer des quiz interactifs, suivre les progrès des élèves et utiliser des outils pédagogiques modernes pour enrichir leurs cours."
    },
    {
      question: "Quels sont les tarifs d'AKILI ?",
      answer: "Nous proposons plusieurs formules adaptées aux besoins des établissements : une offre Essentiels à partir de 15 000 FCFA/mois, une offre Avancée à 25 000 FCFA/mois, et une offre Premium à 40 000 FCFA/mois. Contactez-nous pour un devis personnalisé."
    },
    {
      question: "AKILI est-il disponible hors ligne ?",
      answer: "Oui, AKILI propose des fonctionnalités hors ligne pour garantir la continuité pédagogique même dans les zones avec une connectivité limitée. Les contenus peuvent être synchronisés dès que la connexion est rétablie."
    },
    {
      question: "Comment puis-je former mes enseignants à AKILI ?",
      answer: "Nous proposons des formations complètes pour accompagner vos équipes pédagogiques. Nos formateurs certifiés assurent la prise en main de la plateforme et partagent les meilleures pratiques d'enseignement numérique."
    },
    {
      question: "Dans quels pays AKILI est-il disponible ?",
      answer: "AKILI est actuellement déployé dans plusieurs pays d'Afrique subsaharienne. Nous nous adaptons aux programmes scolaires locaux et aux langues d'enseignement de chaque région."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ea580c%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none opacity-40"></div>
      
      <div className="container mx-auto py-12 px-4 md:px-6 relative z-10">
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
            <span className="text-sm font-medium text-gray-700 font-inter">Restons connectés</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight font-poppins">
            <motion.span 
              className="bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent block mb-2"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Contactez-nous
            </motion.span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mt-8 max-w-4xl mx-auto font-medium leading-relaxed font-inter">
            Nous sommes là pour vous accompagner dans votre transformation éducative. 
            Partageons ensemble la vision d'une Afrique éduquée et connectée !
          </p>

          {/* Ornements décoratifs */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
              <div className="w-8 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-orange-500 to-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <Card className="border border-gray-200 bg-white/95 backdrop-blur-sm relative overflow-hidden shadow-2xl rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 font-poppins flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3 font-poppins">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="h-14 text-lg border-2 border-gray-200 focus:border-orange-400 bg-white rounded-xl font-inter"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3 font-poppins">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="h-14 text-lg border-2 border-gray-200 focus:border-orange-400 bg-white rounded-xl font-inter"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3 font-poppins">
                      Sujet *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="L'objet de votre message"
                      required
                      className="h-14 text-lg border-2 border-gray-200 focus:border-orange-400 bg-white rounded-xl font-inter"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3 font-poppins">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      required
                      rows={8}
                      className="text-lg border-2 border-gray-200 focus:border-orange-400 bg-white resize-none rounded-xl font-inter"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white py-6 text-xl font-medium h-16 rounded-xl font-poppins"
                    >
                      <Send className="w-6 h-6 mr-3" />
                      Envoyer le message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-poppins">
                Nos coordonnées
              </h2>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <Card className="border border-gray-200 bg-white/95 backdrop-blur-sm relative overflow-hidden hover:shadow-xl transition-all duration-300 rounded-2xl">
                      <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${info.color}`}></div>
                      
                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
                            <info.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">{info.title}</h3>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-gray-500" />
                                <span className="text-lg text-gray-700 font-inter">{info.email}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-gray-500" />
                                <span className="text-lg text-gray-700 font-inter">{info.phone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Section FAQ */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-200 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <HelpCircle className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700 font-inter">Questions fréquentes</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-poppins">
              FAQ
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Trouvez rapidement les réponses à vos questions les plus courantes
            </p>
          </div>

          <Card className="border border-gray-200 bg-white/95 backdrop-blur-sm shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:text-orange-600 font-poppins">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed font-inter">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mt-20 bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 rounded-3xl p-10 relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <motion.div 
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{ backgroundSize: "200% 100%" }}
          />
          
          <div className="relative z-10">
            <motion.p 
              className="text-2xl md:text-3xl text-white italic font-medium mb-4 font-inter"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 30px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              "Seuls, nous pouvons faire si peu ; ensemble, nous pouvons faire tant."
            </motion.p>
            <p className="text-yellow-200 font-medium text-lg font-inter">
              - Helen Keller
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
