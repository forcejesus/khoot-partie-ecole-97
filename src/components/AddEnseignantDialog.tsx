
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, GraduationCap, Lock } from "lucide-react";
import { useEnseignantForm } from "@/hooks/useEnseignantForm";
import { StepIndicator } from "@/components/enseignant/StepIndicator";
import { PersonalInfoStep } from "@/components/enseignant/PersonalInfoStep";
import { PasswordStep } from "@/components/enseignant/PasswordStep";

export const AddEnseignantDialog = ({ onSuccess }: { onSuccess: () => void }) => {
  const [open, setOpen] = useState(false);
  
  const {
    formData,
    confirmPassword,
    currentStep,
    isLoading,
    handleInputChange,
    setConfirmPassword,
    validateStep2,
    handleNextStep,
    handlePreviousStep,
    handleSubmit,
    resetForm,
  } = useEnseignantForm(() => {
    setOpen(false);
    onSuccess();
  });

  const handleDialogChange = (newOpen: boolean) => {
    setOpen(newOpen);
    if (!newOpen) {
      resetForm();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogChange}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg transition-all duration-300 hover:shadow-xl">
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un enseignant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-gradient-to-br from-white to-orange-50 border-orange-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
            {currentStep === 1 ? (
              <GraduationCap className="h-8 w-8 text-white" />
            ) : (
              <Lock className="h-8 w-8 text-white" />
            )}
          </div>
          <DialogTitle className="text-2xl font-bold text-orange-700">
            Ajouter un nouvel enseignant
          </DialogTitle>
          <StepIndicator currentStep={currentStep} totalSteps={2} />
          <p className="text-gray-600 mt-2">
            {currentStep === 1 ? "Informations personnelles et professionnelles" : "Configuration du mot de passe"}
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <PersonalInfoStep
              formData={formData}
              onInputChange={handleInputChange}
              onNext={handleNextStep}
            />
          )}

          {currentStep === 2 && (
            <PasswordStep
              formData={formData}
              confirmPassword={confirmPassword}
              isLoading={isLoading}
              onInputChange={handleInputChange}
              onConfirmPasswordChange={setConfirmPassword}
              onPrevious={handlePreviousStep}
              onSubmit={handleSubmit}
              isValidStep={validateStep2()}
            />
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
