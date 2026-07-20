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
  <rect x="0" y="0" width="1200" height="8" fill="#2563eb"/>
  <g font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
    <rect x="80" y="96" width="88" height="88" rx="20" fill="#2563eb"/>
    <text x="124" y="156" font-size="52" font-weight="700" fill="#ffffff" text-anchor="middle">S</text>
    <text x="80" y="360" font-size="76" font-weight="800" fill="#e6edf3">Shivanshu Agrawal</text>
    <text x="80" y="440" font-size="38" font-weight="400" fill="#9198a1">Software · systems · things I am learning</text>
    <text x="80" y="560" font-size="30" font-weight="500" fill="#58a6ff">shivanshuag.com</text>
  </g>
</svg>
`;

const out = fileURLToPath(new URL('../public/og-default.png', import.meta.url));
await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
