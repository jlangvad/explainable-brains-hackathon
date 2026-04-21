# Explainable Brains Hackathon — Copenhagen

Next.js + TypeScript site for the May 20th, 2026 Claude Code hackathon.

## Develop

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build & run production

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Section components; `Reveal` / `PillarList` are `'use client'`
- `lib/content.ts` — all page copy (edit here, not in components)
- `lib/config.ts` — `REGISTER_URL` + site metadata
- `Claude_hackathon_invite_draft.html` — original design source (kept for reference)

## Registration link

Change the event registration URL in one place: `lib/config.ts` → `REGISTER_URL`.
