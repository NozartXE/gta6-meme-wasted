// gta6-meme-x-01 entry — "WASTED: You Waited 13 Years for GTA 6".
//
// The post itself is the entry: a GTA 6 meme posted on X, its first picture
// carrying make.fun's ghost holding its magenta star coin, its text carrying
// the bounty link, the play code and the earn-money pitch. The house reads
// the post from X; this program only hands over the post's address.
//
// All this program does is copy POST.json from the repository root into the
// grader's output directory, where the gate reads it. Node 22, standard
// library only, no network, no clock, no files outside the repository —
// run it twice and it writes the same bytes both times.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/POST.json is byte for byte this directory's POST.json.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

try {
  writeFileSync(target, readFileSync(source));
} catch (err) {
  console.error(`Could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
