
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash2, AlertTriangle } from "lucide-react";
import { api } from "@/services/apiClient";

interface DeleteGameDialogProps {
  gameId: string;
  gameTitle: string;
}

export const DeleteGameDialog = ({ gameId, gameTitle }: DeleteGameDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      console.log("Suppression du jeu:", `/api/jeux/delete/${gameId}`);
      
      const response = await api.post(`/api/jeux/delete/${gameId}`);
      
      console.log("Réponse suppression jeu:", response.data);

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Le jeu a été supprimé avec succès",
        });
        navigate("/jeux");
      } else {
        throw new Error(response.data.message || "Erreur lors de la suppression");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer le jeu",
      });
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" className="w-full">
          <Trash2 className="h-4 w-4 mr-2" />
          Supprimer le jeu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            Confirmer la suppression
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Êtes-vous sûr de vouloir supprimer le jeu <span className="font-semibold">"{gameTitle}"</span> ?
            Cette action est irréversible et supprimera également toutes les planifications associées.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setIsOpen(false)}
            disabled={isDeleting}
          >
            Annuler
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Suppression..." : "Supprimer"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
