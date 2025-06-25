
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Edit, Loader2, User } from "lucide-react";
import { enseignantService, UpdateEnseignantRequest } from "@/services/enseignantService";
import { Enseignant } from "@/types/enseignant";
import { Card, CardContent } from "@/components/ui/card";

interface EditEnseignantDialogProps {
  enseignant: Enseignant;
  onSuccess: () => void;
}

export const EditEnseignantDialog = ({ enseignant, onSuccess }: EditEnseignantDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UpdateEnseignantRequest>({
    nom: enseignant.nom,
    prenom: enseignant.prenom,
    genre: enseignant.genre,
    phone: enseignant.phone,
    email: enseignant.email,
    pays: enseignant.pays.libelle,
    role: enseignant.role,
    password: "",
    statut: enseignant.statut,
    adresse: enseignant.adresse,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Updating enseignant data:", formData);
    
    try {
      const response = await enseignantService.updateEnseignant(enseignant._id, formData);
      
      console.log("API Response:", response);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Enseignant modifié avec succès",
        });
        setOpen(false);
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de la modification:", error);
      console.error("Error response data:", error.response?.data);
      console.error("Error status:", error.response?.status);
      
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || `Erreur ${error.response?.status}: ${error.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-blue-500 hover:text-blue-700 hover:bg-blue-50"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-orange-700">
            Modifier l'enseignant
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Modifiez les informations de l'enseignant
          </p>
        </DialogHeader>
        
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-sm font-semibold text-black">
                    Nom de famille
                  </Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez le nom de famille"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-sm font-semibold text-black">
                    Prénom
                  </Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez le prénom"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="genre" className="text-sm font-semibold text-black">
                    Genre
                  </Label>
                  <Select value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm">
                      <SelectValue placeholder="Sélectionnez le genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="homme">Homme</SelectItem>
                      <SelectItem value="femme">Femme</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-black">
                    Téléphone
                  </Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez le numéro de téléphone"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez l'adresse email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pays" className="text-sm font-semibold text-black">
                    Pays
                  </Label>
                  <Input
                    id="pays"
                    value={formData.pays}
                    onChange={(e) => setFormData({ ...formData, pays: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez le pays"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-semibold text-black">
                    Rôle
                  </Label>
                  <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm">
                      <SelectValue placeholder="Sélectionnez le rôle" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="enseignant">Enseignant</SelectItem>
                      <SelectItem value="admin">Administrateur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="statut" className="text-sm font-semibold text-black">
                    Statut
                  </Label>
                  <Select value={formData.statut} onValueChange={(value) => setFormData({ ...formData, statut: value })}>
                    <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm">
                      <SelectValue placeholder="Sélectionnez le statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="actif">Actif</SelectItem>
                      <SelectItem value="inactif">Inactif</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="adresse" className="text-sm font-semibold text-black">
                    Adresse
                  </Label>
                  <Input
                    id="adresse"
                    value={formData.adresse}
                    onChange={(e) => setFormData({ ...formData, adresse: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez l'adresse"
                  />
                </div>

                <div className="space-y-2 col-span-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-black">
                    Nouveau mot de passe (optionnel)
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Laissez vide pour garder l'ancien"
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-6 border-t border-orange-200">
                <div className="flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setOpen(false)}
                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                  >
                    Annuler
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Mise à jour en cours...
                      </>
                    ) : (
                      <>
                        <Edit className="mr-2 h-4 w-4" />
                        Mettre à jour
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
