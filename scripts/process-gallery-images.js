import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const INPUT_DIR = './assets/images/01-originals';
const OUTPUT_DIR = './public/images/gallery';

// Max dimensions - images will fit within these bounds while preserving aspect ratio
const THUMBNAIL_MAX = 400;
const FULL_MAX = 1600;

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function processImage(filename, inputPath) {
  const name = path.parse(filename).name;
  const results = {};

  // Process thumbnail - preserve aspect ratio, fit within max bounds
  const thumbnailDir = path.join(OUTPUT_DIR, 'thumbnail');
  await ensureDir(thumbnailDir);
  const thumbnailPath = path.join(thumbnailDir, `${name}.webp`);

  try {
    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF first
      .resize(THUMBNAIL_MAX, THUMBNAIL_MAX, {
        fit: 'inside', // Preserve aspect ratio, fit within bounds
        withoutEnlargement: true
      })
      .webp({ quality: 85 })
      .toFile(thumbnailPath);

    results.thumbnail = `/images/gallery/thumbnail/${name}.webp`;
  } catch (err) {
    console.error(`Error processing thumbnail for ${filename}:`, err.message);
  }

  // Process full size - preserve aspect ratio, fit within max bounds
  const fullDir = path.join(OUTPUT_DIR, 'full');
  await ensureDir(fullDir);
  const fullPath = path.join(fullDir, `${name}.webp`);

  try {
    await sharp(inputPath)
      .rotate() // Auto-rotate based on EXIF first
      .resize(FULL_MAX, FULL_MAX, {
        fit: 'inside', // Preserve aspect ratio, fit within bounds
        withoutEnlargement: true
      })
      .webp({ quality: 90 })
      .toFile(fullPath);

    results.full = `/images/gallery/full/${name}.webp`;
  } catch (err) {
    console.error(`Error processing full size for ${filename}:`, err.message);
  }

  return results;
}

async function main() {
  console.log('Starting image processing...\n');
  console.log('Note: Images will preserve their original aspect ratio (portrait/landscape).\n');

  // Ensure output directories exist
  await ensureDir(OUTPUT_DIR);
  await ensureDir(path.join(OUTPUT_DIR, 'thumbnail'));
  await ensureDir(path.join(OUTPUT_DIR, 'full'));

  // Get all image files
  const files = await fs.readdir(INPUT_DIR);
  const imageFiles = files.filter(f =>
    /\.(jpg|jpeg|png|webp)$/i.test(f)
  );

  console.log(`Found ${imageFiles.length} images to process.\n`);

  const manifest = [];
  let processed = 0;

  for (const filename of imageFiles) {
    const inputPath = path.join(INPUT_DIR, filename);
    const name = path.parse(filename).name;

    try {
      const paths = await processImage(filename, inputPath);

      manifest.push({
        id: name,
        thumbnail: paths.thumbnail,
        full: paths.full,
        alt: `Olympus Masonry project - ${name}`
      });

      processed++;
      console.log(`[${processed}/${imageFiles.length}] Processed: ${filename}`);
    } catch (err) {
      console.error(`Failed to process ${filename}:`, err.message);
    }
  }

  // Write manifest file
  const manifestPath = path.join(OUTPUT_DIR, 'manifest.json');
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\nComplete! Processed ${processed} images.`);
  console.log(`Manifest saved to: ${manifestPath}`);
}

main().catch(console.error);
