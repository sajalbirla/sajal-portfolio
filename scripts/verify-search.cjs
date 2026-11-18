// Check the deployed artifact without executing its browser JavaScript.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const build = path.resolve(__dirname, '../build');
const html = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const document = new JSDOM(html).window.document;
const canonical = document.querySelector('link[rel="canonical"]').href;
assert.equal(document.querySelectorAll('h1').length, 1);
assert.equal(document.querySelector('h1').textContent, 'Sajal Birla');
assert.ok(document.querySelector('main').textContent.includes('Autodesk'));
assert.ok(document.querySelector('main').textContent.includes('BigStep Technologies'));
assert.ok(document.querySelector('h2#skills-heading'));
assert.ok(!html.includes('%PUBLIC_URL%'));
const schema = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
assert.equal(schema.url, canonical);
assert.equal(schema.mainEntity.name, document.querySelector('h1').textContent);
const markdown = fs.readFileSync(path.join(build, 'index.md'), 'utf8');
for (const { id, question, answer } of require('../src/data/profile-questions.json')) {
  const article = document.getElementById(id);
  assert.equal(article.querySelector('h3').textContent, question);
  assert.equal(article.querySelector('p').textContent, answer);
  assert.ok(markdown.includes(answer));
}
const sitePath = new URL(canonical).pathname;
for (const element of document.querySelectorAll('a[href], img[src]')) {
  const url = element.getAttribute(element.tagName === 'IMG' ? 'src' : 'href');
  if (url.startsWith('#')) assert.ok(document.getElementById(url.slice(1)), `Missing anchor ${url}`);
  if (url.startsWith(sitePath)) {
    assert.ok(fs.existsSync(path.join(build, url.slice(sitePath.length))), `Missing file ${url}`);
  }
}
assert.ok(fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8').includes(`<loc>${canonical}</loc>`));
assert.ok(fs.readFileSync(path.join(build, 'robots.txt'), 'utf8').includes(`Sitemap: ${canonical}sitemap.xml`));
console.log('Verified static content, profile data, Markdown answers, anchors, assets, and sitemap.');
