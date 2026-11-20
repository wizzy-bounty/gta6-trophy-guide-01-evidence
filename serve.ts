// Platinum Desk — Evidence Edition: local development server.
// Serves the static guide in app/ at http://localhost:8080 so it can be used
// and screenshotted without a build step: `node serve.ts [--port <n>]`.
// Node 22 standard library only; paths are confined to app/.

import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = resolve(fileURLToPath(new URL('./app', import.meta.url)));

function portFromArgs(argv: string[]): number {
  const flag = argv.indexOf('--port');
  const value = flag === -1 ? 8080 : Number(argv[flag + 1]);
  return Number.isInteger(value) && value > 0 && value < 65536 ? value : 8080;
}

const CONTENT_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

function resolveRequestPath(rawUrl: string): string | null {
  let pathname: string;
  try {
    pathname = decodeURIComponent(new URL(rawUrl, 'http://localhost').pathname);
  } catch {
    return null;
  }
  if (pathname.endsWith('/')) pathname += 'index.html';
  const candidate = resolve(join(appRoot, normalize(pathname)));
  if (candidate !== appRoot && !candidate.startsWith(appRoot + sep)) return null;
  return candidate;
}

const server = createServer((request, response) => {
  const file = request.url ? resolveRequestPath(request.url) : null;
  if (file === null || !existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }).end('not found');
    return;
  }
  response.writeHead(200, {
    'content-type': CONTENT_TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream',
    'content-length': statSync(file).size,
    'cache-control': 'no-store',
  });
  createReadStream(file).pipe(response);
});

const port = portFromArgs(process.argv.slice(2));
server.listen(port, '127.0.0.1', () => {
  console.log(`Platinum Desk app/ is being served at http://localhost:${port}`);
});
