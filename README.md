# Explainable Brains Hackathon

**Copenhagen · Tuesday May 26th, 2026 · 16:00 - 20:00**

The Explainable Brains Hackathon is a free, in-person neuroscience and AI hackathon in Copenhagen, Denmark. Cross-disciplinary teams use [Claude Code](https://claude.ai) and real brain imaging data from [Vibraint](https://vibraint.dk/) to build tools that make complex brain data interpretable for drug discovery.

## Why this exists

Neurological conditions are among the fastest-growing health challenges globally, yet the brain remains largely a mystery. Brain research generates vast volumes of imaging, spatial, and molecular data — but most of it stays locked in specialist pipelines, inaccessible to the people who could act on it. The science is ready. The tooling isn't.

AI coding tools like Claude Code are rapidly expanding what's possible. This hackathon brings professionals from across fields together to turn that potential into working prototypes — because better tools mean better treatments for brain disease.

## The challenge

> *"How can we make brain imaging data accessible and interpretable?"*

Teams work with real brain imaging data provided by [Vibraint](https://vibraint.dk/), whose platform processes complex 3D microscopy scans of rodent brains into interactive, interpretable brain maps. The full challenge brief is shared with participants after registration.

Teams approach this from different angles: data analysis and visualization, natural language interfaces, AI-powered tools, or something else entirely. All approaches are valid. Working prototypes only.

## The format

Simple by design. Vibraint presents a real challenge with real data. Teams form across disciplines and build for 90 minutes. Then every team demos a working prototype. No slides, just what you made.

| Time  | Activity                                  |
|-------|-------------------------------------------|
| 16:00 | Doors open                                |
| 16:05 | Welcome                                   |
| 16:10 | Challenge brief presented                 |
| 16:25 | Teams form and build (90 min)             |
| 18:55 | Demos (3 min per team)                    |
| 19:20 | Judging and wrap-up                       |
| 19:40 | Networking                                |
| 20:00 | Close                                     |

## Who it's for

STEM students, graduates, and young professionals — including product management and adjacent roles. No neuroscience background required. Teams are deliberately cross-functional: biologists, data scientists, software engineers, and product people working side by side on a shared problem.

## Organisers

- **Jacob Langvad Nilsson** — Claude Community Ambassador and co-founder of [Applied Futures](https://appliedfutures.io/). Host.
- **Diana Meda** — AI & Data Engineer, co-host from the Claude Code Community and Danish Data Science Community.
- **Johanna Perens** — Co-founder and CTO of Vibraint. Guides the challenge vision with deep expertise in whole-brain imaging and computational neuroscience.
- **Alicia Parra Acero** — Staff Scientist in AI and computational imaging at the Danish Cancer Institute. Frames the challenge from a data science and AI perspective.

## Sponsors and partners

- **Anthropic** — Sponsor
- **Applied Futures** — Co-host
- **Vibraint** — Data and challenge partner
- **Danish Data Science Community** — Co-host

## Venue

Mesh Matrikel1 (Workbar, Community Stage)
Hojbro Plads 10, 1200 Copenhagen K, Denmark

## Register

The hackathon is free. 60 seats. [Register here.](https://luma.com/aes5eyzk)

---

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

### Build

```bash
npm run build
npm start
```

### Project structure

- `app/` — Next.js App Router (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — Section components
- `lib/content.ts` — All page copy (edit here, not in components)
- `lib/config.ts` — Registration URL and site metadata
