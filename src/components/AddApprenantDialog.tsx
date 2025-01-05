import React, { useState } from "react";
import axios from "axios";
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
import { Plus, Loader2, Upload } from "lucide-react";
import Papa from "papaparse";
import { Separator } from "@/components/ui/separator";

export const AddApprenantDialog = ({ onSuccess }: { onSuccess: () => void }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
    avatar: "Mon avatar",
    ecole: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);
      const dataToSend = {
        ...formData,
        ecole: userData.ecole._id
      };

      const response = await axios.post(
        "http://kahoot.nos-apps.com/api/apprenant",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Apprenant ajouté avec succès",
        });
        setOpen(false);
        setFormData({
          nom: "",
          prenom: "",
          email: "",
          phone: "",
          avatar: "Mon avatar",
          ecole: ""
        });
        onSuccess();
      }
    } catch (error: any) {
      console.error("Erreur lors de l'ajout:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Impossible d'ajouter l'apprenant",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateApprenantData = (data: any) => {
    const requiredFields = ['nom', 'prenom', 'email', 'phone'];
    const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
    
    if (missingFields.length > 0) {
      return {
        isValid: false,
        message: `Champs manquants: ${missingFields.join(', ')}`
      };
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        isValid: false,
        message: `Email invalide: ${data.email}`
      };
    }

    return { isValid: true };
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    
    Papa.parse(file, {
      complete: async (results) => {
        try {
          const token = localStorage.getItem("token");
          const userDataStr = localStorage.getItem("user");

          if (!token || !userDataStr) {
            toast({
              variant: "destructive",
              title: "Erreur",
              description: "Vous devez être connecté pour effectuer cette action",
            });
            return;
          }

          const userData = JSON.parse(userDataStr);
          const apprenants = results.data.slice(1).map((row: any) => ({
            nom: row[0],
            prenom: row[1],
            email: row[2],
            phone: row[3],
            avatar: "Mon avatar",
            ecole: userData.ecole._id
          }));

          let successCount = 0;
          let errorCount = 0;
          let errorMessages: string[] = [];

          for (const apprenant of apprenants) {
            const validation = validateApprenantData(apprenant);
            
            if (!validation.isValid) {
              errorCount++;
              errorMessages.push(`${apprenant.nom} ${apprenant.prenom}: ${validation.message}`);
              continue;
            }

            try {
              await axios.post(
                "http://kahoot.nos-apps.com/api/apprenant",
                apprenant,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );
              successCount++;
            } catch (error: any) {
              errorCount++;
              const errorMessage = error.response?.data?.message || "Erreur inconnue";
              errorMessages.push(`${apprenant.nom} ${apprenant.prenom}: ${errorMessage}`);
            }
          }

          if (errorMessages.length > 0) {
            console.error("Erreurs d'importation:", errorMessages);
          }

          toast({
            title: "Import terminé",
            description: `${successCount} apprenants ajoutés avec succès, ${errorCount} erreurs`,
          });

          if (successCount > 0) {
            setOpen(false);
            onSuccess();
          }
        } catch (error: any) {
          toast({
            variant: "destructive",
            title: "Erreur",
            description: "Erreur lors de l'import du fichier CSV",
          });
        } finally {
          setIsLoading(false);
        }
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2" />
          Ajouter un apprenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un nouvel apprenant</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nom" className="text-right">
                Nom
              </Label>
              <Input
                id="nom"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="prenom" className="text-right">
                Prénom
              </Label>
              <Input
                id="prenom"
                value={formData.prenom}
                onChange={(e) =>
                  setFormData({ ...formData, prenom: e.target.value })
                }
                className="col-span-3"
                required
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
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Téléphone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="col-span-3"
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Chargement...
                </>
              ) : (
                'Ajouter'
              )}
            </Button>
          </div>
        </form>

        <Separator className="my-4" />

        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            Ou importez un fichier CSV (colonnes: nom, prénom, email, téléphone)
          </div>
          <div className="flex justify-center">
            <label className="cursor-pointer">
              <Input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
              <div className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
                <Upload className="h-4 w-4" />
                <span>Importer CSV</span>
              </div>
            </label>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};