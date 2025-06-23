
import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, Phone, Calendar, GraduationCap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Enseignant } from "@/types/enseignant";
import { Skeleton } from "@/components/ui/skeleton";
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

interface EnseignantsListProps {
  onEnseignantChange?: () => void;
  searchTerm?: string;
}

export const EnseignantsList = ({ onEnseignantChange, searchTerm = "" }: EnseignantsListProps) => {
  const [enseignants, setEnseignants] = useState<Enseignant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [enseignantToDelete, setEnseignantToDelete] = useState<string | null>(null);

  // Filtrage dynamique des enseignants
  const filteredEnseignants = useMemo(() => {
    if (!searchTerm) return enseignants;
    
    return enseignants.filter(enseignant => 
      enseignant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      enseignant.statut.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [enseignants, searchTerm]);

  const fetchEnseignants = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem("token");
      const userDataStr = localStorage.getItem("user");

      if (!token || !userDataStr) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour voir la liste des enseignants",
        });
        return;
      }

      const userData = JSON.parse(userDataStr);

      const response = await axios.get(
        "http://kahoot.nos-apps.com/api/users",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Filtrer uniquement les utilisateurs avec le statut "enseignant" ou "Enseignant"
        const filteredEnseignants = response.data.data.filter(
          (enseignant: Enseignant) => 
            enseignant.ecole === userData.ecole._id && 
            (enseignant.statut.toLowerCase() === "enseignant")
        );
        setEnseignants(filteredEnseignants);
        onEnseignantChange?.();
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des enseignants:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des enseignants",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const confirmDelete = (id: string) => {
    setEnseignantToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDelete = async () => {
    if (!enseignantToDelete) return;
    
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: "Vous devez être connecté pour effectuer cette action",
        });
        return;
      }

      const response = await axios.delete(
        `http://kahoot.nos-apps.com/api/user/delete/${enseignantToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Enseignant supprimé avec succès",
        });
        fetchEnseignants();
      }
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de supprimer l'enseignant",
      });
    } finally {
      setEnseignantToDelete(null);
      setDeleteDialogOpen(false);
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const getStatusColor = (statut: string) => {
    switch (statut.toLowerCase()) {
      case 'actif':
      case 'enseignant':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      case 'inactif':
        return 'bg-red-100 text-red-700 hover:bg-red-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

  useEffect(() => {
    fetchEnseignants();
  }, []);

  return (
    <div className="space-y-6">
      {/* En-tête avec statistiques */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-orange-800 mb-2">Liste des enseignants</h3>
            <p className="text-orange-600 text-sm">
              {isLoading ? (
                "Chargement..."
              ) : (
                <>
                  {filteredEnseignants.length} enseignant{filteredEnseignants.length > 1 ? "s" : ""} 
                  {searchTerm && ` trouvé${filteredEnseignants.length > 1 ? "s" : ""} sur ${enseignants.length}`}
                </>
              )}
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Tableau moderne */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead className="font-semibold text-gray-700 px-6 py-4">Enseignant</TableHead>
              <TableHead className="font-semibold text-gray-700">Contact</TableHead>
              <TableHead className="font-semibold text-gray-700">Statut</TableHead>
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
                  <TableCell><Skeleton className="h-4 w-[150px]" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
                  <TableCell><Skeleton className="h-8 w-8 mx-auto" /></TableCell>
                </TableRow>
              ))
            ) : filteredEnseignants.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-700">
                      {searchTerm ? "Aucun enseignant trouvé" : "Aucun enseignant enregistré"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {searchTerm 
                        ? "Essayez avec d'autres termes de recherche" 
                        : "Commencez par ajouter votre premier enseignant"
                      }
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredEnseignants.map((enseignant) => (
                <TableRow key={enseignant._id} className="hover:bg-gray-50 transition-colors">
                  <TableCell className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-orange-100 text-orange-600 font-semibold">
                          {getInitials(enseignant.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{enseignant.name}</p>
                        <p className="text-sm text-gray-500">Enseignant</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{enseignant.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-3 w-3 text-gray-400" />
                        <span className="text-gray-600">{enseignant.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(enseignant.statut)}>
                      {enseignant.statut}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="h-3 w-3 text-gray-400" />
                      <span>{formatDate(enseignant.date)}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => confirmDelete(enseignant._id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
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
              Êtes-vous sûr de vouloir supprimer cet enseignant ? Cette action est irréversible.
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
