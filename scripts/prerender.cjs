// Render the actual React tree at build time so crawlers and visitors receive
// the same content. React takes over with createRoot when JavaScript loads.
process.env.NODE_ENV = 'production';
const fs = require('node:fs');
const path = require('node:path');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { transformSync } = require('@babel/core');
const project = path.resolve(__dirname, '..');
const source = path.join(project, 'src') + path.sep;
const build = path.join(project, 'build');
const { files } = require(path.join(build, 'asset-manifest.json'));
const homepage = require('../package.json').homepage;
process.env.PUBLIC_URL = new URL(homepage).pathname.replace(/\/$/, '');
const previousJs = require.extensions['.js'];
const extensions = ['.scss', '.css', '.webp', '.png', '.jpeg', '.jpg'];
const previous = Object.fromEntries(extensions.map(extension => [extension, require.extensions[extension]]));

try {
  require.extensions['.js'] = (module, filename) => {
    if (!filename.startsWith(source)) return previousJs(module, filename);
    const { code } = transformSync(fs.readFileSync(filename, 'utf8'), {
      filename, babelrc: false, configFile: false,
      // CRA's test transform emits CommonJS for Node, without a second bundler.
      envName: 'test', presets: [['babel-preset-react-app', { runtime: 'automatic' }]],
    });
    module._compile(code, filename);
  };
  for (const extension of ['.scss', '.css']) {
    require.extensions[extension] = module => { module.exports = {}; };
  }
  for (const extension of ['.webp', '.png', '.jpeg', '.jpg']) {
    require.extensions[extension] = (module, filename) => {
      const asset = files[`static/media/${path.basename(filename)}`];
      if (!asset) throw new Error(`Missing built asset: ${filename}`);
      module.exports = asset;
    };
  }
  const App = require('../src/App').default;
  const markup = renderToString(React.createElement(App));
  const htmlPath = path.join(build, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');
  const root = '<div id="root"></div>';
  if (!html.includes(root)) throw new Error('Expected an empty React root before prerendering.');
  fs.writeFileSync(htmlPath, html.replace(root, () => `<div id="root">${markup}</div>`));

  console.log('Rendered portfolio HTML.');
} finally {
  require.extensions['.js'] = previousJs;
  for (const extension of extensions) {
    if (previous[extension]) require.extensions[extension] = previous[extension];
    else delete require.extensions[extension];
  }
}
