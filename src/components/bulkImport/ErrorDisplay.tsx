
import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ErrorDisplayProps {
  errors: string[];
}

export function ErrorDisplay({ errors }: ErrorDisplayProps) {
  if (errors.length === 0) return null;
  
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Erreurs détectées</AlertTitle>
      <AlertDescription>
        <ul className="list-disc pl-5 text-sm">
          {errors.slice(0, 3).map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
          {errors.length > 3 && (
            <li>...et {errors.length - 3} autres erreurs</li>
          )}
        </ul>
      </AlertDescription>
    </Alert>
  );
}
