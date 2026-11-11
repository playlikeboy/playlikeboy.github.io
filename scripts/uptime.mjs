// Checks each live product once and appends the result to status/history.json.
// Run hourly by .github/workflows/uptime.yml, which commits the data to the
// `status` branch so main (and the Pages deploy) is never touched.
// Usage: node scripts/uptime.mjs <dir>
import fs from "node:fs";
import path from "node:path";

export const SITES = [
  { name: "Portfolio", url: "https://playlikeboy.github.io/" },
  { name: "SopKit", url: "https://sopkit.github.io/" },
  { name: "CampusLoop", url: "https://campusloop.space/" },
  { name: "IndexFast", url: "https://indexfast.co/" },
  { name: "Debo", url: "https://debo.life/" },
  { name: "MCP Pure", url: "https://mcppure.shraj.workers.dev/" },
];

const KEEP = 24 * 30; // hourly checks for 30 days

async function check(site) {
  const started = Date.now();
  try {
    const res = await fetch(site.url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    return { status: res.status, ok: res.ok, ms: Date.now() - started };
  } catch (error) {
    return { status: 0, ok: false, ms: Date.now() - started, error: String(error?.name || error) };
  }
}

const dir = process.argv[2] || "status";
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, "history.json");
let history = {};
try {
  history = JSON.parse(fs.readFileSync(file, "utf8"));
} catch {
  history = {};
}

const at = new Date().toISOString();
const results = await Promise.all(SITES.map(async (site) => ({ site, result: await check(site) })));
const summary = { updated: at, sites: [] };
for (const { site, result } of results) {
  const runs = [...(history[site.url]?.runs || []), { at, ...result }].slice(-KEEP);
  history[site.url] = { name: site.name, runs };
  const up = runs.filter((r) => r.ok).length;
  summary.sites.push({
    name: site.name,
    url: site.url,
    current: result,
    uptime30d: runs.length ? Math.round((up / runs.length) * 10000) / 100 : null,
    checks: runs.length,
    avgMs: Math.round(runs.filter((r) => r.ok).reduce((a, r) => a + r.ms, 0) / Math.max(up, 1)),
  });
  console.log(`${site.name}: ${result.status} in ${result.ms} ms`);
}
fs.writeFileSync(file, JSON.stringify(history));
fs.writeFileSync(path.join(dir, "summary.json"), JSON.stringify(summary, null, 1));
