
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
      const lines = text.split('\n');
      const apprenants: ApprenantImport[] = [];

      // Ignorer la première ligne si c'est un en-tête
      const startIndex = lines[0].toLowerCase().includes('nom') ? 1 : 0;

      for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line) {
          // Gérer à la fois les séparateurs virgule et point-virgule
          const values = line.includes(';') ? line.split(';') : line.split(',');
          const [nom, prenom, email, phone] = values.map(value => value.trim());
          
          if (nom && prenom && email) {
            apprenants.push({
              nom,
              prenom,
              email,
              phone: phone || ''
            });
          }
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

  // Validation basique de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(apprenant.email)) {
    return { isValid: false, message: "L'email n'est pas valide." };
  }

  return { isValid: true, message: "" };
};
