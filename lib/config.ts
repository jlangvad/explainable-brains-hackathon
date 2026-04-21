export const REGISTER_URL = 'https://luma.com/aes5eyzk'

export const SITE = {
  title: 'Explainable Brains Hackathon — Copenhagen, May 20th',
  description:
    'From signals to understanding — a 3-hour sprint to make complex brain imaging data accessible, interpretable, and actionable.',
} as const

const vercelUrl =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')
