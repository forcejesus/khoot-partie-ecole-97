
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OffersCallToAction = () => {
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
      className="text-center mt-16"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 font-african">
        Prêt à transformer votre institution ?
      </h2>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Rejoignez les centaines d'écoles qui font confiance à AKILI pour révolutionner l'apprentissage en Afrique.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/inscription-ecoles">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:from-orange-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-4">
            Prennez un abonnement
          </Button>
        </Link>
        <Link to="/contact">
          <Button variant="outline" size="lg" className="border-2 border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4">
            Nous contacter
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default OffersCallToAction;
