
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import { Enseignant } from "@/types/enseignant";
import { Card, CardContent } from "@/components/ui/card";
import { EditEnseignantDialogHeader } from "./enseignant/EditEnseignantDialogHeader";
import { EditEnseignantForm } from "./enseignant/EditEnseignantForm";

interface EditEnseignantDialogProps {
  enseignant: Enseignant;
  onSuccess: () => void;
}

export const EditEnseignantDialog = ({ enseignant, onSuccess }: EditEnseignantDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    setOpen(false);
    onSuccess();
  };

  const handleCancel = () => {
    setOpen(false);
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
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl">
        <EditEnseignantDialogHeader />
        
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <EditEnseignantForm 
              enseignant={enseignant}
              onSuccess={handleSuccess}
              onCancel={handleCancel}
            />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
