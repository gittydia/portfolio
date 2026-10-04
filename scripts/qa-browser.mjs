import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const origin = 'http://127.0.0.1:4173';
const output = '.qa-results';
await mkdir(output, { recursive: true });
const browser = await chromium.connectOverCDP('http://localhost:9222');
const context = await browser.newContext();
const page = await context.newPage();
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const routes = [...sitemap.matchAll(/<loc>https:\/\/gittydia.vercel.app([^<]*)<\/loc>/g)].map((match) => match[1]);
const results = [];
for (const viewport of (process.env.QA_INTERACTIONS_ONLY ? [] : [{ width: 375, height: 812 }, { width: 768, height: 1024 }, { width: 1440, height: 900 }, { width: 1920, height: 1080 }])) {
  await page.setViewportSize(viewport);
  for (const route of routes) {
    await page.goto(origin + route);
    await page.evaluate(() => document.fonts.ready);
    for (const image of await page.locator('img').all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((element) => element.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForFunction(() => [...document.images].every((image) => image.complete));
    const state = await page.evaluate(() => ({
      overflow: document.documentElement.scrollWidth > innerWidth,
      brokenImages: [...document.images].filter((image) => !image.naturalWidth).map((image) => image.src),
      h1: document.querySelectorAll('h1').length,
      canonical: document.querySelector('link[rel=canonical]')?.getAttribute('href'),
      title: document.title,
      currentNavigation: document.querySelector('#site-index [aria-current]') !== null,
    }));
    const slug = route.replace(/[^a-z0-9]/gi, '-') || 'home';
    await page.screenshot({ path: `${output}/${slug}-${viewport.width}.png`, fullPage: true, animations: 'disabled' });
    const violations = [375, 1440].includes(viewport.width) ? (await new AxeBuilder({ page }).analyze()).violations.map(({ id, impact, nodes }) => ({ id, impact, targets: nodes.map((node) => node.target) })) : [];
    results.push({ route, width: viewport.width, ...state, violations });
    console.log(`${viewport.width} ${route} overflow=${state.overflow} images=${state.brokenImages.length} axe=${violations.length}`);
  }
}
if (results.length) await writeFile(`${output}/routes.json`, JSON.stringify({ results, errors }, null, 2));
assert.equal(errors.length, 0, 'Runtime or console errors');
assert(results.every((result) => !result.overflow && !result.brokenImages.length && result.h1 === 1 && !result.violations.length && result.currentNavigation), 'Route quality checks');

await page.setViewportSize({ width: 375, height: 812 });
await page.goto(origin);
await page.keyboard.press('Tab');
assert.equal(await page.locator(':focus').textContent(), 'Skip to content');
await page.keyboard.press('Enter');
assert.equal(await page.locator(':focus').getAttribute('id'), 'main-content');
await page.getByRole('button', { name: 'Index', exact: true }).click();
assert.equal(await page.locator('#site-index').isVisible(), true);
await page.keyboard.press('Escape');
assert.equal(await page.locator('#site-index').isVisible(), false);
assert.equal(await page.locator(':focus').textContent(), 'Index');
await page.getByRole('button', { name: 'Index', exact: true }).click();
await page.locator('#site-index').getByRole('link', { name: '02 About' }).click();
await page.getByText('Tools & ways of working', { exact: true }).click();
assert.equal(await page.getByRole('link', { name: 'Python', exact: true }).isVisible(), true);
await page.getByText('Education & certificates', { exact: true }).click();
assert.equal(await page.getByRole('link', { name: 'Verify credential' }).count(), 4);
await page.locator('.timeline summary').first().focus();
await page.keyboard.press('Enter');
assert.equal(await page.locator('.timeline details').first().getAttribute('open'), '');

await page.goto(origin);
await page.getByRole('button', { name: 'pause', exact: true }).click();
await page.waitForFunction(() => document.querySelector('canvas')?.dataset.animating === 'false');
assert.equal(await page.locator('canvas').getAttribute('data-animating'), 'false');
const drawing = await page.locator('canvas').evaluate((canvas) => canvas.toDataURL());
await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
assert.equal(await page.locator('canvas').evaluate((canvas) => canvas.toDataURL()), drawing, 'Paused drawing stays unchanged');
await page.getByRole('button', { name: 'Redraw the thread composition' }).click();
await page.waitForFunction((previous) => document.querySelector('canvas')?.toDataURL() !== previous, drawing);
await page.emulateMedia({ reducedMotion: 'reduce' });
await page.getByRole('button', { name: 'resume', exact: true }).click();
await page.waitForFunction(() => document.querySelector('canvas')?.dataset.animating === 'false');
assert.equal(await page.locator('canvas').getAttribute('data-animating'), 'false');
await page.screenshot({ path: `${output}/reduced-motion-mobile.png`, fullPage: true });
await page.emulateMedia({ reducedMotion: 'no-preference' });
await page.locator('#contact').scrollIntoViewIfNeeded();
await page.waitForFunction(() => document.querySelector('canvas')?.dataset.animating === 'false');

await page.getByText('Prefer to leave a message here?', { exact: true }).click();
await page.getByRole('button', { name: 'Send message' }).click();
assert.equal(await page.locator('#name').evaluate((input) => input.validity.valueMissing), true);
let requests = 0;
await page.route('https://api.emailjs.com/**', async (route) => { requests++; await route.fulfill({ status: 200, contentType: 'text/plain', body: 'OK' }); });
const fillForm = async () => {
  await page.getByLabel('Your name', { exact: true }).fill('Portfolio QA');
  await page.getByLabel('Email address', { exact: true }).fill('qa@example.com');
  await page.getByLabel('What is it about?', { exact: true }).fill('Intercepted QA request');
  await page.getByLabel('Your message', { exact: true }).fill('Local-only browser QA. No email is sent.');
};
await fillForm();
await page.getByRole('button', { name: 'Send message' }).click();
await page.getByRole('status').filter({ hasText: 'Your message is sent' }).waitFor();
await page.waitForFunction(() => document.querySelector('#name')?.value === '');
await page.unroute('https://api.emailjs.com/**');
await page.route('https://api.emailjs.com/**', async (route) => { requests++; await route.fulfill({ status: 400, contentType: 'text/plain', body: 'QA simulated failure' }); });
await fillForm();
await page.getByRole('button', { name: 'Send message' }).click();
await page.getByRole('status').filter({ hasText: 'could not be sent' }).waitFor();
assert.equal(await page.getByLabel('Your message', { exact: true }).inputValue(), 'Local-only browser QA. No email is sent.');
assert.equal(await page.getByRole('button', { name: 'Send message' }).isEnabled(), true);
await page.screenshot({ path: `${output}/contact-error-mobile.png`, fullPage: true });

for (const width of [320, 430, 1024]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(origin);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `Overflow at ${width}`);
}
const staticContext = await browser.newContext({ javaScriptEnabled: false });
const staticPage = await staticContext.newPage();
await staticPage.goto(origin + '/projects/Rulebox-F1/');
assert.equal(await staticPage.getByRole('heading', { level: 1 }).textContent(), 'Rulebox F1');
await staticContext.close();
await writeFile(`${output}/interactions.json`, JSON.stringify({ keyboard: 'pass', menu: 'pass', disclosures: 'pass', canvasPause: 'pass', canvasRedraw: 'pass', reducedMotion: 'pass', offscreenPause: 'pass', formValidation: 'pass', formSuccess: 'pass', formFailure: 'pass', interceptedEmailRequests: requests, extraWidths: [320, 430, 1024], noJavaScriptDetail: 'pass' }, null, 2));
await context.close();
await browser.close();
console.log('All route and interaction checks passed. No real emails sent.');
