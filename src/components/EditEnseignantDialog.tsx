
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { enseignantService, UpdateEnseignantRequest } from "@/services/enseignantService";
import { Enseignant } from "@/types/enseignant";
import { Loader2 } from "lucide-react";

interface EditEnseignantDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  enseignant: Enseignant | null;
  onSuccess?: () => void;
}

export const EditEnseignantDialog = ({ open, onOpenChange, enseignant, onSuccess }: EditEnseignantDialogProps) => {
  const [formData, setFormData] = useState<UpdateEnseignantRequest>({
    nom: "",
    prenom: "",
    genre: "",
    phone: "",
    email: "",
    pays: "",
    role: "",
    password: "",
    statut: "",
    adresse: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (enseignant) {
      setFormData({
        nom: enseignant.nom,
        prenom: enseignant.prenom,
        genre: enseignant.genre,
        phone: enseignant.phone,
        email: enseignant.email,
        pays: enseignant.pays._id,
        role: enseignant.role,
        password: "", // Le mot de passe reste vide par défaut
        statut: enseignant.statut,
        adresse: enseignant.adresse,
      });
    }
  }, [enseignant]);

  const handleInputChange = (field: keyof UpdateEnseignantRequest, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enseignant) return;

    setIsSubmitting(true);
    try {
      const response = await enseignantService.updateEnseignant(enseignant._id, formData);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Enseignant modifié avec succès",
        });
        onSuccess?.();
        onOpenChange(false);
      }
    } catch (error: any) {
      console.error("Erreur lors de la modification:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible de modifier l'enseignant",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-orange-700">
            Modifier l'enseignant
          </DialogTitle>
          <DialogDescription>
            Modifiez les informations de l'enseignant
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom">Nom *</Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleInputChange("nom", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="prenom">Prénom *</Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleInputChange("prenom", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genre">Genre *</Label>
              <Select value={formData.genre} onValueChange={(value) => handleInputChange("genre", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner le genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="homme">Homme</SelectItem>
                  <SelectItem value="femme">Femme</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="adresse">Adresse</Label>
              <Input
                id="adresse"
                value={formData.adresse}
                onChange={(e) => handleInputChange("adresse", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="statut">Statut *</Label>
              <Select value={formData.statut} onValueChange={(value) => handleInputChange("statut", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner le statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="actif">Actif</SelectItem>
                  <SelectItem value="inactif">Inactif</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Rôle *</Label>
              <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner le rôle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enseignant">Enseignant</SelectItem>
                  <SelectItem value="admin">Administrateur</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Nouveau mot de passe (optionnel)</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              placeholder="Laisser vide pour conserver le mot de passe actuel"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Annuler
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600"
            >
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Modifier
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
