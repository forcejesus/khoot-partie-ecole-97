
import Papa from 'papaparse';

export interface ApprenantImport {
  nom: string;
  prenom: string;
  email?: string;
  phone?: string;
}

export const processCSVFile = (file: File): Promise<ApprenantImport[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data as any[];
        const processedData = data.map((row) => ({
          nom: row.nom || row.Nom || '',
          prenom: row.prenom || row.Prénom || row.Prenom || '',
          email: row.email || row.Email || '',
          phone: row.phone || row.Phone || row.telephone || row.Telephone || row.Téléphone || ''
        })).filter(item => item.nom && item.prenom);
        
        resolve(processedData);
      },
      error: (error) => {
        reject(error);
      }
    });
  });
};

export const validateApprenant = (data: ApprenantImport): { isValid: boolean; message: string } => {
  if (!data.nom || !data.prenom) {
    return { isValid: false, message: "Nom et prénom sont obligatoires" };
  }
  
  // Pas de validation de l'email - accepter n'importe quelle valeur
  return { isValid: true, message: "" };
};
