// Every image under src/assets/gallery, grouped by folder.
// Folder "02-stages" → section "Stages"; file "01-wedding-stage.jpg" → caption "Wedding stage".
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/gallery/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true },
);

export interface Photo {
  /** Path inside src/assets/gallery, e.g. "02-stages/01-wedding-stage.jpg". */
  id: string;
  src: ImageMetadata;
  caption: string;
  category: string;
  /** Folder name without its number, e.g. "stages"; used to look up translated headings. */
  categoryKey: string;
}

const humanize = (name: string) => {
  const words = name.replace(/\.[^.]+$/, '').replace(/^\d+[-_ ]*/, '').replace(/[-_]+/g, ' ').trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

export const photos: Photo[] = Object.entries(files)
  .map(([path, mod]) => {
    const id = path.replace('../assets/gallery/', '');
    const parts = id.split('/');
    return {
      id,
      src: mod.default,
      caption: humanize(parts.at(-1)!),
      category: parts.length > 1 ? humanize(parts[0]) : 'Photos',
      categoryKey: parts.length > 1 ? parts[0].replace(/^\d+[-_ ]*/, '') : 'photos',
    };
  })
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));

export function photo(id: string): Photo {
  const found = photos.find((p) => p.id === id);
  if (!found) throw new Error(`No photo "${id}" in src/assets/gallery. Check the name in src/config/site.ts.`);
  return found;
}

/** Photos grouped by section folder, keyed by `categoryKey`. */
export function byCategory(): [string, Photo[]][] {
  const groups = new Map<string, Photo[]>();
  for (const p of photos) groups.set(p.categoryKey, [...(groups.get(p.categoryKey) ?? []), p]);
  return [...groups];
}
