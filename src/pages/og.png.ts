import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import { site } from '../config/site';

// The preview image shown when the site is shared on WhatsApp, Facebook, etc.:
// the original logo artwork beside a photo of the decorated entrance.
export const GET: APIRoute = async () => {
  const file = (p: string) => readFile(join(process.cwd(), p));
  const logo = await sharp(await file('src/assets/brand/logo.png')).resize({ width: 560 }).toBuffer();
  const photo = await sharp(await file('src/assets/gallery/01-entrance-and-exterior/00-entrance-decorated-with-flowers.jpg'))
    .resize(560, 630, { fit: 'cover', position: 'top' })
    .toBuffer();
  const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="630">
    <text x="320" y="360" text-anchor="middle" font-family="Georgia, 'DejaVu Serif', serif" font-size="34" fill="#ffffff">Banquet hall in Bangur Avenue, Kolkata</text>
    <text x="320" y="410" text-anchor="middle" font-family="Arial, 'DejaVu Sans', sans-serif" font-size="23" fill="#f6dcd8">Weddings, receptions and parties for up to ${site.capacity.total} guests</text>
    <text x="320" y="500" text-anchor="middle" font-family="Arial, 'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" fill="#fff200">WhatsApp ${site.phoneDisplay}</text>
  </svg>`);

  const png = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#3c0005' } })
    .composite([
      { input: logo, left: 40, top: 120 },
      { input: text, left: 0, top: 0 },
      { input: photo, left: 640, top: 0 },
    ])
    .png()
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
