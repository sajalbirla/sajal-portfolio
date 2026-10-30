const fs = require('node:fs');
const path = require('node:path');
const { heroSizes } = require('../src/data/image-layout.json');

const build = path.resolve(__dirname, '../build');
const { files } = JSON.parse(fs.readFileSync(path.join(build, 'asset-manifest.json'), 'utf8'));
const htmlPath = path.join(build, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// This site's entire stylesheet is small. Inline it to remove the blocking fetch,
// while keeping the generated file available for debugging and source maps.
const cssUrl = files['main.css'];
const css = fs.readFileSync(path.join(build, 'static/css', path.basename(cssUrl)), 'utf8')
  .replace(/\/\*# sourceMappingURL=.*?\*\//g, '');
if (css.includes('</style') || /url\(/i.test(css)) {
  throw new Error('Review CSS inlining: external URLs or closing style tags need special handling.');
}
if (Buffer.byteLength(css) > 24 * 1024) {
  throw new Error('Stylesheet exceeds the inlining budget; review the loading strategy.');
}
const cssLink = `<link href="${cssUrl}" rel="stylesheet">`;
if (!html.includes(cssLink)) throw new Error('Could not locate the generated stylesheet link.');
html = html.replace(cssLink, `<style>${css}</style>`);

const hero = [320, 480, 640, 960, 1200].map(width => {
  const url = files[`static/media/hero-${width}.webp`];
  if (!url) throw new Error(`Missing hero image ${width} in asset manifest.`);
  return { width, url };
});
const srcset = hero.map(({ width, url }) => `${url} ${width}w`).join(', ');
const preload = `<link rel="preload" as="image" type="image/webp" href="${hero.find(image => image.width === 640).url}" imagesrcset="${srcset}" imagesizes="${heroSizes}" fetchpriority="high">`;
html = html.replace('</head>', `${preload}</head>`);
fs.writeFileSync(htmlPath, html);
console.log('Inlined portfolio CSS and preloaded responsive hero images.');
