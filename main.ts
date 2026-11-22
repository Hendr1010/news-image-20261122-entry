import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry image is rendered at build time and committed beside this file.
// This program only copies it to the output path the judge reads.
// Nothing is installed, fetched or drawn at run time: standard library only.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
mkdirSync("/output", { recursive: true });
copyFileSync(source, "/output/entry.png");
