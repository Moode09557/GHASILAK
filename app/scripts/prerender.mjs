import { readFile, writeFile } from 'node:fs/promises';
import { html } from '../.prerender/prerender.js';
const file = new URL('../dist/index.html', import.meta.url);
let output = (await readFile(file, 'utf8')).replace('<!--prerender-->', html);
const base = process.env.SITE_URL?.replace(/\/$/, '');
if (base) {
  const url = new URL(base);
  if (!['https:', 'http:'].includes(url.protocol)) throw Error('SITE_URL must be HTTP(S)');
  const safe = (base + '/').replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  output = output.replace('</head>', `<link rel="canonical" href="${safe}"/><meta property="og:url" content="${safe}"/></head>`).replace('content="./assets/ghasilak_og.webp"', `content="${safe}assets/ghasilak_og.webp"`);
  await writeFile(new URL('../dist/sitemap.xml', import.meta.url), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${safe}</loc></url></urlset>`);
  await writeFile(new URL('../dist/robots.txt', import.meta.url), `User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`);
}
await writeFile(file, output);
console.log('Static HTML rendered. Upload the contents of dist/ to your hosting.');
