# linkerdog

Frontend landing page for [www.linkerdog.work](https://www.linkerdog.work/).

The page introduces:

- [AgentHub](https://github.com/hawkingrei/agenthub)
- [RARA](https://github.com/hawkingrei/rara)

## Stack

- Vite
- React
- TypeScript
- Plain CSS
- Cloudflare Pages static output

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Cloudflare Pages settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: repository root

If using a custom deploy command, use:

```bash
npm run deploy
```

Do not use `npx wrangler deploy` for this project; it is a Cloudflare Pages
site and should be deployed with `wrangler pages deploy`.

## Internationalization

Supported language routes:

- `/en/`
- `/zh/`
- `/es/`
- `/fr/`

Translations live in `src/i18n/translations.ts`. Language detection and route
definitions live in `src/i18n/languages.ts`.
