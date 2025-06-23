
import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Apprenant } from "@/types/apprenant";
import { Skeleton } from "@/components/ui/skeleton";
import { apprenantService } from "@/services/apprenantService";
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
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [apprenantToDelete, setApprenantToDelete] = useState<string | null>(null);

  // Filtrage dynamique des apprenants
  const filteredApprenants = useMemo(() => {
    if (!searchTerm) return apprenants;
    
    return apprenants.filter(apprenant => 
      apprenant.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apprenant.matricule.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [apprenants, searchTerm]);

  const fetchApprenants = async () => {
    try {
      setIsLoading(true);
      const response = await apprenantService.getApprenants();
      
      if (response.success) {
        setApprenants(response.data);
        onApprenantChange?.();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des apprenants:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des apprenants",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    setApprenantToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!apprenantToDelete) return;
    
    // TODO: Implémenter la suppression quand l'endpoint sera disponible
    toast({
      title: "Information",
      description: "Fonctionnalité de suppression en cours de développement",
    });
    
    setApprenantToDelete(null);
    setDeleteDialogOpen(false);
  };

  useEffect(() => {
    fetchApprenants();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <div className="mb-4">
        <p className="text-gray-600 text-sm">
          Total: {filteredApprenants.length} apprenant{filteredApprenants.length > 1 ? "s" : ""} 
          {searchTerm && ` (sur ${apprenants.length})`}
        </p>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>Matricule</TableHead>
              <TableHead>École</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8" /></TableCell>
                </TableRow>
              ))
            ) : filteredApprenants.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  {searchTerm ? "Aucun apprenant trouvé pour cette recherche" : "Aucun apprenant enregistré"}
                </TableCell>
              </TableRow>
            ) : (
              filteredApprenants.map((apprenant) => (
                <TableRow key={apprenant._id}>
                  <TableCell>{apprenant.nom}</TableCell>
                  <TableCell>{apprenant.prenom}</TableCell>
                  <TableCell>{apprenant.email}</TableCell>
                  <TableCell>{apprenant.phone}</TableCell>
                  <TableCell>{apprenant.matricule}</TableCell>
                  <TableCell>{apprenant.ecole.libelle}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => confirmDelete(apprenant._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmation de suppression</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir supprimer cet apprenant ? Cette action est irréversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
