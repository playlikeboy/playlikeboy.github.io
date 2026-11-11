// Prints the built /resume pages (general + one per role) to PDFs in public/.
// Usage: bun run build && bun run resume:pdf   (needs `playwright` available)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const root = join(process.cwd(), "out");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".png": "image/png" };

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  for (const candidate of [path, path + ".html", join(path, "index.html")]) {
    try {
      const body = await readFile(join(root, candidate));
      res.writeHead(200, { "content-type": types[extname(candidate)] ?? "application/octet-stream" });
      return res.end(body);
    } catch {}
  }
  res.writeHead(404).end();
});
await new Promise((resolve) => server.listen(0, resolve));
const { port } = server.address();

const browser = await chromium.launch();
const page = await browser.newPage();
await page.emulateMedia({ media: "print", colorScheme: "light" });
// The general resume and one tailored version per role.
const targets = [
  ["/resume", "public/resume.pdf"],
  ["/resume/sde", "public/resume-sde.pdf"],
  ["/resume/fde", "public/resume-fde.pdf"],
  ["/resume/devops", "public/resume-devops.pdf"],
];
for (const [route, path] of targets) {
  await page.goto(`http://localhost:${port}${route}`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path,
    format: "A4",
    margin: { top: "12mm", bottom: "12mm", left: "13mm", right: "13mm" },
  });
  console.log(`wrote ${path}`);
}
await browser.close();
server.close();
