# Clawlendar Web

Interactive international calendar frontend for **Clawlendar**.

This folder now contains two frontends:

- **Static MVP** (existing): `index.html` + `app.js` + `styles.css`
- **Next.js + WebGL lab** (new): `next-r3f/`

This project is designed for deployment on **Vercel** and focuses on:

- Real monthly calendar view
- Month mode switching:
  - `Gregorian Grid`
  - `True Source Month` (real non-Gregorian month boundaries via API)
- Calendar switching (Gregorian, ROC, Japanese, Buddhist, Islamic, Hebrew, Persian, Chinese where browser supports)
- Internationalized UI (`English`, `Simplified Chinese`, `Traditional Chinese`, `Japanese`, `Arabic`)
- Timezone switching
- Zodiac wheel visualization (seven governors + major aspects)
- Planetary glyph rendering (☉☽☿♀♂♃♄) and Four Remainders glyphs (☊☋⚸)
- Day details sidebar (solar term / sexagenary / lunar profile)
- Day details sidebar (solar term / sexagenary / lunar profile / Bazi / Huangli / moon phase)
- Life context panel (birth -> now timeline, role/space anchors, weather-aware world prompt)
- Human weather panel (use-my-location + weather-now query)
- Optional live fetch from Clawlendar API:
  - `/day-profile`
  - `/calendar-month`
  - `/life-context`
  - `/weather-now`
  - `/weather-at-time`

## Live demo

- [clawlendar-web.vercel.app](https://clawlendar-web.vercel.app/)

## Live Architecture

- `clawlendar-web` (this repo): static frontend UI on Vercel
- `clawlendar` core service: MCP + FastAPI + CLI in your main project

This separation keeps the agent-facing conversion engine pure and stable, while the web UI can iterate quickly.

## Run locally

```bash
cd clawlendar-web
python3 -m http.server 5173
# open http://127.0.0.1:5173
```

## Run Next.js + react-three-fiber version

```bash
cd clawlendar-web/next-r3f
npm install
npm run dev
# open http://localhost:3000
```

This Next.js edition includes:

- dedicated Four Remainders layer
- WebGL 3D orbit scene
- optional canonical sync from `POST /astro`

## Connect to API

In the page, set **Clawlendar API Base** to your backend, for example:

- `http://127.0.0.1:8000`
- `https://your-clawlendar-api.example.com`

You can also prefill with query param:

`https://your-site.vercel.app/?api=https://your-clawlendar-api.example.com`

## Deploy to Vercel

### Option 1: Vercel dashboard

1. Import this project into Vercel.
2. Framework preset: **Other**.
3. Build command: leave empty.
4. Output directory: leave empty.
5. Deploy.

### Option 2: Vercel CLI

```bash
npm i -g vercel
cd clawlendar-web
vercel
vercel --prod
```

## Notes

- Calendar rendering uses browser `Intl.DateTimeFormat` calendar support.
- Exact availability depends on browser runtime.
- Cosmic wheel and day details can run on local approximation, but for canonical agent pipelines use API `/day-profile` and `/calendar-month`.
- `life_context` supports birth/now continuity + optional weather enrichment (needs API and latitude/longitude for best results).
- Weather source: Open-Meteo (`forecast` + `archive`) via backend API. Input can come from manual latitude/longitude or browser geolocation.
- `weather-now` / `weather-at-time` endpoints require a backend that includes these commands (newer Clawlendar build). If unavailable, API returns `501`.
- When connected to latest Clawlendar API, frontend forwards `locale` (`zh-CN` / `zh-TW`) so solar term and sexagenary labels are returned in the selected Chinese variant.
- Latest `day-profile` also returns `metaphysics` block (Eastern + Western), used for Bazi and almanac cards in sidebar.
