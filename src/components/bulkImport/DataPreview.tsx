
import React from "react";
import { ApprenantImport } from "@/utils/csvUtils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataPreviewProps {
  parsedData: ApprenantImport[];
}

export function DataPreview({ parsedData }: DataPreviewProps) {
  if (parsedData.length === 0) return null;
  
  return (
    <div>
      <h3 className="font-medium mb-2">Aperçu des données ({parsedData.length} enregistrements)</h3>
      <div className="border rounded-lg max-h-[200px] overflow-y-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Prénom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Téléphone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parsedData.slice(0, 5).map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.nom}</TableCell>
                <TableCell>{item.prenom}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
              </TableRow>
            ))}
            {parsedData.length > 5 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-sm text-muted-foreground">
                  ... et {parsedData.length - 5} autres enregistrements
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
