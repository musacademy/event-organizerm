const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.resolve('public/images');

const imageConfigs = {
  'hero-stage.jpg': { maxWidth: 1280, quality: 78 },
  'client-portrait.jpg': { maxWidth: 500, quality: 80 },
  'user-avatar.jpg': { maxWidth: 400, quality: 80 },
  'gathering-batu.jpg': { maxWidth: 1000, quality: 78 },
  'wedding-reception.jpg': { maxWidth: 1000, quality: 78 },
  'corporate-malang.jpg': { maxWidth: 1000, quality: 78 },
  'kediri-gala.jpg': { maxWidth: 1000, quality: 78 },
  'stage-concert.jpg': { maxWidth: 1000, quality: 78 },
  'floral-decor.jpg': { maxWidth: 800, quality: 78 },
  'interior-room-clean.jpg': { maxWidth: 1000, quality: 78 },
  'hero-card-clean.png': { maxWidth: 960, quality: 80 },
};

async function optimizeAll() {
  console.log('--- Starting Image Optimization ---');
  let totalBefore = 0;
  let totalWebp = 0;
  let totalJpg = 0;

  for (const [filename, conf] of Object.entries(imageConfigs)) {
    const filePath = path.join(dir, filename);
    if (!fs.existsSync(filePath)) continue;

    const baseName = filename.substring(0, filename.lastIndexOf('.'));
    const ext = path.extname(filename).toLowerCase();
    const statBefore = fs.statSync(filePath);
    totalBefore += statBefore.size;

    const webpPath = path.join(dir, `${baseName}.webp`);

    const inputBuffer = fs.readFileSync(filePath);

    // 1. Generate optimized WebP
    let pipelineWebp = sharp(inputBuffer);
    if (conf.maxWidth) {
      pipelineWebp = pipelineWebp.resize({ width: conf.maxWidth, withoutEnlargement: true });
    }
    const webpBuffer = await pipelineWebp.webp({ quality: conf.quality, effort: 6 }).toBuffer();
    fs.writeFileSync(webpPath, webpBuffer);
    totalWebp += webpBuffer.length;

    // 2. Re-encode the original JPG/PNG file in-place with optimization (for backwards compatibility)
    let pipelineOrig = sharp(inputBuffer);
    if (conf.maxWidth) {
      pipelineOrig = pipelineOrig.resize({ width: conf.maxWidth, withoutEnlargement: true });
    }

    let origBuffer;
    if (ext === '.jpg' || ext === '.jpeg') {
      origBuffer = await pipelineOrig.jpeg({ quality: conf.quality, progressive: true, mozjpeg: true }).toBuffer();
    } else if (ext === '.png') {
      origBuffer = await pipelineOrig.png({ compressionLevel: 9, quality: conf.quality }).toBuffer();
    }
    if (origBuffer) {
      fs.writeFileSync(filePath, origBuffer);
      totalJpg += origBuffer.length;
    }

    console.log(`[Optimized] ${filename}: ${(statBefore.size / 1024).toFixed(1)} KB -> WebP: ${(webpBuffer.length / 1024).toFixed(1)} KB | Compressed ${ext.toUpperCase()}: ${(origBuffer ? origBuffer.length / 1024 : 0).toFixed(1)} KB`);
  }

  console.log('-----------------------------------');
  console.log(`Total Original Size: ${(totalBefore / 1024).toFixed(1)} KB`);
  console.log(`Total WebP Size:     ${(totalWebp / 1024).toFixed(1)} KB (Saved: ${(((totalBefore - totalWebp) / totalBefore) * 100).toFixed(1)}%)`);
  console.log(`Total Optimized JPG: ${(totalJpg / 1024).toFixed(1)} KB (Saved: ${(((totalBefore - totalJpg) / totalBefore) * 100).toFixed(1)}%)`);
}

optimizeAll().catch(console.error);
