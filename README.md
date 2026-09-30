# Imber Hub

Etienne Fourie’s personal homepage at https://imber.me. Next.js App Router, React, TypeScript, Tailwind CSS and Lucide icons; no backend or database.

## Development

Use Node.js 20.9 or newer. Run `npm ci`, then `npm run dev` and open http://localhost:3000.

## Checks

Run `npm run build`, `npm run lint` and `npm run typecheck`.

## Editing

- `lib/projects.ts`: project information and destinations.
- `components/hub.tsx`: reusable page sections and copy.
- `components/visuals.tsx`: decorative SVG artwork.
- `app/globals.css`: theme, responsive layouts and reduced-motion support.
- `app/layout.tsx`: SEO, Open Graph and canonical metadata.
- `public/fonts`: locally hosted Geist fonts and license.

## Vercel

Import this repository using the Next.js preset. No environment variables are needed. Keep the default build command and output settings. Add imber.me as a custom domain and configure the DNS records provided by Vercel.

The project subdomains are separate deployments. Links point to finsite.imber.me, wardworks.imber.me and work.imber.me. The finance application at finapp.imber.me is intentionally reached through its marketing site.
