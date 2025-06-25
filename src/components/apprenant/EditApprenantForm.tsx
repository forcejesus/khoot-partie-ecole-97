
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Loader2 } from "lucide-react";
import { UpdateApprenantRequest } from "@/types/apprenant";
import { EditApprenantFormFields } from "./EditApprenantFormFields";

interface EditApprenantFormProps {
  formData: UpdateApprenantRequest;
  isLoading: boolean;
  onFormDataChange: (updates: Partial<UpdateApprenantRequest>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export const EditApprenantForm = ({ 
  formData, 
  isLoading, 
  onFormDataChange, 
  onSubmit, 
  onCancel 
}: EditApprenantFormProps) => {
  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardContent className="p-0">
        <form onSubmit={onSubmit} className="space-y-6">
          <EditApprenantFormFields 
            formData={formData}
            onFormDataChange={onFormDataChange}
          />
          
          <div className="flex justify-end pt-6 border-t border-orange-200">
            <div className="flex gap-3">
              <Button 
                type="button" 
                variant="outline" 
                onClick={onCancel}
                className="border-gray-300 text-gray-600 hover:bg-gray-50"
              >
                Annuler
              </Button>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Mise à jour en cours...
                  </>
                ) : (
                  <>
                    <Edit className="mr-2 h-4 w-4" />
                    Mettre à jour
                  </>
                )}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
