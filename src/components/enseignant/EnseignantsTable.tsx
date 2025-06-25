
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Enseignant } from "@/types/enseignant";
import { EnseignantRow } from "./EnseignantRow";
import { EmptyEnseignantsState } from "./EmptyEnseignantsState";

interface EnseignantsTableProps {
  enseignants: Enseignant[];
  isLoading: boolean;
  searchTerm: string;
  onDelete: (id: string) => void;
  onSuccess: () => void;
}

export const EnseignantsTable = ({ 
  enseignants, 
  isLoading, 
  searchTerm, 
  onDelete,
  onSuccess
}: EnseignantsTableProps) => {
  const LoadingSkeleton = () => (
    [...Array(3)].map((_, index) => (
      <TableRow key={index}>
        <td className="px-6 py-4">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-3 w-[80px]" />
            </div>
          </div>
        </td>
        <td><Skeleton className="h-4 w-[100px]" /></td>
        <td><Skeleton className="h-4 w-[120px]" /></td>
        <td><Skeleton className="h-4 w-[60px]" /></td>
        <td><Skeleton className="h-4 w-[80px]" /></td>
        <td><Skeleton className="h-8 w-8 mx-auto" /></td>
      </TableRow>
    ))
  );

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="font-semibold text-gray-700 px-6 py-4">Nom et Prénom</TableHead>
            <TableHead className="font-semibold text-gray-700">Matricule</TableHead>
            <TableHead className="font-semibold text-gray-700">Contact</TableHead>
            <TableHead className="font-semibold text-gray-700 text-center">Total Jeux</TableHead>
            <TableHead className="font-semibold text-gray-700 text-center">Total Planifications</TableHead>
            <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <LoadingSkeleton />
          ) : enseignants.length === 0 ? (
            <EmptyEnseignantsState searchTerm={searchTerm} />
          ) : (
            enseignants.map((enseignant) => (
              <EnseignantRow 
                key={enseignant._id} 
                enseignant={enseignant} 
                onDelete={onDelete}
                onSuccess={onSuccess}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
