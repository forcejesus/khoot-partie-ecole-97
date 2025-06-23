
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
import { Trash2, Mail, Phone, GraduationCap, Calendar, User, Edit } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { EditApprenantDialog } from "@/components/EditApprenantDialog";

interface ApprenantsListProps {
  onApprenantChange?: () => void;
  searchTerm?: string;
}

export const ApprenantsList = ({ onApprenantChange, searchTerm = "" }: ApprenantsListProps) => {
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
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
    
    try {
      setIsDeleting(true);
      const response = await apprenantService.deleteApprenant(apprenantToDelete);
      
      if (response.success) {
        toast({
          title: "Succès",
          description: "Apprenant supprimé avec succès",
        });
        fetchApprenants(); // Rafraîchir la liste
      }
    } catch (error: any) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: error.response?.data?.message || "Erreur lors de la suppression de l'apprenant",
      });
    } finally {
      setIsDeleting(false);
      setApprenantToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  const handleEditSuccess = () => {
    fetchApprenants();
  };

  const getInitials = (nom: string, prenom: string) => {
    return `${nom.charAt(0)}${prenom.charAt(0)}`.toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  useEffect(() => {
    fetchApprenants();
  }, []);

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
                  {filteredApprenants.length} apprenant{filteredApprenants.length > 1 ? "s" : ""} 
                  {searchTerm && ` trouvé${filteredApprenants.length > 1 ? "s" : ""} sur ${apprenants.length}`}
                </>
              )}
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
            <User className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tableau moderne */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-semibold text-gray-700 px-6 py-4">Apprenant</TableHead>
              <TableHead className="font-semibold text-gray-700">Contact</TableHead>
              <TableHead className="font-semibold text-gray-700">Matricule</TableHead>
              <TableHead className="font-semibold text-gray-700">École</TableHead>
              <TableHead className="font-semibold text-gray-700">Date d'inscription</TableHead>
              <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(3)].map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[120px]" />
                        <Skeleton className="h-3 w-[80px]" />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[120px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8 mx-auto" /></TableCell>
                </TableRow>
              ))
            ) : filteredApprenants.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-12">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-700">
                      {searchTerm ? "Aucun apprenant trouvé" : "Aucun apprenant enregistré"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {searchTerm 
                        ? "Essayez avec d'autres termes de recherche" 
                        : "Commencez par ajouter votre premier apprenant"
                      }
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredApprenants.map((apprenant) => (
                <TableRow key={apprenant._id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                          {getInitials(apprenant.nom, apprenant.prenom)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">
                          {apprenant.prenom} {apprenant.nom}
                        </p>
                        <p className="text-sm text-gray-500">Apprenant</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{apprenant.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{apprenant.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {apprenant.matricule}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">{apprenant.ecole.libelle}</p>
                        <p className="text-sm text-gray-500">{apprenant.ecole.ville}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span>{formatDate(apprenant.date)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <EditApprenantDialog 
                        apprenant={apprenant} 
                        onSuccess={handleEditSuccess}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => confirmDelete(apprenant._id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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
