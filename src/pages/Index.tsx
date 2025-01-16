import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fadeIn">
            Bienvenue sur KHOOT ECES
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            La plateforme d'apprentissage interactive qui révolutionne l'éducation numérique
          </p>
          <Button
            onClick={() => navigate("/login")}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            Se connecter
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos fonctionnalités</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Apprentissage interactif</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Des quiz interactifs et des exercices pratiques pour un apprentissage engageant
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Suivi personnalisé</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suivez vos progrès et recevez des recommandations personnalisées
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Travaillez en équipe et partagez vos connaissances
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos offres</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Gratuit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">0€</div>
                <ul className="space-y-2">
                  <li>✓ Accès aux quiz de base</li>
                  <li>✓ Statistiques limitées</li>
                  <li>✓ Support communautaire</li>
                </ul>
                <Button className="w-full mt-6">Commencer</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-purple-500 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Pro</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">29€</div>
                <ul className="space-y-2">
                  <li>✓ Tous les quiz</li>
                  <li>✓ Statistiques avancées</li>
                  <li>✓ Support prioritaire</li>
                  <li>✓ Personnalisation</li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600">Choisir</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Entreprise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-4">Sur mesure</div>
                <ul className="space-y-2">
                  <li>✓ Solution personnalisée</li>
                  <li>✓ Support dédié</li>
                  <li>✓ Formation sur site</li>
                  <li>✓ API access</li>
                </ul>
                <Button className="w-full mt-6">Contactez-nous</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Nom</label>
                <Input placeholder="Votre nom" />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <Input type="email" placeholder="votre@email.com" />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <Textarea placeholder="Votre message" className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KHOOT ECES</h3>
              <p className="text-gray-400">
                La plateforme d'apprentissage interactive pour tous
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Accueil</li>
                <li>À propos</li>
                <li>Fonctionnalités</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contact@khoot-eces.fr</li>
                <li>01 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 KHOOT ECES. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;