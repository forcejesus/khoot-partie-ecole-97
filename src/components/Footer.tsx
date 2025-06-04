
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
  Instagram
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-tribal-dots opacity-10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <School className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-2xl font-bold font-african">AKILI</span>
            </div>
            <p className="text-gray-300 mb-6 font-cairo">
              La plateforme d'apprentissage interactif qui transforme l'éducation en Afrique. 
              Engagez vos élèves avec des quiz et jeux éducatifs innovants.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-orange-500 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500 font-african">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors font-cairo">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/offres" className="text-gray-300 hover:text-orange-500 transition-colors font-cairo">
                  Nos offres
                </Link>
              </li>
              <li>
                <Link to="/solution" className="text-gray-300 hover:text-orange-500 transition-colors font-cairo">
                  Notre Solution
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors font-cairo">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors font-cairo">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500 font-african">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300 font-cairo">Quiz interactifs</span>
              </li>
              <li>
                <span className="text-gray-300 font-cairo">Jeux éducatifs</span>
              </li>
              <li>
                <span className="text-gray-300 font-cairo">Suivi des performances</span>
              </li>
              <li>
                <span className="text-gray-300 font-cairo">Formation des enseignants</span>
              </li>
              <li>
                <span className="text-gray-300 font-cairo">Support technique</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-orange-500 font-african">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-gray-300 font-cairo">contact@akili.education</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-orange-500" />
                <span className="text-gray-300 font-cairo">+221 77 123 45 67</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-orange-500 mt-1" />
                <span className="text-gray-300 font-cairo">
                  Dakar, Sénégal<br />
                  Casablanca, Maroc<br />
                  Abidjan, Côte d'Ivoire
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-cairo">
            © 2024 AKILI. Tous droits réservés. Révolutionnons l'éducation ensemble.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
