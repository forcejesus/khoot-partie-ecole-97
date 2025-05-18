
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Target, ArrowRight, Star, Sparkles, Award, Clock, Shield, Check, LucideIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  const handleDemoClick = () => {
    toast.success("Découvrez notre démo interactive !", {
      description: "Une expérience d'apprentissage révolutionnaire"
    });
    navigate("/login");
  };

  const testimonials = [
    {
      name: "Prof. Makosso",
      role: "Enseignant d'informatique",
      content: "KHOOT ECES a transformé ma façon d'enseigner. Mes étudiants sont plus engagés que jamais !",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Clarisse M.",
      role: "Étudiante en économie",
      content: "Apprendre n'a jamais été aussi amusant. Je me retrouve à réviser volontairement avec KHOOT !",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Organisation ECES",
      role: "Centre de formation",
      content: "Cette plateforme nous permet de digitaliser notre offre de formation avec efficacité.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Apprentissage gamifié",
      description: "Transformez les leçons en jeux captivants qui motivent vos apprenants"
    },
    {
      icon: Award,
      title: "Système de récompenses",
      description: "Encouragez la participation avec des badges et classements en temps réel"
    },
    {
      icon: Clock,
      title: "Sessions chronométrées",
      description: "Créez une ambiance dynamique avec des défis limités dans le temps"
    },
    {
      icon: Shield,
      title: "Sécurité des données",
      description: "Protection des informations personnelles et des résultats d'apprentissage"
    }
  ];

  const StatCard = ({ number, text, color }: { number: string; text: string; color: string }) => (
    <div className={`bg-gradient-to-br ${color} p-8 rounded-2xl flex flex-col items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300`}>
      <h3 className="text-4xl font-bold text-white mb-2">{number}</h3>
      <p className="text-white text-center">{text}</p>
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
    <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          <Icon className="h-8 w-8 text-purple-600" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section amélioré */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000')] opacity-20 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fadeIn">
              <h1 className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                KHOOT ECES
              </h1>
              <div className="flex justify-center mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
              <p className="text-2xl mb-8 leading-relaxed opacity-90 text-purple-100 max-w-3xl mx-auto">
                La plateforme d'apprentissage interactive qui révolutionne l'éducation numérique en Afrique
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/login")}
                size="lg"
                className="bg-white/95 text-purple-600 hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)] text-lg px-8 py-6 rounded-xl"
              >
                Commencer l'aventure <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={handleDemoClick}
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
              >
                Voir la démo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-white transform -skew-y-2" />
      </section>

      {/* Section Pourquoi KHOOT */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              Pourquoi choisir KHOOT ECES ?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              La nouvelle génération d'outils pédagogiques interactifs pour l'Afrique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              Notre impact
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="5000+" text="Apprenants actifs" color="from-purple-500 to-indigo-700" />
            <StatCard number="100+" text="Établissements partenaires" color="from-pink-500 to-rose-700" />
            <StatCard number="250+" text="Formateurs certifiés" color="from-blue-500 to-cyan-700" />
            <StatCard number="98%" text="Taux de satisfaction" color="from-green-500 to-emerald-700" />
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="py-32 relative overflow-hidden bg-gray-50">
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

      {/* Section Témoignages */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block">
              Témoignages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card className="bg-white/90 border-0 shadow-xl overflow-hidden">
                        <CardContent className="p-8">
                          <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                              <img 
                                src={testimonial.avatar} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-lg italic mb-4 text-gray-700">"{testimonial.content}"</p>
                              <h4 className="font-bold text-xl text-gray-900">{testimonial.name}</h4>
                              <p className="text-gray-500">{testimonial.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="relative -left-0 h-10 w-10 rounded-full bg-white border border-gray-200" />
                <CarouselNext className="relative -right-0 h-10 w-10 rounded-full bg-white border border-gray-200" />
              </div>
            </Carousel>
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
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Accès aux quiz de base
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Statistiques limitées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
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
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Tous les quiz
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Statistiques avancées
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Support prioritaire
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
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
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Solution personnalisée
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Support dédié
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
                    Formation sur site
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Check className="h-5 w-5 text-purple-500 mr-2" />
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

      {/* Appel à l'action */}
      <section className="py-20 bg-gradient-to-br from-[#8B5CF6] via-[#D946EF] to-[#EC4899] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=2000')] opacity-10 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Prêt à révolutionner votre façon d'apprendre?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12">
            Rejoignez des milliers d'apprenants et d'enseignants qui ont déjà transformé leur expérience éducative.
          </p>
          <div className="flex justify-center">
            <Button 
              onClick={() => navigate("/login")}
              size="lg" 
              className="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg text-lg px-10 py-6 rounded-xl"
            >
              Commencer dès maintenant <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
