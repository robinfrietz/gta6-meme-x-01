import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry for "Post a GTA 6 meme on X" (gta6-meme-x-01).
// The meme lives in meme.png; the X post carrying it is named in POST.json.
// This program copies POST.json (and meme.png, so the grader can verify the
// posted image) to /output, where the grader reads them.
// Standard library only, no network. Run with Node 22: `node main.ts`.

const OUT_DIR = "/output";
// Resolve inputs relative to this script's own directory, not the caller's
// working directory, so the entry still runs when invoked from elsewhere.
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const POST_FILE = join(SCRIPT_DIR, "POST.json");
const MEME_FILE = join(SCRIPT_DIR, "meme.png");

// A real X post URL: https://x.com/<handle>/status/<digits>.
const POST_URL_RE = /^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/[0-9]+$/;

function main(): void {
  if (!existsSync(POST_FILE)) {
    throw new Error(`missing ${POST_FILE} next to main.ts`);
  }
  const post = JSON.parse(readFileSync(POST_FILE, "utf8")) as {
    url?: unknown;
  };
  if (typeof post.url !== "string" || !POST_URL_RE.test(post.url)) {
    throw new Error(
      `POST.json must name an x.com post URL (https://x.com/<handle>/status/<digits>), got: ${String(post.url)}`
    );
  }
  if (!existsSync(MEME_FILE)) {
    throw new Error(`missing ${MEME_FILE} next to main.ts`);
  }
  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(POST_FILE, join(OUT_DIR, "POST.json"));
  copyFileSync(MEME_FILE, join(OUT_DIR, "meme.png"));
  console.log(`wrote ${join(OUT_DIR, "POST.json")} -> ${post.url}`);
  console.log(`wrote ${join(OUT_DIR, "meme.png")}`);
}

main();
