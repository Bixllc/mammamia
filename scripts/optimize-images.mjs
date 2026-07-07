import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const imgDir = path.resolve("public/img");

const carts = ["cart-a", "cart-b", "cart-c", "cart-d"];
const galleries = ["gallery-1", "gallery-2", "gallery-3"];

async function convertAlpha(name, maxWidth) {
  const input = path.join(imgDir, `${name}.png`);
  const output = path.join(imgDir, `${name}.webp`);
  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(output);
  const before = statSync(input).size;
  const after = statSync(output).size;
  console.log(`${name}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}

async function convertFlat(name, maxWidth, quality = 85) {
  const input = path.join(imgDir, `${name}.png`);
  const output = path.join(imgDir, `${name}.webp`);
  await sharp(input)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);
  const before = statSync(input).size;
  const after = statSync(output).size;
  console.log(`${name}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}

for (const c of carts) await convertAlpha(c, 1400);
for (const g of galleries) await convertAlpha(g, 1200);
await convertFlat("flyer", 1400, 85);

console.log("done");
