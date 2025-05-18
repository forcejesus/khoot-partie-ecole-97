
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "next-themes";
import App from './App.tsx';
import './index.css';
import { Toaster } from '@/components/ui/sonner';

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <App />
    <Toaster position="top-right" richColors />
  </ThemeProvider>
);
