
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Plus, Loader2, ArrowLeft, ArrowRight, GraduationCap, Lock } from "lucide-react";
import { enseignantService, CreateEnseignantRequest } from "@/services/enseignantService";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AddEnseignantDialog = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CreateEnseignantRequest>({
    nom: "",
    prenom: "",
    genre: "",
    statut: "actif",
    phone: "",
    email: "",
    adresse: "",
    pays: "6707bfa699095a5b8d491bf5",
    role: "enseignant",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (field: keyof CreateEnseignantRequest, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateStep1 = () => {
    return formData.nom && formData.prenom && formData.genre && formData.phone && 
           formData.email && formData.adresse;
  };

  const validateStep2 = () => {
    return formData.password && confirmPassword && formData.password === confirmPassword;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    } else {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
      });
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await enseignantService.createEnseignant(formData);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Enseignant ajouté avec succès",
        });
        setOpen(false);
        setCurrentStep(1);
        setFormData({
          nom: "",
          prenom: "",
          genre: "",
          statut: "actif",
          phone: "",
          email: "",
          adresse: "",
          pays: "6707bfa699095a5b8d491bf5",
          role: "enseignant",
          password: "",
        });
        setConfirmPassword("");
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de l'ajout:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible d'ajouter l'enseignant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      nom: "",
      prenom: "",
      genre: "",
      statut: "actif",
      phone: "",
      email: "",
      adresse: "",
      pays: "6707bfa699095a5b8d491bf5",
      role: "enseignant",
      password: "",
    });
    setConfirmPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={(newOpen) => {
      setOpen(newOpen);
      if (!newOpen) {
        resetForm();
      }
    }}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un enseignant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
            {currentStep === 1 ? (
              <GraduationCap className="h-8 w-8 text-white" />
            ) : (
              <Lock className="h-8 w-8 text-white" />
            )}
          </div>
          <DialogTitle className="text-2xl font-bold text-orange-700">
            Ajouter un nouvel enseignant
          </DialogTitle>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 1 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>1</div>
            <div className={`w-12 h-1 ${currentStep >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentStep >= 2 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>2</div>
          </div>
          <p className="text-gray-600 mt-2">
            {currentStep === 1 ? "Informations personnelles et professionnelles" : "Configuration du mot de passe"}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="px-0 pb-4">
                <CardTitle className="text-lg text-orange-700">Étape 1 : Informations générales</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-sm font-semibold text-gray-700">Nom de famille *</Label>
                    <Input
                      id="nom"
                      value={formData.nom}
                      onChange={(e) => handleInputChange('nom', e.target.value)}
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="Nom de famille"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom" className="text-sm font-semibold text-gray-700">Prénom *</Label>
                    <Input
                      id="prenom"
                      value={formData.prenom}
                      onChange={(e) => handleInputChange('prenom', e.target.value)}
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="Prénom"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="genre" className="text-sm font-semibold text-gray-700">Genre *</Label>
                  <Select value={formData.genre} onValueChange={(value) => handleInputChange('genre', value)}>
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80">
                      <SelectValue placeholder="Sélectionnez le genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Masculin">Masculin</SelectItem>
                      <SelectItem value="Féminin">Féminin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Téléphone *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="Numéro de téléphone"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                      placeholder="Adresse email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adresse" className="text-sm font-semibold text-gray-700">Adresse *</Label>
                  <Input
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => handleInputChange('adresse', e.target.value)}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                    placeholder="Adresse complète"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="statut" className="text-sm font-sem ibold text-gray-700">Statut</Label>
                  <Select value={formData.statut} onValueChange={(value) => handleInputChange('statut', value)}>
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="actif">Actif</SelectItem>
                      <SelectItem value="inactif">Inactif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex justify-end pt-6 border-t border-orange-200">
                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  >
                    Suivant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card className="border-0 shadow-none bg-transparent">
              <CardHeader className="px-0 pb-4">
                <CardTitle className="text-lg text-orange-700">Étape 2 : Sécurité</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">Mot de passe *</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                    placeholder="Entrez un mot de passe sécurisé"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">Confirmer le mot de passe *</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm"
                    placeholder="Confirmez le mot de passe"
                    required
                  />
                  {confirmPassword && formData.password !== confirmPassword && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                      Les mots de passe ne correspondent pas
                    </p>
                  )}
                  {confirmPassword && formData.password === confirmPassword && (
                    <p className="text-sm text-green-500 mt-1 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Les mots de passe correspondent
                    </p>
                  )}
                </div>

                <div className="flex justify-between pt-6 border-t border-orange-200">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handlePreviousStep}
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Précédent
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isLoading || !validateStep2()}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Création en cours...
                      </>
                    ) : (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Créer l'enseignant
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
