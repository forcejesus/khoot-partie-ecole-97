
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Edit } from "lucide-react";
import { enseignantService } from "@/services/enseignantService";
import { Enseignant } from "@/types/enseignant";

interface SimpleUpdateEnseignantRequest {
  nom: string;
  prenom: string;
  genre: string;
  phone: string;
  email: string;
  statut: string;
}

interface EditEnseignantFormProps {
  enseignant: Enseignant;
  onSuccess: () => void;
  onCancel: () => void;
}

export const EditEnseignantForm = ({ enseignant, onSuccess, onCancel }: EditEnseignantFormProps) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SimpleUpdateEnseignantRequest>({
    nom: enseignant.nom,
    prenom: enseignant.prenom,
    genre: enseignant.genre,
    phone: enseignant.phone,
    email: enseignant.email,
    statut: enseignant.statut,
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
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
            required
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
            required
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
              <SelectItem value="Masculin">Masculin</SelectItem>
              <SelectItem value="Feminin">Féminin</SelectItem>
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
            required
          />
        </div>

        <div className="space-y-2 col-span-2">
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
            required
          />
        </div>

        <div className="space-y-2 col-span-2">
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
      </div>
      
      <div className="flex justify-end pt-6 border-t border-orange-200">
        <div className="flex gap-3">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
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
  );
};
