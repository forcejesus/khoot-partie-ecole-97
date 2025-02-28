
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, ArrowRight, Star } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section avec nouvelle image de quiz */}
      <section className="relative h-[800px] flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-7xl font-bold mb-6 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              KHOOT ECES
            </h1>
            <p className="text-2xl mb-8 leading-relaxed animate-fadeIn opacity-90 text-purple-100">
              La plateforme d'apprentissage interactive qui révolutionne l'éducation numérique
            </p>
            <Button
              onClick={() => navigate("/login")}
              size="lg"
              className="bg-white/95 text-purple-600 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] text-lg px-8 py-6 rounded-xl"
            >
              Commencer l'aventure <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm transform -skew-y-2" />
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              Nos fonctionnalités
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Apprentissage interactif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Des quiz interactifs et des exercices pratiques pour un apprentissage engageant et efficace
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Target className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Suivi personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Suivez vos progrès et recevez des recommandations adaptées à votre niveau
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-8 w-8 text-indigo-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Travaillez en équipe et partagez vos connaissances avec d'autres apprenants
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section Prix avec prix en FCFA */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              Nos offres
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative group hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Gratuit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">0 FCFA</div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Accès aux quiz de base
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Statistiques limitées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Support communautaire
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Commencer
                </Button>
              </CardContent>
            </Card>

            <Card className="relative transform hover:-translate-y-2 transition-all duration-500 border-2 border-purple-500 shadow-xl hover:shadow-2xl bg-white z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
                Populaire
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">19 000 FCFA</div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Tous les quiz
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Statistiques avancées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Support prioritaire
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Personnalisation
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Choisir
                </Button>
              </CardContent>
            </Card>

            <Card className="relative group hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Entreprise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sur mesure
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Solution personnalisée
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Support dédié
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    Formation sur site
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-5 w-5 text-purple-500 mr-2" />
                    API access
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity">
                  Contactez-nous
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer avec informations de Brazzaville */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                KHOOT ECES
              </h3>
              <p className="text-gray-400 leading-relaxed">
                La plateforme d'apprentissage interactive qui rend l'éducation accessible et engageante pour tous
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 hover:text-white transition-colors">
                  contact@khoot-eces.cg
                </li>
                <li className="text-gray-400 hover:text-white transition-colors">
                  +242 06 956 53 90
                </li>
                <li className="text-gray-400 hover:text-white transition-colors">
                  Avenue de l'Indépendance
                </li>
                <li className="text-gray-400 hover:text-white transition-colors">
                  Brazzaville, République du Congo
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>© 2024 KHOOT ECES. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
