// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt, exactly as-is, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your code will compile on the third try — the first two were just the compiler getting to know you.";

// Guard: the entry must be one line, 1–120 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`entry.txt: ${LINE.length} chars written`);
