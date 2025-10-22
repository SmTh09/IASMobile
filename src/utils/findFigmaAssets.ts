/**
 * Utility to find all figma:asset imports in the project
 * Run this to see which files still need to be updated
 * 
 * Usage: node -r esbuild-register utils/findFigmaAssets.ts
 * Or just check the console output
 */

import * as fs from 'fs';
import * as path from 'path';

interface AssetReference {
  file: string;
  line: number;
  asset: string;
  variableName: string;
}

function findFigmaAssets(dir: string, results: AssetReference[] = []): AssetReference[] {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    // Skip node_modules and hidden directories
    if (file.startsWith('.') || file === 'node_modules') {
      continue;
    }

    if (stat.isDirectory()) {
      findFigmaAssets(filePath, results);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        // Match: import imgName from "figma:asset/hash.ext";
        const match = line.match(/import\s+(\w+)\s+from\s+["']figma:asset\/([^"']+)["']/);
        if (match) {
          results.push({
            file: filePath,
            line: index + 1,
            variableName: match[1],
            asset: match[2],
          });
        }
      });
    }
  }

  return results;
}

function generateReport(results: AssetReference[]): void {
  console.log('\n=== Figma Asset Import Report ===\n');

  if (results.length === 0) {
    console.log('✅ No figma:asset imports found! All files are using the asset helper.\n');
    return;
  }

  console.log(`Found ${results.length} figma:asset import(s) that need updating:\n`);

  // Group by file
  const byFile = results.reduce((acc, ref) => {
    if (!acc[ref.file]) {
      acc[ref.file] = [];
    }
    acc[ref.file].push(ref);
    return acc;
  }, {} as Record<string, AssetReference[]>);

  Object.entries(byFile).forEach(([file, refs]) => {
    console.log(`📄 ${file}`);
    refs.forEach(ref => {
      console.log(`   Line ${ref.line}: ${ref.variableName} <- ${ref.asset}`);
    });
    console.log('');
  });

  console.log('\n=== How to Fix ===\n');
  console.log('Replace the import pattern with the asset helper:\n');
  console.log('  // OLD:');
  console.log('  import imgName from "figma:asset/hash.png";\n');
  console.log('  // NEW:');
  console.log('  import { getAsset } from "../utils/assets";');
  console.log('  const imgName = getAsset("hash.png", "Description");\n');
  console.log('See /EXPORT_FROM_FIGMA_GUIDE.md for details.\n');

  console.log('\n=== Asset Mapping Needed ===\n');
  console.log('Add these to /utils/assets.ts assetMap:\n');
  
  const uniqueAssets = [...new Set(results.map(r => r.asset))];
  uniqueAssets.forEach(asset => {
    const filename = path.basename(asset, path.extname(asset));
    console.log(`  "${asset}": "/assets/${filename}.png",`);
  });
  console.log('');
}

// Run the scan
const projectRoot = path.join(__dirname, '..');
const results = findFigmaAssets(projectRoot);
generateReport(results);

export { findFigmaAssets, AssetReference };
