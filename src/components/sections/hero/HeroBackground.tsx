
import React from "react";
import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <>
      {/* Gradient de base amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-900" />
      
      {/* Overlay avec motif géométrique */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>
      
      {/* Éléments flottants améliorés avec plus de dynamisme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grandes bulles avec gradient */}
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-400/30 to-red-400/20 rounded-full blur-2xl"
        />
        
        <motion.div 
          animate={{ 
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -15, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-orange-400/20 rounded-full blur-2xl"
        />
        
        <motion.div 
          animate={{ 
            y: [0, -35, 0],
            x: [0, 30, 0],
            rotate: [0, 20, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute bottom-40 left-1/4 w-28 h-28 bg-gradient-to-br from-green-400/30 to-blue-400/20 rounded-full blur-2xl"
        />

        {/* Petites particules flottantes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Formes géométriques */}
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 border-2 border-white/20 rotate-45"
          animate={{ 
            rotate: [45, 405],
            borderColor: ["rgba(255,255,255,0.2)", "rgba(251,191,36,0.5)", "rgba(255,255,255,0.2)"]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 4, repeat: Infinity }
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/2 w-12 h-12 border-2 border-white/20"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          animate={{ 
            rotate: [0, 360],
            borderColor: ["rgba(255,255,255,0.2)", "rgba(239,68,68,0.5)", "rgba(255,255,255,0.2)"]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 3, repeat: Infinity }
          }}
        />
      </div>

      {/* Effet de vignette subtil */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
    </>
  );
};

export default HeroBackground;
