import type { APIRoute } from 'astro';
import { site, sameAs, fullAddress, mapsLink } from '../config/site';
import { t, occasionKeys, occasionRoutes } from '../i18n';

// Plain-text facts for AI assistants and answer engines (https://llmstxt.org).
export const GET: APIRoute = () => {
  const d = t('en');
  const { capacity } = site;
  const body = `# ${site.name}

> ${d.meta.description}

${site.name} (also listed as "${site.alternateName}") is an event venue at ${fullAddress}, India. ${d.landmark}.

## Key facts

- Type: banquet hall / event venue
- Address: ${fullAddress}
- Phone and WhatsApp: ${site.phoneDisplay}
- Email: ${site.email}
- Website: ${site.url} (also in Hindi at ${site.url}/hi/ and Bengali at ${site.url}/bn/)
- Map: ${mapsLink}
- Capacity: up to ${capacity.total} guests across ${capacity.floors} floors, about ${capacity.perFloor} per floor
- Ground floor: one hall that can be divided into two parts
- First floor: one hall with two rooms and a common area (used as changing rooms)
- Kitchen: separate caterers' kitchen with two rooms and a passage
- Lift: yes, to the first floor
- Catering: not cooked in-house; partner caterers, and outside caterers are allowed
- Decoration: through partner decorators
- Sound, projector, generator backup: arranged through the venue's electrician
- DJ and music: allowed
- Parking: no private parking; street parking nearby
- Prices: not published; ask on WhatsApp
- Hours for visits and calls: ${d.hours.value}
- Areas served: ${site.areaServed.join(', ')}

## Occasions hosted

${d.occasions.map((o) => `- ${o.name}: ${o.detail}`).join('\n')}

## How to book

Send the date, occasion and guest count on WhatsApp to ${site.phoneDisplay} (https://wa.me/${site.whatsapp}) or call the same number. Visits to see the halls can be arranged.

## Frequently asked questions

${d.faqs.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}

## Official profiles

${sameAs.map((url) => `- ${url}`).join('\n')}

## Pages

- [Home](${site.url}/): overview, booking steps, FAQ, location
- [Halls and services](${site.url}/services): floors, catering, décor, facilities
${occasionKeys.map((key) => `- [${d.occasionPages[key].nav}](${site.url}${occasionRoutes[key]}): ${d.occasionPages[key].lede}`).join('\n')}
- [Gallery](${site.url}/gallery): event photos
- [Contact](${site.url}/contact): WhatsApp enquiry form, phone, email, map
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
