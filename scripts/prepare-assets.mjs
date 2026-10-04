import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

await mkdir('public/media', { recursive: true });
const files = (await readdir('public')).filter((file) => /\.(png|jpg)$/i.test(file) && file !== 'social-preview.png');
for (const file of files) {
  const name = path.parse(file).name;
  await Promise.all([480, 960, 1440].map((width) => sharp(`public/${file}`).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`public/media/${name}-${width}.webp`)));
}
const social = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#232B2F"/><rect width="245" height="630" fill="#1C2225"/><g font-family="monospace" font-size="16" fill="#B7CBC2"><text x="20" y="42" fill="#D2BDF3">~/ dianne</text><text x="20" y="105" fill="#CBE3B3">welcome.md</text><text x="20" y="150">selected-work</text><text x="20" y="195">about-dianne</text><text x="20" y="240">say-hello</text><text x="720" y="290" text-anchor="middle" font-size="32" fill="#EEF1DF">Dianne Boholst</text><text x="720" y="330" text-anchor="middle" fill="#CBE3B3">backend developer / learner / builder</text><text x="720" y="420" text-anchor="middle">[ explore the connected things ]</text></g></svg>`;
await sharp(Buffer.from(social)).png().toFile('public/social-preview.png');
console.log(`Optimized ${files.length} images in three sizes and generated a social preview.`);
