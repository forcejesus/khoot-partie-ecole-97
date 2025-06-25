
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PlanificationSection } from "@/components/games/PlanificationSection";
import { EnseignantJeu } from "@/services/enseignantJeuxService";

interface EnseignantJeuPlanificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jeu: EnseignantJeu;
}

export const EnseignantJeuPlanificationModal = ({ 
  isOpen, 
  onClose, 
  jeu 
}: EnseignantJeuPlanificationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-orange-700">
            Planifications - {jeu.titre}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <PlanificationSection 
            planifications={jeu.planification} 
            jeuId={jeu._id} 
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
