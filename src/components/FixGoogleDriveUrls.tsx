/**
 * Componente para arreglar URLs de Google Drive en vehículos
 * 
 * Este componente permite:
 * - Ver qué URLs necesitan ser convertidas
 * - Aplicar las conversiones con un clic
 */

import { useState } from 'react';
import { fixGoogleDriveUrls, previewGoogleDriveUrlFixes } from '../utils/firebase/fixGoogleDriveUrls';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function FixGoogleDriveUrls() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');

  const handlePreview = async () => {
    setIsProcessing(true);
    setMessage('Verificando URLs...');
    
    try {
      await previewGoogleDriveUrlFixes();
      setMessage('✅ Revisa la consola del navegador (F12) para ver la vista previa');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error al previsualizar. Revisa la consola.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFix = async () => {
    if (!confirm('¿Estás seguro de que quieres convertir las URLs de Google Drive?')) {
      return;
    }

    setIsProcessing(true);
    setMessage('Arreglando URLs...');
    
    try {
      await fixGoogleDriveUrls();
      setMessage('✅ URLs arregladas! Recarga la página para ver los cambios.');
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error al arreglar URLs. Revisa la consola.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle>🔧 Arreglar URLs de Google Drive</CardTitle>
        <CardDescription>
          Convierte las URLs de Google Drive al formato correcto para que las imágenes de los vehículos se muestren correctamente.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Problema:</h3>
          <p className="text-sm text-muted-foreground">
            Las URLs de Google Drive en formato <code>/file/d/FILE_ID/view</code> no funcionan para mostrar imágenes.
            Necesitan ser convertidas al formato <code>/thumbnail?id=FILE_ID&sz=w400</code>.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Solución:</h3>
          <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
            <li>Presiona "Vista Previa" para ver qué URLs necesitan ser convertidas</li>
            <li>Revisa la consola del navegador (F12) para ver los detalles</li>
            <li>Presiona "Arreglar URLs" para aplicar los cambios</li>
            <li>Recarga la página para ver las imágenes</li>
          </ol>
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={handlePreview} 
            disabled={isProcessing}
            variant="outline"
          >
            👀 Vista Previa
          </Button>
          <Button 
            onClick={handleFix} 
            disabled={isProcessing}
          >
            🔧 Arreglar URLs
          </Button>
        </div>

        {message && (
          <div className={`p-4 rounded-md ${
            message.includes('✅') 
              ? 'bg-green-50 text-green-900 border border-green-200' 
              : message.includes('❌')
              ? 'bg-red-50 text-red-900 border border-red-200'
              : 'bg-blue-50 text-blue-900 border border-blue-200'
          }`}>
            {message}
          </div>
        )}

        <div className="pt-4 border-t">
          <h3 className="font-medium mb-2">💡 Consejo:</h3>
          <p className="text-sm text-muted-foreground">
            También puedes ejecutar estos comandos directamente en la consola del navegador (F12):
          </p>
          <pre className="bg-gray-100 p-2 rounded mt-2 text-xs overflow-x-auto">
{`import { previewGoogleDriveUrlFixes, fixGoogleDriveUrls } from './utils/firebase/fixGoogleDriveUrls';

// Vista previa
await previewGoogleDriveUrlFixes();

// Aplicar cambios
await fixGoogleDriveUrls();`}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
