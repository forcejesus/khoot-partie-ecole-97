
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
import { Plus, Loader2, User } from "lucide-react";
import { apprenantService } from "@/services/apprenantService";
import { CreateApprenantRequest } from "@/types/apprenant";
import { Card, CardContent } from "@/components/ui/card";

export const AddApprenantDialog = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<CreateApprenantRequest>({
    nom: "",
    prenom: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    console.log("Submitting apprenant data:", formData);
    
    try {
      const response = await apprenantService.createApprenant(formData);
      
      console.log("API Response:", response);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Apprenant ajouté avec succès",
        });
        setOpen(false);
        setFormData({
          nom: "",
          prenom: "",
        });
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de l'ajout:", error);
      console.error("Error response data:", error.response?.data);
      console.error("Error status:", error.response?.status);
      console.error("Error headers:", error.response?.headers);
      
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
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un apprenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
            <User className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-orange-700">
            Ajouter un nouvel apprenant
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Remplissez les informations de base pour créer un nouveau compte apprenant
          </p>
        </DialogHeader>
        
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-sm font-semibold text-gray-700">
                    Nom de famille *
                  </Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Entrez le nom de famille"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="prenom" className="text-sm font-semibold text-gray-700">
                    Prénom *
                  </Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300"
                    placeholder="Entrez le prénom"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-end pt-6 border-t border-orange-200">
                <div className="flex gap-3">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setOpen(false)}
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
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
                        Ajout en cours...
                      </>
                    ) : (
                      <>
                        <Plus className="mr-2 h-4 w-4" />
                        Ajouter l'apprenant
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
