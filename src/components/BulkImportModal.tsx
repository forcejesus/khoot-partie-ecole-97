
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileUploader } from '@/components/bulkImport/FileUploader';
import { DataPreview } from '@/components/bulkImport/DataPreview';
import { ImportProgress } from '@/components/bulkImport/ImportProgress';
import { SuccessMessage } from '@/components/bulkImport/SuccessMessage';
import { ErrorDisplay } from '@/components/bulkImport/ErrorDisplay';
import { toast } from 'sonner';
import * as XLSX from 'xlsx';
import { apprenantService } from '@/services/apprenantService';
import { processCSVFile, ApprenantImport } from '@/utils/csvUtils';

interface BulkImportModalProps {
  type: 'apprenants';
  onSuccess: () => void;
}

type ImportStep = 'upload' | 'preview' | 'importing' | 'success' | 'error';

export const BulkImportModal = ({ type, onSuccess }: BulkImportModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<ImportStep>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<ApprenantImport[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  const resetModal = () => {
    setCurrentStep('upload');
    setFile(null);
    setParsedData([]);
    setUploadProgress(0);
    setErrors([]);
  };

  const handleClose = () => {
    resetModal();
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const processExcelFile = (file: File): Promise<ApprenantImport[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          const processedData = jsonData
            .map((row: any) => ({
              nom: row['Nom'] || row['nom'] || '',
              prenom: row['Prénom'] || row['prenom'] || row['Prenom'] || '',
              email: row['Email'] || row['email'] || '',
              phone: row['Téléphone'] || row['telephone'] || row['Phone'] || row['phone'] || '',
            }))
            .filter((item: any): item is ApprenantImport => 
              item.nom && item.prenom && typeof item.nom === 'string' && typeof item.prenom === 'string'
            );

          resolve(processedData);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => reject(new Error('Erreur lors de la lecture du fichier'));
      reader.readAsArrayBuffer(file);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    
    try {
      let processedData: ApprenantImport[];
      
      if (selectedFile.name.endsWith('.csv')) {
        processedData = await processCSVFile(selectedFile);
      } else {
        processedData = await processExcelFile(selectedFile);
      }
      
      if (processedData.length === 0) {
        toast.error('Aucune donnée valide trouvée dans le fichier');
        return;
      }

      setParsedData(processedData);
      setCurrentStep('preview');
      toast.success(`${processedData.length} ligne(s) trouvée(s)`);
    } catch (error) {
      console.error('Erreur lors du traitement du fichier:', error);
      toast.error('Erreur lors du traitement du fichier');
    }
  };

  const handleImport = async () => {
    setCurrentStep('importing');
    setUploadProgress(0);
    setErrors([]);

    const importErrors: string[] = [];

    for (let i = 0; i < parsedData.length; i++) {
      const apprenant = parsedData[i];
      
      try {
        await apprenantService.createApprenant({
          nom: apprenant.nom,
          prenom: apprenant.prenom,
        });
      } catch (error) {
        importErrors.push(`${apprenant.nom} ${apprenant.prenom}: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
      }
      
      setUploadProgress(Math.round(((i + 1) / parsedData.length) * 100));
    }

    setErrors(importErrors);
    setCurrentStep(importErrors.length > 0 ? 'error' : 'success');
    
    if (importErrors.length < parsedData.length) {
      onSuccess();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'upload':
        return <FileUploader onFileChange={handleFileChange} file={file} />;
      case 'preview':
        return (
          <div className="space-y-4">
            <DataPreview parsedData={parsedData} />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setCurrentStep('upload')}>
                Retour
              </Button>
              <Button onClick={handleImport}>
                Importer ({parsedData.length} enregistrement{parsedData.length > 1 ? 's' : ''})
              </Button>
            </div>
          </div>
        );
      case 'importing':
        return <ImportProgress uploadProgress={uploadProgress} />;
      case 'success':
        return (
          <div className="space-y-4">
            <SuccessMessage type={type} />
            <div className="flex justify-end">
              <Button onClick={handleClose}>Fermer</Button>
            </div>
          </div>
        );
      case 'error':
        return (
          <div className="space-y-4">
            <ErrorDisplay errors={errors} />
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setCurrentStep('preview')}>
                Réessayer
              </Button>
              <Button onClick={handleClose}>Fermer</Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="outline" size="sm">
        <span className="hidden sm:inline">Import en masse</span>
      </Button>
      
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-orange-700">
              Import en masse des apprenants
            </DialogTitle>
          </DialogHeader>
          
          {renderStepContent()}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BulkImportModal;
