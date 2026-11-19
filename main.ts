import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Entry for "Post a GTA 6 meme on X" (gta6-meme-x-01).
// The meme lives in meme.png; the X post carrying it is named in POST.json.
// This program copies POST.json to /output, where the grader reads it.
// Standard library only, no network. Run with Node 22: `node main.ts`.

const OUT_DIR = "/output";
const POST_FILE = "POST.json";

function main(): void {
  if (!existsSync(POST_FILE)) {
    throw new Error(`missing ${POST_FILE} next to main.ts`);
  }
  const post = JSON.parse(readFileSync(POST_FILE, "utf8")) as {
    url?: unknown;
  };
  if (typeof post.url !== "string" || !post.url.startsWith("https://x.com/")) {
    throw new Error(
      `POST.json must name an x.com post URL, got: ${String(post.url)}`
    );
  }
  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(POST_FILE, join(OUT_DIR, POST_FILE));
  console.log(`wrote ${join(OUT_DIR, POST_FILE)} -> ${post.url}`);
}

main();
