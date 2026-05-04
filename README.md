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

Cloudflare Workers settings:

- Deploy command: `npm run deploy`
- Root directory: repository root

The deploy script builds the Vite app first, then uploads `dist` as Worker
static assets through Wrangler:

```bash
npm run deploy
```

## Internationalization

Supported language routes:

- `/en/`
- `/zh/`
- `/es/`
- `/fr/`

Translations live in `src/i18n/translations.ts`. Language detection and route
definitions live in `src/i18n/languages.ts`.
