/**
 * Automated Script to Fix All figma:asset/ Imports
 * 
 * This script replaces all direct figma:asset imports with the asset helper
 * Run this in your project root to fix all files at once
 * 
 * Usage: node utils/fixFigmaAssets.js
 */

const fs = require('fs');
const path = require('path');

// Files and directories to skip
const SKIP_PATTERNS = [
  'node_modules',
  '.git',
  'dist',
  'build',
  '.next',
  'fixFigmaAssets.js',
  'findFigmaAssets.ts'
];

/**
 * Check if a path should be skipped
 */
function shouldSkip(filePath) {
  return SKIP_PATTERNS.some(pattern => filePath.includes(pattern));
}

/**
 * Find all TypeScript/TSX files with figma:asset imports
 */
function findFilesWithFigmaAssets(dir, results = []) {
  if (shouldSkip(dir)) return results;
  
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    if (shouldSkip(filePath)) continue;

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findFilesWithFigmaAssets(filePath, results);
    } else if ((file.endsWith('.tsx') || file.endsWith('.ts')) && !file.endsWith('.d.ts')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      if (content.includes('figma:asset/')) {
        results.push(filePath);
      }
    }
  }

  return results;
}

/**
 * Fix a single file's figma:asset imports
 */
function fixFile(filePath) {
  console.log(`\n📝 Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  
  // Check if file already imports getAsset
  const hasGetAssetImport = content.includes("import { getAsset }");
  
  // Collect all figma:asset imports
  const figmaImportRegex = /import\s+(\w+)\s+from\s+["']figma:asset\/([^"']+)["'];?\s*$/gm;
  const matches = [...content.matchAll(figmaImportRegex)];
  
  if (matches.length === 0) {
    console.log('  ⚠️  No figma:asset imports found (might be already fixed)');
    return false;
  }
  
  console.log(`  Found ${matches.length} figma:asset import(s)`);
  
  // Extract variable names and asset IDs
  const imports = matches.map(match => ({
    fullMatch: match[0],
    varName: match[1],
    assetId: match[2]
  }));
  
  // Remove all figma:asset import lines
  imports.forEach(imp => {
    content = content.replace(imp.fullMatch + '\n', '');
  });
  
  // Find the position to add getAsset import
  // Look for existing imports
  const importSectionMatch = content.match(/^import\s+.*?from\s+["'].*?["'];?\s*$/m);
  
  if (importSectionMatch) {
    const lastImportIndex = content.lastIndexOf(importSectionMatch[0]) + importSectionMatch[0].length;
    
    // Add getAsset import if not already present
    if (!hasGetAssetImport) {
      // Determine the correct path to utils/assets based on file location
      const relativeDepth = filePath.split(path.sep).filter(p => p !== '.' && p !== '..').length - 2; // -2 for root and filename
      const utilsPath = '../'.repeat(Math.max(relativeDepth, 1)) + 'utils/assets';
      
      const getAssetImport = `\nimport { getAsset } from "${utilsPath}";\n`;
      content = content.slice(0, lastImportIndex) + getAssetImport + content.slice(lastImportIndex);
    }
    
    // Add const declarations for each asset after imports
    const constDeclarations = imports.map(imp => {
      const friendlyName = imp.varName
        .replace(/^img/, '')
        .replace(/^Img/, '')
        .replace(/(\d+)$/, ' $1')
        .replace(/([A-Z])/g, ' $1')
        .trim();
      
      return `const ${imp.varName} = getAsset("${imp.assetId}", "${friendlyName}");`;
    }).join('\n');
    
    // Find a good spot to insert const declarations (after imports, before first function/export)
    const afterImportsMatch = content.match(/\n\n(?=(?:export |function |class |const |let |var |interface |type ))/);
    
    if (afterImportsMatch) {
      const insertPos = afterImportsMatch.index + 2; // After the two newlines
      content = content.slice(0, insertPos) + constDeclarations + '\n\n' + content.slice(insertPos);
    } else {
      // Fallback: add after last import
      const lastNewlineAfterImports = content.indexOf('\n\n', lastImportIndex);
      if (lastNewlineAfterImports > -1) {
        content = content.slice(0, lastNewlineAfterImports + 2) + constDeclarations + '\n' + content.slice(lastNewlineAfterImports + 2);
      }
    }
  }
  
  // Only write if content changed
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('  ✅ Fixed!');
    
    // Show what was changed
    imports.forEach(imp => {
      console.log(`     ${imp.varName} <- ${imp.assetId.substring(0, 8)}...`);
    });
    
    return true;
  }
  
  return false;
}

/**
 * Main execution
 */
function main() {
  console.log('🔧 Figma Asset Import Fixer\n');
  console.log('Scanning for files with figma:asset/ imports...\n');
  
  const projectRoot = path.join(__dirname, '..');
  const filesToFix = findFilesWithFigmaAssets(projectRoot);
  
  if (filesToFix.length === 0) {
    console.log('✨ No files found with figma:asset imports!\n');
    console.log('All files are already using the asset helper.\n');
    return;
  }
  
  console.log(`Found ${filesToFix.length} file(s) to fix:\n`);
  filesToFix.forEach(f => console.log(`  - ${f}`));
  
  console.log('\n' + '='.repeat(60));
  console.log('Starting fixes...');
  console.log('='.repeat(60));
  
  let fixedCount = 0;
  
  filesToFix.forEach(file => {
    try {
      if (fixFile(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.log(`  ❌ Error: ${error.message}`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`✅ Complete! Fixed ${fixedCount} of ${filesToFix.length} files`);
  console.log('='.repeat(60));
  
  if (fixedCount > 0) {
    console.log('\n📋 Next Steps:\n');
    console.log('1. Run your dev server: npm run dev');
    console.log('2. Check for any compilation errors');
    console.log('3. (Optional) Download real assets to /public/assets/');
    console.log('\nSee /EXPORT_FROM_FIGMA_GUIDE.md for details on using real images.\n');
  }
}

// Run the script
main();
