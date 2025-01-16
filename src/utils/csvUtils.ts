export interface ApprenantImport {
  nom: string;
  prenom: string;
  email: string;
  phone: string;
}

export const processCSVFile = async (file: File): Promise<ApprenantImport[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n");
      const apprenants: ApprenantImport[] = [];

      for (const line of lines) {
        const [nom, prenom, email, phone] = line.split(",");
        if (nom && prenom && email && phone) {
          apprenants.push({ nom, prenom, email, phone });
        }
      }
      resolve(apprenants);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};

export const validateApprenant = (apprenant: ApprenantImport) => {
  if (!apprenant.nom) {
    return { isValid: false, message: "Le nom est requis." };
  }
  if (!apprenant.prenom) {
    return { isValid: false, message: "Le prénom est requis." };
  }
  if (!apprenant.email) {
    return { isValid: false, message: "L'email est requis." };
  }
  if (!apprenant.phone) {
    return { isValid: false, message: "Le téléphone est requis." };
  }
  return { isValid: true, message: "" };
};
