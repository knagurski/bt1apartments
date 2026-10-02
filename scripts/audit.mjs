// One-shot accessibility audit: drives the installed Google Chrome over CDP
// pipe (no TCP needed) and runs axe-core against every built page,
// serving dist/ via request interception (sandbox blocks local servers).
import puppeteer from "puppeteer-core";
import axe from "axe-core";
import { readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist");
const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".json": "application/json",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const browser = await puppeteer.launch({
  executablePath:
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  pipe: true,
  args: [
    "--headless",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-dev-shm-usage",
    "--no-first-run",
  ],
});

const pages = [
  "/",
  "/apartments/",
  "/jamesclow/",
  "/margaritaplaza/",
  "/titanicquarter/",
  "/rates/",
  "/reputation/",
  "/aboutbelfast/",
];

const summary = {};
for (const path of pages) {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const url = new URL(req.url());
    if (url.host === "audit.local") {
      let file = join(DIST, url.pathname);
      try {
        if (statSync(file).isDirectory()) file = join(file, "index.html");
        const body = readFileSync(file);
        req.respond({
          status: 200,
          contentType: MIME[extname(file)] ?? "application/octet-stream",
          body,
        });
      } catch {
        req.respond({ status: 404, body: "not found" });
      }
    } else {
      req.abort();
    }
  });
  await page.goto(`http://audit.local${path}`, { waitUntil: "load" });
  await page.addScriptTag({ content: axe.source });
  const results = await page.evaluate(() => axe.run(document));
  await page.close();
  for (const v of results.violations) {
    const key = `${v.id} [${v.impact}]`;
    summary[key] ??= { help: v.help, pages: {}, selectors: new Set() };
    summary[key].pages[path] = v.nodes.length;
    for (const n of v.nodes.slice(0, 4))
      summary[key].selectors.add(n.target.join(" "));
  }
}
await browser.close();
for (const [k, v] of Object.entries(summary)) {
  console.log(
    `\n## ${k}\n${v.help}\npages: ${JSON.stringify(v.pages)}\neg: ${[...v.selectors].slice(0, 4).join(" | ")}`,
  );
}
console.log("\ndone");
