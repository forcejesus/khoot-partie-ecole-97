
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useEnseignantsList } from "@/hooks/useEnseignantsList";
import { EnseignantsTableHeader } from "@/components/enseignant/EnseignantsTableHeader";
import { EnseignantsTable } from "@/components/enseignant/EnseignantsTable";

interface EnseignantsListProps {
  onEnseignantChange?: () => void;
  searchTerm?: string;
}

export const EnseignantsList = ({ onEnseignantChange, searchTerm = "" }: EnseignantsListProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [enseignantToDelete, setEnseignantToDelete] = useState<string | null>(null);

  const {
    enseignants,
    filteredEnseignants,
    isLoading,
    handleDelete,
  } = useEnseignantsList(searchTerm, onEnseignantChange);

  const confirmDelete = (id: string) => {
    setEnseignantToDelete(id);
    setDeleteDialogOpen(true);
  };

  const executeDelete = async () => {
    if (!enseignantToDelete) return;
    
    await handleDelete(enseignantToDelete);
    setEnseignantToDelete(null);
    setDeleteDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <EnseignantsTableHeader
        isLoading={isLoading}
        filteredCount={filteredEnseignants.length}
        totalCount={enseignants.length}
        searchTerm={searchTerm}
      />

      <EnseignantsTable
        enseignants={filteredEnseignants}
        isLoading={isLoading}
        searchTerm={searchTerm}
        onDelete={confirmDelete}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation de suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet enseignant ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={executeDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
