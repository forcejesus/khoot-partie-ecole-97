
import React from "react";
import { User } from "lucide-react";
import { useApprenantsList } from "@/hooks/useApprenantsList";
import { ApprenantsTable } from "@/components/apprenant/ApprenantsTable";
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

interface ApprenantsListProps {
  onApprenantChange?: () => void;
  searchTerm?: string;
}

export const ApprenantsList = ({ onApprenantChange, searchTerm = "" }: ApprenantsListProps) => {
  const {
    apprenants,
    isLoading,
    isDeleting,
    deleteDialogOpen,
    setDeleteDialogOpen,
    fetchApprenants,
    confirmDelete,
    handleDelete,
  } = useApprenantsList(searchTerm, onApprenantChange);

  return (
    <div className="space-y-6">
      {/* En-tête avec statistiques */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Liste des apprenants</h3>
            <p className="text-orange-600 text-sm">
              {isLoading ? (
                "Chargement..."
              ) : (
                <>
                  {apprenants.length} apprenant{apprenants.length > 1 ? "s" : ""} 
                  {searchTerm && ` trouvé${apprenants.length > 1 ? "s" : ""}`}
                </>
              )}
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
            <User className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tableau des apprenants */}
      <ApprenantsTable
        apprenants={apprenants}
        isLoading={isLoading}
        searchTerm={searchTerm}
        onEditSuccess={fetchApprenants}
        onDeleteConfirm={confirmDelete}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation de suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet apprenant ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Annuler</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete} 
              disabled={isDeleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {isDeleting ? "Suppression..." : "Supprimer"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
