
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ImportProgressProps {
  uploadProgress: number;
}

export function ImportProgress({ uploadProgress }: ImportProgressProps) {
  return (
    <div className="py-6 space-y-4">
      <h3 className="font-medium text-center">
        Importation en cours...
      </h3>
      <Progress value={uploadProgress} className="h-2" />
      <p className="text-center text-sm text-muted-foreground">
        {uploadProgress}% terminé
      </p>
    </div>
  );
}
