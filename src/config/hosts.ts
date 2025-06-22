
// Configuration des URLs et hosts de l'application AKILI
export const config = {
  // URLs de base
  baseUrl: import.meta.env.PROD 
    ? 'https://akili-education.cg' 
    : 'http://localhost:5173',
  
  // API endpoints
  api: {
    baseUrl: import.meta.env.PROD
      ? 'https://api.akili-education.cg'
      : 'http://localhost:3000/api',
    
    endpoints: {
      auth: '/auth',
      users: '/users',
      schools: '/schools',
      students: '/students',
      teachers: '/teachers',
      games: '/games',
      analytics: '/analytics',
      notifications: '/notifications'
    }
  },
  
  // Services externes
  external: {
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL || '',
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || ''
    },
    
    // URLs de support
    support: {
      documentation: 'https://docs.akili-education.cg',
      community: 'https://community.akili-education.cg',
      status: 'https://status.akili-education.cg'
    }
  },
  
  // Informations de contact
  contact: {
    emails: {
      support: 'support@akili-education.cg',
      partnerships: 'partenaires@akili-education.cg',
      training: 'formations@akili-education.cg',
      general: 'contact@akili-education.cg'
    },
    
    phones: {
      support: '+242 06 956 53 90',
      partnerships: '+242 06 956 53 91',
      training: '+242 06 956 53 92'
    },
    
    address: {
      street: 'Avenue de la Paix',
      city: 'Brazzaville',
      country: 'République du Congo',
      postalCode: 'BP 1234'
    }
  },
  
  // Réseaux sociaux
  social: {
    facebook: 'https://facebook.com/akili.education',
    twitter: 'https://twitter.com/akili_education',
    linkedin: 'https://linkedin.com/company/akili-education',
    youtube: 'https://youtube.com/akili-education'
  }
};

// Helper functions pour construire les URLs
export const buildApiUrl = (endpoint: string) => {
  return `${config.api.baseUrl}${endpoint}`;
};

export const buildAssetUrl = (path: string) => {
  return `${config.baseUrl}${path}`;
};

export default config;
