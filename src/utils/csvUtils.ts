import Papa from "papaparse";
import { z } from "zod";

export const apprenantSchema = z.object({
  nom: z.string().min(1, "Le nom est requis"),
  prenom: z.string().min(1, "Le prénom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().min(1, "Le téléphone est requis"),
});

export type ApprenantImport = z.infer<typeof apprenantSchema>;

export interface ImportResult {
  successCount: number;
  errorCount: number;
  errorMessages: string[];
}

export const processCSVFile = (file: File): Promise<ApprenantImport[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const apprenants = results.data.map((row: any) => ({
          nom: row.nom?.trim(),
          prenom: row.prenom?.trim(),
          email: row.email?.trim(),
          phone: row.phone?.toString().trim(),
        }));
        resolve(apprenants);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
};

export const validateApprenant = (data: any): { isValid: boolean; message?: string } => {
  const result = apprenantSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((err) => `${err.path}: ${err.message}`);
    return {
      isValid: false,
      message: errors.join(", "),
    };
  }
  return { isValid: true };
};