/**
 * Asset Helper for Figma Make + Local Development
 * 
 * This utility handles asset imports across different environments:
 * - Figma Make: Uses figma:asset/ protocol
 * - Local Development: Uses /public/assets/ or placeholders
 */

// Asset mapping for local development
// Add your downloaded assets here with friendly names
const assetMap: Record<string, string> = {
  // Incadea Logo
  "24c902b1a9e277fbde3be49a0758d06802f9c23d.png": "/assets/incadea-logo.png",
  
  // Profile Images
  "8697229b110bc10e212043bccd9916edf1810dd9.png": "/assets/profile-image.png",
  
  // Arrow Icons
  "a9c7af49a72069c07fcb399c5738ee93261f21c5.png": "/assets/arrow-left.png",
  "de7dcb7d2c9b37a984d8d86f4825d174e3438b65.png": "/assets/arrow-right.png",
  
  // Icons
  "30f27ef93d5ac16799250a1a6333c2d9ec116134.png": "/assets/close-outline.png",
  "b87f451f4bcbbb5f11a0a5d7313cccffbf5ae40c.png": "/assets/checkmark-filled.png",
  
  // Mechanic Image
  "9cd7a0534f9d2fd17697ddea004cdeb684cf2759.png": "/assets/mechanic.png",
  
  // Car images (from CarList-224-331)
  "ef4dd3566d501a653e707bb5052434fb654dd9e0.png": "/assets/car-22.png",
  "ddeb37149cf5e1ffb3b15e50932de0325deb8de0.png": "/assets/car-23.png",
  "4375e1917f3d00d96f5e01f4e220387b140dd856.png": "/assets/car-24.png",
  "69da4e42fbd1deae0a75bdfe3d9519d8e13e3aab.png": "/assets/car-25.png",
  "cd7d082de2f6d9b9f50ed88a346a904ce89bdd0b.png": "/assets/car-26.png",
  
  // Car images (from CarList main)
  "901479a00ad97f34e4ecce86fafd722e5c231ff4.png": "/assets/car-red.png",
  "d79143797154b720e7bfa61ecddf09ca1a3e97e3.png": "/assets/car-gray.png",
  "69bec7266b37b74dca7051ae59a49c1da43b254c.png": "/assets/car-3.png",
  "5757059128b70b795e187f77d09176b243b9cab7.png": "/assets/car-orange.png",
  "533cb35a4334f4835e80e12e461cc23db8b89e3f.png": "/assets/car-6.png",
};

/**
 * Placeholder SVG generator for missing assets
 */
function createPlaceholder(name: string): string {
  const text = name.split('.')[0].substring(0, 8);
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='150' viewBox='0 0 200 150'%3E%3Crect width='200' height='150' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='IBM Plex Sans, sans-serif' font-size='12' fill='%23999'%3E${text}%3C/text%3E%3C/svg%3E`;
}

/**
 * Detects if running in Figma Make environment
 */
function isFigmaMake(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for Figma Make specific indicators
  const hostname = window.location.hostname;
  return hostname.includes('figma') || 
         hostname.includes('fig.run') ||
         // @ts-ignore - Figma Make might inject specific globals
         typeof window.__FIGMA_MAKE__ !== 'undefined';
}

/**
 * Get asset path for the current environment
 * 
 * @param figmaAssetId - The Figma asset ID (hash from figma:asset/HASH.ext)
 * @param fallbackName - Optional friendly name for the asset
 * @returns Asset URL/path suitable for the current environment
 */
export function getAsset(figmaAssetId: string, fallbackName?: string): string {
  // In Figma Make, use the figma:asset protocol
  if (isFigmaMake()) {
    return `figma:asset/${figmaAssetId}`;
  }
  
  // In local development, use mapped asset or placeholder
  if (assetMap[figmaAssetId]) {
    return assetMap[figmaAssetId];
  }
  
  // If no mapping exists, try to use a placeholder
  console.warn(`Asset not found in map: ${figmaAssetId}`);
  return createPlaceholder(fallbackName || figmaAssetId);
}

/**
 * Try to import a Figma asset with fallback
 * Use this in components that need to work in both environments
 * 
 * @example
 * const logo = tryImportAsset("24c902b1a9e277fbde3be49a0758d06802f9c23d.png", "Logo");
 */
export function tryImportAsset(figmaAssetId: string, name: string = "Asset"): string {
  try {
    // Try dynamic import in Figma Make environment
    if (isFigmaMake()) {
      return `figma:asset/${figmaAssetId}`;
    }
  } catch (error) {
    console.warn(`Failed to import Figma asset: ${figmaAssetId}`, error);
  }
  
  // Fallback to local asset or placeholder
  return getAsset(figmaAssetId, name);
}

/**
 * Batch get multiple assets
 * Useful for importing multiple images at once
 * 
 * @example
 * const [logo, car1, car2] = getAssets([
 *   "24c902b1a9e277fbde3be49a0758d06802f9c23d.png",
 *   "ef4dd3566d501a653e707bb5052434fb654dd9e0.png",
 *   "ddeb37149cf5e1ffb3b15e50932de0325deb8de0.png"
 * ]);
 */
export function getAssets(figmaAssetIds: string[]): string[] {
  return figmaAssetIds.map(id => getAsset(id));
}

/**
 * Add custom asset mapping at runtime
 * Useful for dynamically loaded assets
 */
export function registerAsset(figmaAssetId: string, localPath: string): void {
  assetMap[figmaAssetId] = localPath;
}

/**
 * Get all registered assets
 * Useful for debugging
 */
export function getAssetMap(): Record<string, string> {
  return { ...assetMap };
}
