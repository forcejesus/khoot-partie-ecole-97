
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { CreateEnseignantRequest } from "@/services/enseignantService";

interface PersonalInfoStepProps {
  formData: CreateEnseignantRequest;
  onInputChange: (field: keyof CreateEnseignantRequest, value: string) => void;
  onNext: () => void;
}

export const PersonalInfoStep = ({ formData, onInputChange, onNext }: PersonalInfoStepProps) => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="text-lg text-orange-700">Étape 1 : Informations générales</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nom" className="text-sm font-semibold text-black">Nom de famille *</Label>
            <Input
              id="nom"
              value={formData.nom}
              onChange={(e) => onInputChange('nom', e.target.value)}
              className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
              placeholder="Nom de famille"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prenom" className="text-sm font-semibold text-black">Prénom *</Label>
            <Input
              id="prenom"
              value={formData.prenom}
              onChange={(e) => onInputChange('prenom', e.target.value)}
              className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
              placeholder="Prénom"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="genre" className="text-sm font-semibold text-black">Genre *</Label>
          <Select value={formData.genre} onValueChange={(value) => onInputChange('genre', value)}>
            <SelectTrigger className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 text-black">
              <SelectValue placeholder="Sélectionnez le genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Masculin">Masculin</SelectItem>
              <SelectItem value="Féminin">Féminin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-black">Téléphone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => onInputChange('phone', e.target.value)}
              className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
              placeholder="Numéro de téléphone"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-black">Email *</Label>
            <Input
              id="email"
              value={formData.email}
              onChange={(e) => onInputChange('email', e.target.value)}
              className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
              placeholder="Adresse email"
              required
            />
          </div>
        </div>

        <div className="flex justify-end pt-6 border-t border-orange-200">
          <Button 
            type="button" 
            onClick={onNext}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
          >
            Suivant
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
