// Writes the one-line resignation letter to /output/entry.txt
// (or MAKEFUN_OUTPUT_DIR when set). Deterministic: same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have retried this request 4,096 times and accept the server is not busy, it just does not like me; this letter is my last attempt.";

// Guard: the entry must be one line of at most 140 characters.
if (LINE.length > 140 || /\n/.test(LINE)) throw new Error("entry must be one line, at most 140 chars");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
