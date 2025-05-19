
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface FileUploaderProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}

export function FileUploader({ onFileChange, file }: FileUploaderProps) {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="file">Fichier CSV ou Excel</Label>
      <div className="flex items-center gap-2">
        <input
          id="file"
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={onFileChange}
          className="hidden"
        />
        <Button
          variant="outline"
          onClick={() => document.getElementById("file")?.click()}
          className="w-full h-24 border-dashed flex flex-col gap-2"
        >
          <Upload className="h-6 w-6" />
          <span>
            {file ? file.name : `Cliquez pour sélectionner un fichier`}
          </span>
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Format: Nom, Prénom, Email, Téléphone
      </p>
    </div>
  );
}
