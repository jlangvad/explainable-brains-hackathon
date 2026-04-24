export const REGISTER_URL = 'https://luma.com/aes5eyzk'

export const VENUE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=H%C3%B8jbro+Plads+10%2C+1200+K%C3%B8benhavn+K%2C+Denmark'

export const APPLIED_FUTURES_URL = 'https://appliedfutures.io/'

export const VIBRAINT_URL = 'https://vibraint.dk/'

export const SITE = {
  title: 'Explainable Brains Hackathon — Brain Imaging & AI | Copenhagen, May 26 2026',
  description:
    'Free neuroscience hackathon in Copenhagen on May 26, 2026. Use Claude Code and real brain imaging data from Vibraint to build interpretable tools for drug discovery. Sponsored by Anthropic. 60 seats.',
} as const

const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')
