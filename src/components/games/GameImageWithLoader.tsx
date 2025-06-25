
import React, { useState, useEffect } from "react";
import { Loader2, Gamepad2 } from "lucide-react";
import { config } from "@/config/hosts";

interface GameImageWithLoaderProps {
  src: string | null;
  alt: string;
  fallbackSrc: string;
  className?: string;
}

export const GameImageWithLoader = ({ src, alt, fallbackSrc, className = "relative h-48 rounded-lg overflow-hidden" }: GameImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    
    if (src) {
      // Construire l'URL complète de l'image
      let imageUrl = src;
      
      // Si l'image commence par "public/", on l'enlève et on ajoute le host
      if (src.startsWith('public/')) {
        const cleanPath = src.substring(7); // Enlever "public/"
        imageUrl = `${config.api.baseUrl}/${cleanPath}`;
      }
      // Si l'image ne commence pas par http, on ajoute le host
      else if (!src.startsWith('http')) {
        imageUrl = `${config.api.baseUrl}/${src}`;
      }
      
      console.log("URL de l'image construite:", imageUrl);
      setImageSrc(imageUrl);
    } else {
      setImageSrc(fallbackSrc);
      setIsLoading(false);
    }
  }, [src, fallbackSrc]);

  const handleImageLoad = () => {
    console.log("Image chargée avec succès:", imageSrc);
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    console.log("Erreur de chargement image:", imageSrc);
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallbackSrc);
  };

  return (
    <div className={className}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center z-10 rounded-lg">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin text-orange-600 mx-auto mb-2" />
            <p className="text-xs text-orange-700 font-medium">Chargement...</p>
          </div>
        </div>
      )}
      
      {!src && !isLoading && (
        <div className="w-full h-full bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex flex-col items-center justify-center text-white">
          <Gamepad2 className="h-12 w-12 mb-2" />
          <p className="text-sm font-medium">Jeu sans image</p>
        </div>
      )}
      
      {(src || hasError) && (
        <>
          <img
            src={imageSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isLoading ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </>
      )}
    </div>
  );
};
