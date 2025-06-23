
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Plus, Loader2 } from "lucide-react";
import { CreateEnseignantRequest } from "@/services/enseignantService";

interface PasswordStepProps {
  formData: CreateEnseignantRequest;
  confirmPassword: string;
  isLoading: boolean;
  onInputChange: (field: keyof CreateEnseignantRequest, value: string) => void;
  onConfirmPasswordChange: (value: string) => void;
  onPrevious: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isValidStep: boolean;
}

export const PasswordStep = ({ 
  formData, 
  confirmPassword, 
  isLoading,
  onInputChange, 
  onConfirmPasswordChange, 
  onPrevious, 
  onSubmit,
  isValidStep
}: PasswordStepProps) => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardHeader className="px-0 pb-4">
        <CardTitle className="text-lg text-orange-700">Étape 2 : Sécurité</CardTitle>
      </CardHeader>
      <CardContent className="px-0 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-semibold text-black">Mot de passe *</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => onInputChange('password', e.target.value)}
            className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
            placeholder="Entrez un mot de passe sécurisé"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-semibold text-black">Confirmer le mot de passe *</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            className="h-12 border-2 border-orange-200 focus:border-orange-400 rounded-lg bg-white/80 backdrop-blur-sm text-black placeholder:text-gray-500"
            placeholder="Confirmez le mot de passe"
            required
          />
          {confirmPassword && formData.password !== confirmPassword && (
            <p className="text-sm text-red-500 mt-1 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Les mots de passe ne correspondent pas
            </p>
          )}
          {confirmPassword && formData.password === confirmPassword && (
            <p className="text-sm text-green-500 mt-1 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Les mots de passe correspondent
            </p>
          )}
        </div>

        <div className="flex justify-between pt-6 border-t border-orange-200">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onPrevious}
            className="border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Précédent
          </Button>
          <Button 
            type="submit" 
            disabled={isLoading || !isValidStep}
            onClick={onSubmit}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Création en cours...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Créer l'enseignant
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
