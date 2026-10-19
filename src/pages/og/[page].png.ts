import type { APIRoute, GetStaticPaths } from 'astro';
import { renderOg } from '../../lib/og';
import { t, occasionKeys, occasionRoutes } from '../../i18n';

// One share image per page, at /og/<page>.png (shared by the English, Hindi and Bengali versions).
export const getStaticPaths = (() => {
  const d = t('en');
  const pages = [
    { page: 'home', title: 'Banquet hall for weddings, receptions and family celebrations', photo: '01-entrance-and-exterior/00-renovated-front-by-day.jpg' },
    { page: 'services', title: d.services.title, photo: '04-halls-and-dining/01-hall-with-stage-set-up.jpg' },
    { page: 'gallery', title: 'Photos of weddings, receptions and events', photo: '02-stages/00-heart-stage-with-white-sofa.jpg' },
    { page: 'contact', title: 'Check your date on WhatsApp', photo: '01-entrance-and-exterior/02-entrance-lit-for-a-wedding-night.jpg' },
    ...occasionKeys.map((key) => ({
      page: occasionRoutes[key].slice(1),
      title: d.occasionPages[key].title,
      photo: d.occasionPages[key].photos[0],
    })),
  ];
  return pages.map(({ page, ...props }) => ({ params: { page }, props }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOg(props as { title: string; photo: string });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
