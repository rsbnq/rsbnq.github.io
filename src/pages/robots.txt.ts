import type { APIRoute } from 'astro';
import { site } from '../config/site';

// Search engines and AI assistants are all welcome: being quoted in answers brings enquiries.
const aiCrawlers = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'];

export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

${aiCrawlers.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n')}

Sitemap: ${site.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
