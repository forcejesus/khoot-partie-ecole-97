
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Apprenant } from "@/types/apprenant";
import { apprenantService } from "@/services/apprenantService";
import { Edit } from "lucide-react";

interface EditApprenantDialogProps {
  apprenant: Apprenant;
  onSuccess: () => void;
}

export const EditApprenantDialog = ({ apprenant, onSuccess }: EditApprenantDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    nom: apprenant.nom,
    prenom: apprenant.prenom,
    matricule: apprenant.matricule,
    phone: apprenant.phone,
    email: apprenant.email,
  });

  useEffect(() => {
    if (open) {
      setFormData({
        nom: apprenant.nom,
        prenom: apprenant.prenom,
        matricule: apprenant.matricule,
        phone: apprenant.phone,
        email: apprenant.email,
      });
    }
  }, [open, apprenant]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nom.trim() || !formData.prenom.trim()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Le nom et le prénom sont requis",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Handle "aucune" email case
      const emailToSend = formData.email.toLowerCase() === 'aucune' ? 'aucune@email.com' : formData.email;
      
      const updateData = {
        ...formData,
        email: emailToSend
      };

      const response = await apprenantService.updateApprenant(apprenant._id, updateData);

      if (response.success) {
        toast({
          title: "Succès",
          description: "Apprenant modifié avec succès",
        });
        setOpen(false);
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de la modification:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible de modifier l'apprenant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-blue-500 hover:text-blue-700 hover:bg-blue-50">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Modifier l'apprenant</DialogTitle>
          <DialogDescription>
            Modifiez les informations de l'apprenant. Les champs marqués d'un * sont obligatoires.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nom" className="text-right">
                Nom *
              </Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => handleInputChange('nom', e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="prenom" className="text-right">
                Prénom *
              </Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) => handleInputChange('prenom', e.target.value)}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="matricule" className="text-right">
                Matricule
              </Label>
              <Input
                id="matricule"
                value={formData.matricule}
                onChange={(e) => handleInputChange('matricule', e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Téléphone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="col-span-3"
                placeholder="email@exemple.com ou 'aucune'"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Modification..." : "Modifier"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
