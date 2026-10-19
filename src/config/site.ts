// Business facts that are the same in every language. Change a value, push, and every page,
// the WhatsApp messages, Google's structured data and llms.txt update together.
// Words shown to visitors (occasions, FAQ, facilities…) live in src/i18n/en.ts, hi.ts and bn.ts.

export const site = {
  name: 'Ridhi Sidhi Banquet',
  alternateName: 'Ridhi Sidhi Banquet Hall',
  url: 'https://rsbnq.in',

  // Phone in international format without "+" or spaces; used for tel: and WhatsApp links.
  phone: '919681104488',
  phoneDisplay: '+91 96811 04488',
  // Change this if WhatsApp enquiries should go to a different number.
  whatsapp: '919681104488',
  email: 'rsibanquet@gmail.com',

  address: {
    street: '117/2, Block C, Bangur Avenue',
    locality: 'Kolkata',
    region: 'West Bengal',
    regionCode: 'IN-WB',
    postalCode: '700055',
    country: 'IN',
  },
  // Copy the exact pin from Google Maps (right-click the pin → the numbers at the top) to sharpen local search.
  geo: null as { lat: number; lng: number } | null,
  areaServed: ['Bangur Avenue', 'Lake Town', 'Dum Dum', 'Baguiati', 'Kestopur', 'Salt Lake', 'Kolkata'],

  // Social and listing pages. Paste the full link to show its icon in the footer
  // (and tell Google and AI assistants these profiles belong to the banquet). Leave '' to hide.
  social: {
    instagram: 'https://www.instagram.com/rsibanquet/',
    facebook: 'https://www.facebook.com/ridhisidhi.banquet',
    youtube: '',
    googleBusiness: '',
    justdial: '',
    linktree: 'https://linktr.ee/rsbnq',
  },

  // Hours for visits and calls (24-hour clock). The words shown on the page are in the language files under `hours`.
  hours: { opens: '10:00', closes: '20:00' },

  capacity: {
    total: 300,
    floors: 2,
    perFloor: 150,
  },
} as const;

export const sameAs: string[] = Object.values(site.social as Record<string, string>).filter((url) => url !== '');

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}`;
export const mapsQuery = encodeURIComponent(`${site.name}, ${fullAddress}`);
export const mapsLink = site.geo
  ? `https://www.google.com/maps/search/?api=1&query=${site.geo.lat},${site.geo.lng}`
  : `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://maps.google.com/maps?q=${mapsQuery}&output=embed`;
export const telLink = `tel:+${site.phone}`;
