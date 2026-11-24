// Fortune Cookie Wisdom for Developers — make.fun entry
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt, exactly as-is, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your code will compile on the third try — the first two were just the compiler getting to know you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`entry.txt: ${LINE.length} chars written`);
