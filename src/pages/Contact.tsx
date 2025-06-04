
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Mail, Phone, Send, MessageCircle
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      <div className="fixed inset-0 opacity-5 bg-kente-stripes pointer-events-none"></div>
      
      <div className="container mx-auto py-8 px-4 md:px-6 relative z-10">
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
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3">
                        Nom complet *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                        required
                        className="h-14 text-lg border-2 border-orange-200 focus:border-orange-400 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-lg font-medium text-gray-700 mb-3">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                        className="h-14 text-lg border-2 border-orange-200 focus:border-orange-400 bg-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Sujet *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="L'objet de votre message"
                      required
                      className="h-14 text-lg border-2 border-orange-200 focus:border-orange-400 bg-white"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-3">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      required
                      rows={8}
                      className="text-lg border-2 border-orange-200 focus:border-orange-400 bg-white resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white py-4 text-xl font-medium h-16"
                  >
                    <Send className="w-6 h-6 mr-3" />
                    Envoyer le message
                  </Button>
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8 font-african">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 border-orange-200 bg-gradient-to-br from-white to-orange-50 relative overflow-hidden hover:shadow-african transition-all duration-300">
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${info.color}`}></div>
                    <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
                    
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center shadow-card flex-shrink-0`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-3 font-african">{info.title}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-gray-500" />
                              <span className="text-lg text-gray-700">{info.email}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-gray-500" />
                              <span className="text-lg text-gray-700">{info.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

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
