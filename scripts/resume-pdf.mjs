// Prints the built /resume page to public/resume.pdf.
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
await page.goto(`http://localhost:${port}/resume`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({
  path: "public/resume.pdf",
  format: "A4",
  margin: { top: "12mm", bottom: "12mm", left: "13mm", right: "13mm" },
});
await browser.close();
server.close();
console.log("wrote public/resume.pdf");
