# Clawlendar WebGL (Next.js + R3F)

This is the **Next.js + react-three-fiber** edition of Clawlendar web.

It is designed to coexist with your static version at:

- `/Users/hosuke/Connector/AGentic/clawlendar-web/index.html`
- `/Users/hosuke/Connector/AGentic/clawlendar-web/app.js`

## What this version adds

- Dedicated **Four Remainders** visualization layer (ascending/descending node, lunar apogee mean, earth perihelion)
- Real **3D WebGL orbital scene** for Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn
- Layer toggles for:
  - Orbit lines
  - Seven Governors
  - Four Remainders layer
  - Labels
- Optional canonical sync with `clawlendar` backend endpoint `POST /astro`

## Run locally

```bash
cd /Users/hosuke/Connector/AGentic/clawlendar-web/next-r3f
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Backend sync (optional)

In UI, set API base to your clawlendar server, for example:

- `http://127.0.0.1:8000`

Then click **Sync Canonical /astro**.

## Build and deploy

```bash
npm run build
npm run start
```

For Vercel, point root directory to:

- `clawlendar-web/next-r3f`
