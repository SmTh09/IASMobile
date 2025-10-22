#!/usr/bin/env node

/**
 * Simple script to fix ALL figma:asset imports at once
 * Run with: node fix-all-assets.mjs
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Files to skip
const SKIP = ['node_modules', '.git', 'dist', 'build', '.next', 'fix-all-assets.mjs'];

// Find all TypeScript files
function findFiles(dir, results = []) {
  const files = readdirSync(dir);
  
  for (const file of files) {
    if (SKIP.some(s => file.includes(s))) continue;
    
    const path = join(dir, file);
    const stat = statSync(path);
    
    if (stat.isDirectory()) {
      findFiles(path, results);
    } else if (path.endsWith('.tsx') || path.endsWith('.ts')) {
      results.push(path);
    }
  }
  
  return results;
}

// Calculate correct relative path from file to utils/assets
function getRelativePath(filePath) {
  const fileDir = dirname(filePath);
  const utilsPath = join(__dirname, 'utils', 'assets');
  let relativePath = relative(fileDir, utilsPath);
  
  // Convert Windows paths to Unix style
  relativePath = relativePath.replace(/\\/g, '/');
  
  // Remove .ts extension and ensure it starts with ./
  relativePath = relativePath.replace(/\.ts$/, '');
  if (!relativePath.startsWith('.')) {
    relativePath = './' + relativePath;
  }
  
  return relativePath;
}

// Fix a single file
function fixFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Check if it has figma:asset imports
  if (!content.includes('figma:asset/')) {
    return false;
  }
  
  console.log(`📝 ${filePath.replace(__dirname + '/', '')}`);
  
  // Extract all figma:asset imports
  const regex = /import\s+(\w+)\s+from\s+["']figma:asset\/([^"']+)["'];?\s*\n/g;
  const matches = [...content.matchAll(regex)];
  
  if (matches.length === 0) return false;
  
  // Collect asset declarations
  const declarations = [];
  
  // Remove each import and collect info
  matches.forEach(match => {
    const [fullMatch, varName, assetId] = match;
    content = content.replace(fullMatch, '');
    declarations.push(`const ${varName} = getAsset("${assetId}", "${varName}");`);
  });
  
  // Add getAsset import if not present
  if (!content.includes('import { getAsset }')) {
    // Calculate correct relative path
    const utilsPath = getRelativePath(filePath);
    
    // Find first import to add after
    const firstImportMatch = content.match(/^import\s+.+from.+;?\s*$/m);
    if (firstImportMatch) {
      const importEnd = content.indexOf(firstImportMatch[0]) + firstImportMatch[0].length;
      content = content.slice(0, importEnd) + 
                `\nimport { getAsset } from "${utilsPath}";` +
                content.slice(importEnd);
    }
  }
  
  // Add const declarations after imports
  const lastImportMatch = content.match(/\nimport[^\n]+\n(?!import)/);
  if (lastImportMatch) {
    const insertPos = lastImportMatch.index + lastImportMatch[0].length;
    content = content.slice(0, insertPos) +
              '\n' + declarations.join('\n') + '\n' +
              content.slice(insertPos);
  }
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Fixed ${matches.length} import(s)`);
    return true;
  }
  
  return false;
}

// Main
console.log('🔧 Fixing all figma:asset imports...\n');

const files = findFiles(__dirname);
const tsxFiles = files.filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

let fixed = 0;
for (const file of tsxFiles) {
  try {
    if (fixFile(file)) fixed++;
  } catch (err) {
    console.log(`  ❌ Error in ${file}: ${err.message}`);
  }
}

console.log(`\n✅ Fixed ${fixed} files!`);
console.log('\n🚀 Run: npm run dev\n');
