import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { site } from '../config/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Greedy word wrap; SVG text has no line breaking of its own. */
function wrap(text: string, max: number): string[] {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    if (line && (line + ' ' + word).length > max) {
      lines.push(line);
      line = word;
    } else line = line ? `${line} ${word}` : word;
  }
  return line ? [...lines, line] : lines;
}

/**
 * The 1200×630 preview shown when a page is shared on WhatsApp, Facebook, etc.:
 * the original logo artwork and the page title on maroon, beside a photo from that page.
 * Text stays in English so it renders on any build machine's fonts.
 */
export async function renderOg({ title, photo }: { title: string; photo: string }): Promise<Uint8Array<ArrayBuffer>> {
  const file = (p: string) => readFile(join(process.cwd(), p));
  const logo = await sharp(await file('src/assets/brand/logo.png')).resize({ width: 500 }).toBuffer();
  const image = await sharp(await file(`src/assets/gallery/${photo}`))
    .resize(560, 630, { fit: 'cover', position: 'top' })
    .toBuffer();

  const titleLines = wrap(title, 26).slice(0, 3);
  const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="630">
    ${titleLines
      .map((l, i) => `<text x="60" y="${270 + i * 50}" font-family="Georgia, 'DejaVu Serif', serif" font-size="40" fill="#ffffff">${esc(l)}</text>`)
      .join('')}
    <text x="60" y="${270 + titleLines.length * 50 + 20}" font-family="Arial, 'DejaVu Sans', sans-serif" font-size="24" fill="#f6dcd8">VIP Road, Kolkata · up to ${site.capacity.total} guests</text>
    <rect x="60" y="520" width="440" height="56" rx="6" fill="#0e7a3e"/>
    <text x="280" y="557" text-anchor="middle" font-family="Arial, 'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" fill="#ffffff">WhatsApp ${site.phoneDisplay}</text>
  </svg>`);

  const png = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#3c0005' } })
    .composite([
      { input: logo, left: 50, top: 50 },
      { input: text, left: 0, top: 0 },
      { input: image, left: 640, top: 0 },
    ])
    .png()
    .toBuffer();
  return new Uint8Array(png);
}
