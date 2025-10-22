#!/bin/bash

# Quick Batch Fix for figma:asset imports
# This script replaces all figma:asset imports with getAsset() calls

echo "🔧 Fixing all figma:asset imports..."
echo ""

# Find all .tsx and .ts files with figma:asset imports
files=$(find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/dist/*" -not -path "*/build/*" -exec grep -l "figma:asset/" {} \;)

count=0
for file in $files; do
  echo "📝 Fixing: $file"
  
  # Backup the file
  cp "$file" "$file.bak"
  
  # Replace figma:asset imports with getAsset pattern
  # This uses sed to transform:
  #   import imgName from "figma:asset/hash.png";
  # Into:
  #   const imgName = getAsset("hash.png", "Name");
  
  sed -i.tmp 's/import \([a-zA-Z0-9_]*\) from "figma:asset\/\([^"]*\)";/const \1 = getAsset("\2", "\1");/g' "$file"
  rm "$file.tmp" 2>/dev/null
  
  # Add getAsset import if not present
  if ! grep -q "import { getAsset }" "$file"; then
    # Find the first import line and add getAsset import after it
    sed -i.tmp '1,/^import/s/^\(import.*\)$/\1\nimport { getAsset } from "..\/utils\/assets";/' "$file"
    rm "$file.tmp" 2>/dev/null
  fi
  
  count=$((count + 1))
done

echo ""
echo "✅ Fixed $count files!"
echo ""
echo "🚀 Next: Run 'npm run dev' to start your app"
echo ""
echo "Note: Backup files saved as .bak - delete them once you verify everything works"
