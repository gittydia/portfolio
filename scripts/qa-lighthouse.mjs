import lighthouse from 'lighthouse';
import { mkdir, writeFile } from 'node:fs/promises';

await mkdir('.qa-results', { recursive: true });
const output = [];
for (const mode of ['mobile', 'desktop']) {
  for (let run = 0; run < 3; run++) {
    const desktop = mode === 'desktop';
    const result = await lighthouse('http://127.0.0.1:4173/', {
      port: 9222, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      formFactor: mode,
      screenEmulation: { mobile: !desktop, width: desktop ? 1440 : 375, height: desktop ? 900 : 812, deviceScaleFactor: 1, disabled: false },
      throttling: desktop ? { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1, requestLatencyMs: 0, downloadThroughputKbps: 0, uploadThroughputKbps: 0 } : { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4, requestLatencyMs: 562.5, downloadThroughputKbps: 1474.56, uploadThroughputKbps: 675 },
    });
    if (!result) throw new Error('Lighthouse returned no report');
    await writeFile(`.qa-results/lighthouse-${mode}-${run + 1}.json`, result.report);
    const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([name, category]) => [name, Math.round(category.score * 100)]));
    output.push({ mode, run: run + 1, scores, cls: result.lhr.audits['cumulative-layout-shift'].numericValue, lcp: result.lhr.audits['largest-contentful-paint'].numericValue, failures: Object.values(result.lhr.audits).filter((audit) => audit.score !== null && audit.score < 1).map(({ id, title, displayValue }) => ({ id, title, displayValue })) });
    console.log(mode, run + 1, JSON.stringify(scores));
  }
}
await writeFile('.qa-results/lighthouse-summary.json', JSON.stringify(output, null, 2));
