
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
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
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      className="max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center font-poppins">
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
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
                    <info.icon className="w-8 h-8 text-white" />
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
  );
};

export default ContactInfo;
