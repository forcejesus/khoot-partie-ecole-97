
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
import { Edit, Loader2, User } from "lucide-react";
import { apprenantService } from "@/services/apprenantService";
import { UpdateApprenantRequest, Apprenant } from "@/types/apprenant";
import { Card, CardContent } from "@/components/ui/card";

interface EditApprenantDialogProps {
  apprenant: Apprenant;
  onSuccess: () => void;
}

export const EditApprenantDialog = ({ apprenant, onSuccess }: EditApprenantDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UpdateApprenantRequest>({
    nom: apprenant.nom,
    prenom: apprenant.prenom,
    matricule: apprenant.matricule,
    phone: apprenant.phone,
    email: apprenant.email,
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Email value entered:", value);
    
    // Si l'utilisateur tape exactement "aucune", on le transforme automatiquement en "aucune@email.com"
    if (value.toLowerCase().trim() === 'aucune') {
      console.log("Transforming 'aucune' to 'aucune@email.com'");
      setFormData({ ...formData, email: 'aucune@email.com' });
    } else {
      setFormData({ ...formData, email: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Updating apprenant data:", formData);
    
    try {
      const response = await apprenantService.updateApprenant(apprenant._id, formData);
      
      console.log("API Response:", response);
      
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
            Modifier l'apprenant
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Modifiez les informations de l'apprenant
          </p>
        </DialogHeader>
        
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
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
                  <Label htmlFor="matricule" className="text-sm font-semibold text-gray-500">
                    Matricule (non modifiable)
                  </Label>
                  <Input
                    id="matricule"
                    value={formData.matricule}
                    className="h-12 border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                    disabled
                    readOnly
                  />
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
                    onChange={handleEmailChange}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
                    placeholder="Entrez l'adresse email"
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
