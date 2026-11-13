import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.tsx');
  const html = await readFile('dist/index.html', 'utf8');
  if (!html.includes('<!--app-html-->')) throw new Error('Prerender placeholder missing');
  await writeFile('dist/index.html', html.replace('<!--app-html-->', renderToString(React.createElement(App))));
} finally {
  await server.close();
}
