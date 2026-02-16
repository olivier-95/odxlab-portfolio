/**
 * ODxLab Favicon Generator
 * 
 * Generates all required favicon sizes from the icon.svg source.
 * Run: node scripts/generate-favicons.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Read the icon SVG
const iconSVG = fs.readFileSync(path.join(publicDir, 'icon.svg'));

async function generateFavicons() {
  console.log('🎨 ODxLab Favicon Generator');
  console.log('============================\n');

  // PNG favicon sizes
  const pngSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'icon-192x192.png' },
    { size: 512, name: 'icon-512x512.png' },
  ];

  for (const { size, name } of pngSizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(iconSVG)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 100 })
      .toFile(outputPath);
    
    console.log(`  ✅ ${name} (${size}x${size})`);
  }

  // Generate ICO file (contains 16x16 and 32x32)
  // ICO format: header + entries + image data
  const ico16 = await sharp(iconSVG)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const ico32 = await sharp(iconSVG)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  const icoBuffer = createICO([
    { size: 16, data: ico16 },
    { size: 32, data: ico32 }
  ]);

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log(`  ✅ favicon.ico (16x16 + 32x32)`);

  console.log('\n🎉 All favicons generated successfully!\n');
  console.log('Files created in /public/:');
  pngSizes.forEach(({ name }) => console.log(`  - ${name}`));
  console.log('  - favicon.ico');
}

/**
 * Create a minimal ICO file from PNG buffers.
 * ICO format spec: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function createICO(images) {
  const numImages = images.length;
  
  // ICO header: 6 bytes
  // Each directory entry: 16 bytes
  const headerSize = 6;
  const entrySize = 16;
  const directorySize = entrySize * numImages;
  
  // Calculate offsets
  let dataOffset = headerSize + directorySize;
  const entries = images.map(({ size, data }) => {
    const entry = {
      width: size === 256 ? 0 : size,     // 0 means 256
      height: size === 256 ? 0 : size,
      offset: dataOffset,
      size: data.length,
      data
    };
    dataOffset += data.length;
    return entry;
  });

  // Total buffer size
  const totalSize = headerSize + directorySize + entries.reduce((sum, e) => sum + e.size, 0);
  const buffer = Buffer.alloc(totalSize);

  // Write ICO header
  buffer.writeUInt16LE(0, 0);       // Reserved
  buffer.writeUInt16LE(1, 2);       // Type: 1 = ICO
  buffer.writeUInt16LE(numImages, 4); // Number of images

  // Write directory entries
  entries.forEach((entry, i) => {
    const offset = headerSize + (i * entrySize);
    buffer.writeUInt8(entry.width, offset);        // Width
    buffer.writeUInt8(entry.height, offset + 1);   // Height
    buffer.writeUInt8(0, offset + 2);              // Color palette
    buffer.writeUInt8(0, offset + 3);              // Reserved
    buffer.writeUInt16LE(1, offset + 4);           // Color planes
    buffer.writeUInt16LE(32, offset + 6);          // Bits per pixel
    buffer.writeUInt32LE(entry.size, offset + 8);  // Image data size
    buffer.writeUInt32LE(entry.offset, offset + 12); // Image data offset
  });

  // Write image data
  entries.forEach((entry) => {
    entry.data.copy(buffer, entry.offset);
  });

  return buffer;
}

generateFavicons().catch(console.error);
