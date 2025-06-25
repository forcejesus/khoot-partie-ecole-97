
import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { User } from "lucide-react";

export const EditEnseignantDialogHeader = () => {
  return (
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
  );
};
