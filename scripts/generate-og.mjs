// Generates the default social-share image at public/og-default.png.
// Run manually with: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d1117"/>
      <stop offset="100%" stop-color="#161b22"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="#10b981"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <rect x="80" y="96" width="88" height="88" rx="20" fill="#10b981"/>
    <text x="124" y="158" font-size="52" font-weight="700" fill="#ffffff" text-anchor="middle">S</text>
    <text x="80" y="362" font-size="78" font-weight="700" fill="#e8e4da">Shivanshu Agrawal</text>
    <text x="80" y="442" font-size="38" font-weight="400" fill="#9ba398" font-style="italic">Software · systems · things I am learning</text>
    <text x="80" y="560" font-size="30" font-weight="400" fill="#34d399">shivanshuag.com</text>
  </g>
</svg>
`;

const out = fileURLToPath(new URL('../public/og-default.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
