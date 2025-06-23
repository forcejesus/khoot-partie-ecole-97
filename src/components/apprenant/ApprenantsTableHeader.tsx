
import React from "react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const ApprenantsTableHeader = () => {
  return (
    <TableHeader>
      <TableRow className="bg-gray-50 hover:bg-gray-50">
        <TableHead className="font-semibold text-gray-700 px-6 py-4">Nom et Prénom</TableHead>
        <TableHead className="font-semibold text-gray-700">Contact</TableHead>
        <TableHead className="font-semibold text-gray-700">Matricule</TableHead>
        <TableHead className="font-semibold text-gray-700">Date d'ajout</TableHead>
        <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
};
