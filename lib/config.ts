export const REGISTER_URL = 'https://luma.com/aes5eyzk'

export const VENUE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Mesh+Matrikel1+Copenhagen'

export const APPLIED_FUTURES_URL = 'https://appliedfutures.io/'

export const VIBRAINT_URL = 'https://vibraint.dk/'

export const SITE = {
  title: 'Explainable Brains Hackathon — Brain Imaging & AI | Copenhagen, May 20 2026',
  description:
    'Free neuroscience hackathon in Copenhagen on May 20, 2026. Use Claude Code and real brain imaging data from Vibraint to build interpretable tools for drug discovery. Sponsored by Anthropic. 60 seats.',
} as const

const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')
