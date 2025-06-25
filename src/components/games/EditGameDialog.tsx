
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Edit3, Upload } from "lucide-react";
import { api } from "@/services/apiClient";

interface EditGameDialogProps {
  gameId: string;
  currentTitle: string;
  currentImage: string | null;
  onUpdate: (updatedData: { titre: string; image: string | null }) => void;
}

export const EditGameDialog = ({ gameId, currentTitle, currentImage, onUpdate }: EditGameDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [title, setTitle] = useState(currentTitle);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(currentImage);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = async () => {
    if (!title.trim()) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Le titre du jeu est requis",
      });
      return;
    }

    try {
      setIsUpdating(true);
      console.log("Modification du jeu:", `/api/jeux/update/${gameId}`);
      
      const formData = new FormData();
      formData.append('titre', title.trim());
      if (imageFile) {
        formData.append('image', imageFile);
      }

      const response = await api.post(`/api/jeux/update/${gameId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log("Réponse modification jeu:", response.data);

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Le jeu a été modifié avec succès",
        });
        onUpdate({
          titre: title,
          image: imageFile ? response.data.data.image : currentImage,
        });
        setIsOpen(false);
      } else {
        throw new Error(response.data.message || "Erreur lors de la modification");
      }
    } catch (error) {
      console.error("Erreur lors de la modification:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de modifier le jeu",
      });
    } finally {
      setIsUpdating(false);
    }
  };

  const resetForm = () => {
    setTitle(currentTitle);
    setImageFile(null);
    setImagePreview(currentImage);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) resetForm();
    }}>
      <DialogTrigger asChild>
        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
          <Edit3 className="h-4 w-4 mr-2" />
          Modifier le jeu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-orange-800">Modifier le jeu</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="title" className="text-sm font-medium text-gray-700">
              Titre du jeu
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Entrez le titre du jeu"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="image" className="text-sm font-medium text-gray-700">
              Image du jeu
            </Label>
            <div className="mt-1 space-y-2">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
              />
              {imagePreview && (
                <div className="relative h-32 w-full rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={imagePreview}
                    alt="Aperçu"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2 mt-6">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isUpdating}
            className="flex-1"
          >
            Annuler
          </Button>
          <Button
            onClick={handleUpdate}
            disabled={isUpdating || !title.trim()}
            className="flex-1 bg-orange-500 hover:bg-orange-600"
          >
            {isUpdating ? "Modification..." : "Modifier"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
