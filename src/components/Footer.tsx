
import React from "react";
import { Link } from "react-router-dom";
import { 
  School, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Motifs de fond modernes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative">
                <School className="h-10 w-10 text-orange-500" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
              </div>
              <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                AKILI
              </span>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">
              La plateforme d'apprentissage interactif qui transforme l'éducation en Afrique. 
              Engagez vos élèves avec des quiz et jeux éducatifs innovants.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-6">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Instagram, href: "#", label: "Instagram" }
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="group relative p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/", label: "Accueil" },
                { to: "/offres", label: "Nos offres" },
                { to: "/solution", label: "Notre Solution" },
                { to: "/contact", label: "Contact" },
                { to: "/contact#faq", label: "FAQ" }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="group flex items-center text-gray-300 hover:text-orange-400 transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
              Contact
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="flex-shrink-0 p-2 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                    contact@akili.education
                  </span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 p-2 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                  <span className="text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                    +221 77 123 45 67
                  </span>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="flex-shrink-0 p-2 bg-orange-500/20 rounded-lg mr-4 group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Bureaux</p>
                  <span className="text-gray-300 leading-relaxed">
                    Dakar, Sénégal<br />
                    Casablanca, Maroc<br />
                    Abidjan, Côte d'Ivoire
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright avec design moderne */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 AKILI. Tous droits réservés.
              </p>
              <Heart className="h-4 w-4 text-red-500 mx-2 animate-pulse" />
              <p className="text-gray-400 text-sm">
                Révolutionnons l'éducation ensemble.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
