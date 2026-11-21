// Platinum Desk — Evidence Edition: entry program (Node 22, standard library only).
//
// The guide itself is the static site in app/ (open app/index.html in a browser;
// `node serve.ts` serves it locally). This program is the hand-in step: it
// prepares a clean output directory, copies app/ and screenshots/ into it and
// writes dossier.json there with the vendored make.fun library, byte for byte
// the way the scorer builds it. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's container.

import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const repoDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The output directory may be a mount point: never remove the directory
// itself, only clear what is inside it, so repeated runs are idempotent.
function clearDirectoryContents(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const entry of readdirSync(dir)) {
    rmSync(join(dir, entry), { recursive: true, force: true });
  }
}

function copyTree(from: string, to: string): void {
  if (!existsSync(from)) return;
  mkdirSync(to, { recursive: true });
  cpSync(from, to, { recursive: true });
}

clearDirectoryContents(outputDir);
copyTree(join(repoDir, 'app'), join(outputDir, 'app'));
copyTree(join(repoDir, 'screenshots'), join(outputDir, 'screenshots'));

// Caps mirror the scorer's gate: at most 4 screenshots of 256 KiB each, at
// most 993 app files / 48 MiB of app content, dossier text capped at 160 KiB.
const DOSSIER_CAPS = {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
};
const dossier = buildDossier(outputDir, DOSSIER_CAPS);
writeFileSync(join(outputDir, 'dossier.json'), dossier);
