// Assembles index.html from src/. No dependencies: `node tools/build.mjs`
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(root, p), "utf8");

// config.js first so every world reads contact/form settings from one place.
const js = [read("src/config.js"), read("src/vendor.js"), read("src/app.js")]
  .join("\n")
  .replace(/<\/script/gi, "<\\/script");
const css = read("src/styles.css").replace(/<\/style/gi, "<\\/style");

const html = read("src/template.html")
  .replace("/*@APP_JS*/", () => js)
  .replace("/*@APP_CSS*/", () => css);

writeFileSync(join(root, "index.html"), html);
console.log(`index.html written (${(html.length / 1024).toFixed(0)} KB)`);
