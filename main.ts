// One-Line Laugh-Off — "My printer can smell a deadline"
// Writes the joke line to /output/entry.txt.
// The line is 78 characters: short, concrete, twist in the last words.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My printer can smell a deadline; it only runs out of ink the night before one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
