
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UpdateApprenantRequest } from "@/types/apprenant";

interface EditApprenantFormFieldsProps {
  formData: UpdateApprenantRequest;
  onFormDataChange: (updates: Partial<UpdateApprenantRequest>) => void;
}

export const EditApprenantFormFields = ({ formData, onFormDataChange }: EditApprenantFormFieldsProps) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Email value entered:", value);
    
    // Si l'utilisateur tape exactement "aucune", on le transforme automatiquement en "aucune@email.com"
    if (value.toLowerCase().trim() === 'aucune') {
      console.log("Transforming 'aucune' to 'aucune@email.com'");
      onFormDataChange({ email: 'aucune@email.com' });
    } else {
      onFormDataChange({ email: value });
    }
  };

  return (
    <div className="grid gap-6">
      <div className="space-y-2">
        <Label htmlFor="nom" className="text-sm font-semibold text-black">
          Nom de famille
        </Label>
        <Input
          id="nom"
          value={formData.nom}
          onChange={(e) => onFormDataChange({ nom: e.target.value })}
          className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
          placeholder="Entrez le nom de famille"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="prenom" className="text-sm font-semibold text-black">
          Prénom
        </Label>
        <Input
          id="prenom"
          value={formData.prenom}
          onChange={(e) => onFormDataChange({ prenom: e.target.value })}
          className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
          placeholder="Entrez le prénom"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="matricule" className="text-sm font-semibold text-gray-500">
          Matricule (non modifiable)
        </Label>
        <Input
          id="matricule"
          value={formData.matricule}
          className="h-12 border-2 border-gray-200 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
          disabled
          readOnly
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-semibold text-black">
          Téléphone
        </Label>
        <Input
          id="phone"
          value={formData.phone}
          onChange={(e) => onFormDataChange({ phone: e.target.value })}
          className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
          placeholder="Entrez le numéro de téléphone"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-semibold text-black">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm transition-all duration-300 text-black placeholder:text-gray-500"
          placeholder="Entrez l'adresse email"
        />
      </div>
    </div>
  );
};
