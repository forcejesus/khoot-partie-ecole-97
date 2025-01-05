import React from "react";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface CSVImportFormProps {
  onFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export const CSVImportForm = ({ onFileUpload, isLoading }: CSVImportFormProps) => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500">
        Ou importez un fichier CSV (colonnes: nom, prénom, email, téléphone)
      </div>
      <div className="flex justify-center">
        <label className="cursor-pointer">
          <Input
            type="file"
            accept=".csv"
            className="hidden"
            onChange={onFileUpload}
            disabled={isLoading}
          />
          <div className="flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-gray-50">
            <Upload className="h-4 w-4" />
            <span>Importer CSV</span>
          </div>
        </label>
      </div>
    </div>
  );
};