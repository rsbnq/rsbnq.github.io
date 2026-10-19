# Ridhi Sidhi Banquet website

The website for Ridhi Sidhi Banquet, Bangur Avenue, Kolkata, live at https://rsbnq.in. It is built with [Astro](https://astro.build) and TypeScript, and GitHub Pages publishes it automatically.

## Everyday updates (no coding)

Every change below can be made in the browser on github.com. Open the file, click the pencil icon, edit, then click **Commit changes**. The live site updates about two minutes later.

| To change… | Edit |
| --- | --- |
| Phone, WhatsApp number, email, address, capacity | `src/config/site.ts` |
| Instagram, Facebook, YouTube, Google, Justdial links | `social` in `src/config/site.ts` |
| Any words on the site: occasions, facilities, FAQ, headings | `src/i18n/en.ts` (English), `hi.ts` (Hindi), `bn.ts` (Bengali) |
| Gallery photos | Upload into a section folder inside `src/assets/gallery/` (**Add file → Upload files**) |

The site has English (`/`), Hindi (`/hi/`) and Bengali (`/bn/`) versions. When a fact changes, update the same line in all three language files.

Gallery photos can come straight from a phone. They are resized automatically, and the file name becomes the caption (`wedding-stage-decor.jpg` → "Wedding stage decor").

Everything in `src/config/site.ts` also feeds the Google structured data, `llms.txt` (facts for AI assistants) and the WhatsApp messages, so one edit keeps them all in sync. Keep every fact true.

## How enquiries reach the owner

The enquiry form doesn't need a server or an inbox. When a visitor taps **Send on WhatsApp**, WhatsApp opens with their name, occasion, date, session and guest count already typed, addressed to the `whatsapp` number in `src/config/site.ts`. The owner just replies in WhatsApp.

## Developer notes

Requires Node 22.22 or newer.

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # type-check + build into dist/
```

- `.github/workflows/static.yml` builds and deploys on every push to `main`.
- `src/pages/llms.txt.ts`, `robots.txt.ts` and `og.png.ts` generate the AI-facts file, the crawler rules and the share-preview image at build time.
- Pages build as `services.html` etc., so old links keep working; canonical URLs drop the `.html`.
