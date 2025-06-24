
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

interface ApprenantImport {
  nom: string;
  prenom: string;
  email?: string;
  phone?: string;
}

interface BulkImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type ImportStep = 'upload' | 'preview' | 'importing' | 'success' | 'error';

export const BulkImportModal = ({ isOpen, onClose, onSuccess }: BulkImportModalProps) => {
  const [currentStep, setCurrentStep] = useState<ImportStep>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [data, setData] = useState<ApprenantImport[]>([]);
  const [progress, setProgress] = useState(0);
  const [importResults, setImportResults] = useState<{
    successful: number;
    failed: number;
    errors: string[];
  }>({ successful: 0, failed: 0, errors: [] });

  const resetModal = () => {
    setCurrentStep('upload');
    setFile(null);
    setData([]);
    setProgress(0);
    setImportResults({ successful: 0, failed: 0, errors: [] });
  };

  const handleClose = () => {
    resetModal();
    onClose();
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
              email: row['Email'] || row['email'] || undefined,
              phone: row['Téléphone'] || row['telephone'] || row['Phone'] || row['phone'] || undefined,
            }))
            .filter((item): item is ApprenantImport => 
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

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);
    
    try {
      const processedData = await processExcelFile(selectedFile);
      
      if (processedData.length === 0) {
        toast.error('Aucune donnée valide trouvée dans le fichier');
        return;
      }

      setData(processedData);
      setCurrentStep('preview');
      toast.success(`${processedData.length} ligne(s) trouvée(s)`);
    } catch (error) {
      console.error('Erreur lors du traitement du fichier:', error);
      toast.error('Erreur lors du traitement du fichier');
    }
  };

  const handleImport = async () => {
    setCurrentStep('importing');
    setProgress(0);
    
    const results = {
      successful: 0,
      failed: 0,
      errors: [] as string[]
    };

    for (let i = 0; i < data.length; i++) {
      const apprenant = data[i];
      
      try {
        await apprenantService.addApprenant({
          nom: apprenant.nom,
          prenom: apprenant.prenom,
          email: apprenant.email || '',
          telephone: apprenant.phone || '',
          dateNaissance: new Date().toISOString().split('T')[0],
          adresse: '',
          nomParent: '',
          telephoneParent: '',
          niveau: 'CP1'
        });
        
        results.successful++;
      } catch (error) {
        results.failed++;
        results.errors.push(`${apprenant.nom} ${apprenant.prenom}: ${error instanceof Error ? error.message : 'Erreur inconnue'}`);
      }
      
      setProgress(Math.round(((i + 1) / data.length) * 100));
    }

    setImportResults(results);
    setCurrentStep(results.failed > 0 ? 'error' : 'success');
    
    if (results.successful > 0) {
      onSuccess();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'upload':
        return <FileUploader onFileSelect={handleFileSelect} />;
      case 'preview':
        return (
          <DataPreview 
            data={data} 
            onImport={handleImport}
            onBack={() => setCurrentStep('upload')}
          />
        );
      case 'importing':
        return <ImportProgress progress={progress} />;
      case 'success':
        return (
          <SuccessMessage 
            results={importResults}
            onClose={handleClose}
          />
        );
      case 'error':
        return (
          <ErrorDisplay 
            results={importResults}
            onClose={handleClose}
            onRetry={() => setCurrentStep('preview')}
          />
        );
      default:
        return null;
    }
  };

  return (
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
  );
};
