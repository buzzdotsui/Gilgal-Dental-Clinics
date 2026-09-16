// Image compression script — run once with: node scripts/compress-images.mjs
// Uses sharp which is bundled with Next.js — no extra install needed.
import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public", "images");

const targets = [
  { src: "hero/slideshow-2.png", maxWidth: 1920, quality: 85 },
  { src: "hero/slideshow-3.png", maxWidth: 1920, quality: 85 },
  { src: "hero/group-picture.png", maxWidth: 1920, quality: 85 },
  { src: "hero/slideshow-1.jpg", maxWidth: 1920, quality: 85 },
  { src: "dr-ugbo.png", maxWidth: 800, quality: 88 },
];

for (const { src, maxWidth, quality } of targets) {
  const inputPath = path.join(publicDir, src);
  const outputPath = path.join(publicDir, src); // overwrite in place

  try {
    const before = (await stat(inputPath)).size;
    const img = sharp(inputPath);
    const meta = await img.metadata();

    const needsResize = (meta.width ?? 0) > maxWidth;
    const pipeline = needsResize ? img.resize(maxWidth, null, { withoutEnlargement: true }) : img;

    if (src.endsWith(".png")) {
      await pipeline.png({ quality, compressionLevel: 9 }).toBuffer().then(async (buf) => {
        await sharp(buf).toFile(outputPath);
      });
    } else {
      await pipeline.jpeg({ quality, mozjpeg: true }).toBuffer().then(async (buf) => {
        const { writeFile } = await import("fs/promises");
        await writeFile(outputPath, buf);
      });
    }

    const after = (await stat(inputPath)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);
    console.log(`✓ ${src}: ${(before / 1024 / 1024).toFixed(2)}MB → ${(after / 1024 / 1024).toFixed(2)}MB (${saving}% smaller)`);
  } catch (err) {
    console.error(`✗ ${src}:`, err.message);
  }
}

console.log("\nDone. All images optimized.");
