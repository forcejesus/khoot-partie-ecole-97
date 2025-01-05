import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { Apprenant, ApprenantResponse } from "@/types/apprenant";
import { AddApprenantDialog } from "./AddApprenantDialog";
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

export function ApprenantsList() {
  const [apprenants, setApprenants] = useState<Apprenant[]>([]);
  const { toast } = useToast();

  const fetchApprenants = async () => {
    try {
      const response = await axios.get<ApprenantResponse>(
        import.meta.env.VITE_API_URL + "/api/apprenant"
      );
      if (response.data.success) {
        setApprenants(response.data.data);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Impossible de récupérer la liste des apprenants",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/apprenant/delete/${id}`
      );
      if (response.data.success) {
        toast({
          title: "Succès",
          description: "Apprenant supprimé avec succès",
        });
        fetchApprenants();
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Erreur lors de la suppression",
      });
    }
  };

  useEffect(() => {
    fetchApprenants();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Liste des apprenants</h1>
        <AddApprenantDialog onApprenantAdded={fetchApprenants} />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
              <TableHead>École</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apprenants.map((apprenant) => (
              <TableRow key={apprenant._id}>
                <TableCell>{apprenant.nom}</TableCell>
                <TableCell>{apprenant.prenom}</TableCell>
                <TableCell>{apprenant.email}</TableCell>
                <TableCell>{apprenant.phone}</TableCell>
                <TableCell>{apprenant.ecole.libelle}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDelete(apprenant._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}