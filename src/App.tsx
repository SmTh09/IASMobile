/**
 * Componente principal de la aplicación
 * 
 * Ahora usa el sistema de autenticación con React Router
 */

import AppRouter from './router';
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <>
      <AppRouter />
      <Toaster />
    </>
  );
}
