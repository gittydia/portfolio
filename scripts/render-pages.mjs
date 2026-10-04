import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'vite';

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } });
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
try {
  const { pages, render } = await vite.ssrLoadModule('/src/prerender.tsx');
  let template = await readFile('dist/index.html', 'utf8');
  for (const match of template.matchAll(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g)) {
    const css = await readFile(path.join('dist', match[1]), 'utf8');
    template = template.replace(match[0], `<style>${css}</style>`);
  }
  for (const page of pages) {
    const title = escape(`${page.title} | Dianne Boholst`);
    const description = escape(page.description.replace(/\s+/g, ' ').trim());
    const url = `https://gittydia.vercel.app${encodeURI(page.path)}`;
    const html = template.replace('<div id="root"></div>', `<div id="root" data-route="${escape(encodeURI(page.path))}">${render(page.path)}</div>`)
      .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
      .replace(/(<meta\s+name="description"\s+content=")[^"]*/, `$1${description}`)
      .replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*/g, `$1${title}`)
      .replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*/g, `$1${description}`)
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
    const directory = path.join('dist', page.path);
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, 'index.html'), html);
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map((page) => `<url><loc>https://gittydia.vercel.app${encodeURI(page.path)}</loc></url>`).join('')}</urlset>`);
  console.log(`Prerendered ${pages.length} pages with unique metadata and sitemap.`);
} finally { await vite.close(); }
