import type { Metadata } from 'next'
import { Bebas_Neue, Lora, JetBrains_Mono } from 'next/font/google'
import { SITE, SITE_URL } from '@/lib/config'
import './globals.css'

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'hackathon copenhagen',
    'brain imaging hackathon',
    'neuroscience hackathon',
    'AI hackathon',
    'Claude Code hackathon',
    'drug discovery hackathon',
    'Anthropic',
    'Vibraint',
    'brain data',
    'Copenhagen 2026',
  ],
  authors: [
    { name: 'Jacob Langvad Nilsson' },
    { name: 'Diana Meda' },
  ],
  creator: 'Claude Code Community Copenhagen',
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: '/',
    type: 'website',
    locale: 'en_DK',
    siteName: 'Explainable Brains Hackathon',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      name: 'Explainable Brains Hackathon',
      description: SITE.description,
      startDate: '2026-05-20T16:00:00+02:00',
      endDate: '2026-05-20T19:00:00+02:00',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      maximumAttendeeCapacity: 60,
      isAccessibleForFree: true,
      location: {
        '@type': 'Place',
        name: 'Mesh Matrikel1',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Gothersgade 11',
          postalCode: '1123',
          addressLocality: 'Copenhagen',
          addressRegion: 'Capital Region',
          addressCountry: 'DK',
        },
      },
      organizer: [
        {
          '@type': 'Organization',
          name: 'Claude Code Community Copenhagen',
          url: 'https://claude.ai',
        },
        {
          '@type': 'Organization',
          name: 'Applied Futures',
        },
        {
          '@type': 'Organization',
          name: 'Vibraint',
          description:
            'Vibraint builds tools to accelerate drug discovery for brain diseases, processing complex 3D microscopy scans into interactive, interpretable brain maps.',
        },
      ],
      sponsor: {
        '@type': 'Organization',
        name: 'Anthropic',
        url: 'https://anthropic.com',
      },
      performer: [
        {
          '@type': 'Person',
          name: 'Jacob Langvad Nilsson',
          jobTitle: 'Claude Community Ambassador',
          affiliation: {
            '@type': 'Organization',
            name: 'Applied Futures',
          },
        },
        {
          '@type': 'Person',
          name: 'Diana Meda',
          jobTitle: 'AI & Data Engineer',
          affiliation: {
            '@type': 'Organization',
            name: 'Danish Data Science Community',
          },
        },
        {
          '@type': 'Person',
          name: 'Johanna Perens',
          jobTitle: 'Co-founder & CTO',
          affiliation: {
            '@type': 'Organization',
            name: 'Vibraint',
          },
        },
        {
          '@type': 'Person',
          name: 'Alicia Parra Acero',
          jobTitle: 'Staff Scientist in AI and Computational Imaging',
          affiliation: {
            '@type': 'Organization',
            name: 'Danish Cancer Institute',
          },
        },
      ],
      offers: {
        '@type': 'Offer',
        url: 'https://luma.com/aes5eyzk',
        price: '0',
        priceCurrency: 'DKK',
        availability: 'https://schema.org/LimitedAvailability',
        validFrom: '2026-04-01',
      },
      image: `${SITE_URL}/opengraph-image`,
      url: SITE_URL,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the Explainable Brains Hackathon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Explainable Brains Hackathon is a free, in-person neuroscience and AI hackathon in Copenhagen, Denmark on May 20, 2026. Cross-disciplinary teams use Claude Code and real brain imaging data from Vibraint to build tools that make complex brain data accessible and interpretable for drug discovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a neuroscience background to participate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The hackathon is open to all. Whether you bring biology, mathematics, engineering, data science, software, or product thinking, there is a role for you. Teams are deliberately cross-functional.',
          },
        },
        {
          '@type': 'Question',
          name: 'When and where is the hackathon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Wednesday May 20, 2026 from 16:00 to 19:00 at Mesh Matrikel1, Gothersgade 11, 1123 Copenhagen, Denmark.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hackathon is completely free. Registration is required and limited to 60 participants.',
          },
        },
        {
          '@type': 'Question',
          name: 'What data will teams work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Teams will work with real brain imaging data provided by Vibraint. The full challenge brief is shared after registration. Teams will build tools that help neuroscientists interpret complex brain data for drug discovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is organizing the hackathon?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The hackathon is co-hosted by Claude Code Community Copenhagen, Applied Futures, and Vibraint. It is sponsored by Anthropic. Key organizers include Jacob Langvad Nilsson, Diana Meda, Johanna Perens (CTO of Vibraint), and Alicia Parra Acero (Danish Cancer Institute).',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${lora.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{document.documentElement.classList.add('js');var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
