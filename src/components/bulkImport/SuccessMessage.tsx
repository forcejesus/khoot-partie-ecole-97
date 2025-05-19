
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  type: "apprenants" | "enseignants";
}

export function SuccessMessage({ type }: SuccessMessageProps) {
  const typeLabel = type === "apprenants" ? "apprenants" : "enseignants";
  
  return (
    <div className="flex flex-col items-center py-8">
      <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Importation réussie!</h3>
      <p className="text-center text-muted-foreground">
        Vos {typeLabel} ont été importés avec succès.
      </p>
    </div>
  );
}
