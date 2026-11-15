const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src/components/assets');
const destination = path.join(source, 'optimized');

async function main() {
  await fs.mkdir(destination, { recursive: true });
  const images = [
    ...[320, 480, 640, 960, 1200].map(width => ['memoji_self.png', `hero-${width}.webp`, width]),
    ...[320, 640].map(width => ['Self.png', `portrait-${width}.webp`, width]),
    ['logo.png', 'logo.webp', 320],
    ['bigstep_logo.jpeg', 'bigstep.webp', 160],
    ['ameyatrix_logo.png', 'ameyatrix.webp', 160],
    ['autodesk_logo.webp', 'autodesk.webp', 160],
    ...['javascript-1', 'react', 'node', 'git', 'Cpp', 'typescript', 'sass'].map(name => [`${name}.png`, `${name}.webp`, 48]),
  ];
  for (const [input, output, width] of images) {
    await sharp(path.join(source, input))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(destination, output));
    const { size } = await fs.stat(path.join(destination, output));
    console.log(`${output}: ${(size / 1024).toFixed(1)} KiB`);
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; });
