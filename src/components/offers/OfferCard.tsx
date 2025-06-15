
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface OfferCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  bgGradient: string;
  isPopular?: boolean;
  features: string[];
  index: number;
}

const OfferCard = ({
  name,
  price,
  period,
  description,
  icon: Icon,
  color,
  borderColor,
  bgGradient,
  isPopular = false,
  features,
  index
}: OfferCardProps) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInVariants}
      transition={{ delay: index * 0.2 }}
      className="h-full"
    >
      <Card className={`relative group hover:shadow-african transition-all duration-500 border-2 ${borderColor} h-full bg-gradient-to-br ${bgGradient} ${isPopular ? 'transform scale-105 shadow-xl' : ''}`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-1 rounded-full text-sm font-semibold">
            Populaire
          </div>
        )}
        
        <div className="absolute inset-0 opacity-5 bg-tribal-dots"></div>
        
        <CardHeader className="text-center relative z-10">
          <div className={`mx-auto w-16 h-16 mb-4 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-card`}>
            <Icon className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800 font-african">{name}</CardTitle>
          <p className="text-gray-600 mt-2">{description}</p>
        </CardHeader>
        
        <CardContent className="relative z-10">
          <div className="text-center mb-8">
            <div className={`text-4xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {price}
            </div>
            <span className="text-gray-500">{period}</span>
          </div>
          
          <ul className="space-y-3 mb-8">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center text-gray-600">
                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/inscription-ecoles">
            <Button className={`w-full bg-gradient-to-r ${color} hover:opacity-90 transition-all text-white font-medium py-3`}>
              {name === "Excellence" ? "Nous contacter" : "Choisir cette offre"}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default OfferCard;
