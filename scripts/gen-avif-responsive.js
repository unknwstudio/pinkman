// Generates responsive AVIF variants (-p-500, -p-800, -p-1080) for case cover images.
// Run: node scripts/gen-avif-responsive.js

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const WIDTHS = [500, 800, 1080]
const QUALITY = 62

// Bases (no extension). Source is preferred: png > webp > avif (lossless → lossy cascade)
const COVERS = [
  'public/images/_cases/roscosmos-den-kosmonavtiki/roscosmos-den-kosmonavtiki-cover',
  'public/images/_cases/polenov/polenov-cover',
  'public/images/_cases/norma/norma-cover',
  'public/images/_cases/sibur/sibur-cover',
  'public/images/_cases/nova/nova-cover',
  'public/images/_cases/yagno-kazakh/horizontal',
  'public/images/_cases/yandex-split/image 2090012112',
  'public/images/_cases/bootlegger/image 2090012112',
]

async function run() {
  for (const base of COVERS) {
    // Pick best source (lowest lossy compression)
    let src = null
    for (const ext of ['.png', '.webp', '.avif']) {
      const p = base + ext
      if (fs.existsSync(p)) { src = p; break }
    }
    if (!src) { console.warn(`⚠  No source found for: ${base}`); continue }

    for (const w of WIDTHS) {
      const out = `${base}-p-${w}.avif`
      if (fs.existsSync(out)) {
        console.log(`  skip (exists): ${path.basename(out)}`)
        continue
      }
      process.stdout.write(`  → ${path.basename(out)} ... `)
      await sharp(src)
        .resize(w, null, { withoutEnlargement: true })
        .avif({ quality: QUALITY })
        .toFile(out)
      const kb = Math.round(fs.statSync(out).size / 1024)
      console.log(`${kb} KB`)
    }
    console.log(`✓  ${path.basename(base)}`)
  }
  console.log('\nDone.')
}

run().catch(err => { console.error(err); process.exit(1) })
