
import React from "react";
import { Table, TableBody } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { ApprenantsTableHeader } from "./ApprenantsTableHeader";
import { ApprenantRow } from "./ApprenantRow";
import { EmptyApprenantsState } from "./EmptyApprenantsState";
import { Apprenant } from "@/types/apprenant";

interface ApprenantsTableProps {
  apprenants: Apprenant[];
  isLoading: boolean;
  searchTerm: string;
  onEditSuccess: () => void;
  onDeleteConfirm: (id: string) => void;
}

export const ApprenantsTable = ({ 
  apprenants, 
  isLoading, 
  searchTerm, 
  onEditSuccess, 
  onDeleteConfirm 
}: ApprenantsTableProps) => {
  const renderSkeletonRows = () => {
    return [...Array(3)].map((_, index) => (
      <tr key={index}>
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
        <td><Skeleton className="h-4 w-[100px]" /></td>
        <td><Skeleton className="h-4 w-[120px]" /></td>
        <td><Skeleton className="h-4 w-[80px]" /></td>
        <td><Skeleton className="h-8 w-8 mx-auto" /></td>
      </tr>
    ));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <Table>
        <ApprenantsTableHeader />
        <TableBody>
          {isLoading ? (
            renderSkeletonRows()
          ) : apprenants.length === 0 ? (
            <EmptyApprenantsState searchTerm={searchTerm} />
          ) : (
            apprenants.map((apprenant) => (
              <ApprenantRow
                key={apprenant._id}
                apprenant={apprenant}
                onEdit={onEditSuccess}
                onDelete={onDeleteConfirm}
              />
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
