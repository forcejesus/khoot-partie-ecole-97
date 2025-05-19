
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Message envoyé avec succès !", {
        description: "Nous vous répondrons dans les plus brefs délais."
      });
      
      // Reset form after showing success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contact@khoot-eces.cg",
      link: "mailto:contact@khoot-eces.cg"
    },
    {
      icon: Phone,
      title: "Téléphone",
      info: "+242 06 956 53 90",
      link: "tel:+24206956390"
    },
    {
      icon: MapPin,
      title: "Adresse",
      info: "Avenue de l'Indépendance, Brazzaville",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block mb-6">
            Contactez-nous
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question, une suggestion ou une demande spécifique ? Notre équipe est là pour vous aider.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Le sujet de votre message"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Votre message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                disabled={isSubmitting || isSuccess}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </span>
                ) : isSuccess ? (
                  <span className="flex items-center">
                    <Check className="mr-2 h-4 w-4" />
                    Message envoyé
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Informations de contact</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <item.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-md font-medium text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-grow">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Horaires d'ouverture</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="font-medium">Lundi - Vendredi:</span>
                  <span className="text-gray-600">8h00 - 18h00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Samedi:</span>
                  <span className="text-gray-600">9h00 - 15h00</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Dimanche:</span>
                  <span className="text-gray-600">Fermé</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-medium mb-2">Réponse garantie</h3>
                <p className="text-gray-600">Nous nous engageons à répondre à toutes vos demandes dans un délai de 24 heures ouvrables.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
