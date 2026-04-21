import { ImageResponse } from 'next/og'

export const alt = 'Explainable Brains Hackathon — Copenhagen, May 20th, 2026'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadBebas(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      'https://raw.githubusercontent.com/google/fonts/main/ofl/bebasneue/BebasNeue-Regular.ttf',
    )
    if (!res.ok) return null
    return await res.arrayBuffer()
  } catch {
    return null
  }
}

export default async function OpengraphImage() {
  const bebas = await loadBebas()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#f7f4ee',
          padding: '72px 80px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            color: '#1a7a4a',
            fontSize: 22,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          <div style={{ width: 56, height: 2, background: '#1a7a4a' }} />
          <div>Copenhagen · May 20, 2026 · 16:00–19:00</div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: bebas ? 'Bebas' : 'sans-serif',
            fontSize: 200,
            lineHeight: 0.88,
            textTransform: 'uppercase',
            color: '#111010',
            letterSpacing: '0.01em',
          }}
        >
          <div>Explainable</div>
          <div>Brains</div>
        </div>

        <div
          style={{
            display: 'flex',
            fontStyle: 'italic',
            fontSize: 28,
            color: '#6b6760',
            maxWidth: 880,
            lineHeight: 1.5,
            borderLeft: '3px solid #1a7a4a',
            paddingLeft: 20,
          }}
        >
          From signals to understanding — a 3-hour sprint to make complex brain imaging data accessible, interpretable, and actionable.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: bebas
        ? [{ name: 'Bebas', data: bebas, style: 'normal', weight: 400 }]
        : undefined,
    },
  )
}
