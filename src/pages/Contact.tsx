
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, Phone, MapPin, Clock, Send, 
  MessageCircle, Users, Award 
} from "lucide-react";
import { motion } from "framer-motion";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic pour envoyer le formulaire
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@akili-education.cg",
      description: "Réponse sous 24h",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+242 06 956 53 90",
      description: "Lun-Ven 8h-18h",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Avenue de l'Indépendance",
      description: "Brazzaville, République du Congo",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "8h00 - 18h00",
      description: "Du Lundi au Vendredi",
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const reasons = [
    {
      icon: MessageCircle,
      title: "Support technique",
      description: "Aide avec la plateforme, bugs, questions techniques"
    },
    {
      icon: Users,
      title: "Partenariats",
      description: "Collaboration avec votre école ou institution"
    },
    {
      icon: Award,
      title: "Formations",
      description: "Sessions de formation personnalisées pour vos équipes"
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
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="w-8 h-2 bg-gradient-to-l from-african-gold to-african-ochre rounded-full"></div>
              <div className="w-6 h-6 bg-african-terracotta clip-path-kente-diamond"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent font-african mb-4">
            Contactez-nous
          </h1>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 mx-auto rounded-full shadow-african" />
          
          <p className="text-xl text-gray-700 mt-8 max-w-3xl mx-auto font-medium">
            Nous sommes là pour vous accompagner dans votre transformation éducative. 
            Partageons ensemble la vision d'une Afrique éduquée et connectée !
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Formulaire de contact */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
          >
            <Card className="border-2 border-orange-200 bg-white/95 backdrop-blur-sm relative overflow-hidden shadow-african">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
              <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold text-gray-800 font-african flex items-center gap-3">
                  <Send className="w-6 h-6 text-orange-600" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="border-2 border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="L'objet de votre message"
                      required
                      className="border-2 border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      required
                      rows={6}
                      className="border-2 border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white py-3 text-lg font-medium"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
                
                {/* Ornement décoratif */}
                <div className="flex justify-center mt-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-african-gold rounded-full"></div>
                    <div className="w-4 h-1 bg-african-kente rounded-full"></div>
                    <div className="w-3 h-3 bg-african-terracotta rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-african">
                Nos coordonnées
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden hover:shadow-african transition-all duration-300">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${info.color}`}></div>
                    <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
                    
                    <CardContent className="p-4 relative z-10">
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center shadow-card flex-shrink-0`}>
                          <info.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800">{info.title}</h3>
                          <p className="text-gray-600 font-medium">{info.content}</p>
                          <p className="text-sm text-gray-500">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-african">
                Comment pouvons-nous vous aider ?
              </h2>
              
              <div className="space-y-4">
                {reasons.map((reason, index) => (
                  <Card key={index} className="border border-orange-200 bg-gradient-to-r from-white to-orange-50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                          <reason.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 mb-1">{reason.title}</h3>
                          <p className="text-gray-600 text-sm">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Citation motivante */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center mt-16 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 rounded-2xl p-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-tribal-dots"></div>
          
          <div className="relative z-10">
            <p className="text-2xl text-white italic font-medium mb-4">
              "Seuls, nous pouvons faire si peu ; ensemble, nous pouvons faire tant."
            </p>
            <p className="text-yellow-200 font-medium">
              - Helen Keller
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
