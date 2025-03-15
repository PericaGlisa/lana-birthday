import fs from 'fs';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const svgBuffer = fs.readFileSync(join(__dirname, '../public/og-image.svg'));

sharp(svgBuffer)
  .resize(1200, 630)
  .png()
  .toFile(join(__dirname, '../public/og-image.png'))
  .then(() => console.log('Successfully converted SVG to PNG'))
  .catch(err => console.error('Error converting SVG to PNG:', err));