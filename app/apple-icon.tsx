import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#111010',
          display: 'flex',
          position: 'relative',
        }}
      >
        <div style={{ position: 'absolute', left: 45, top: 40, width: 17, height: 101, background: '#f7f4ee' }} />
        <div style={{ position: 'absolute', left: 45, top: 40, width: 90, height: 17, background: '#f7f4ee' }} />
        <div style={{ position: 'absolute', left: 45, top: 82, width: 68, height: 17, background: '#1a7a4a' }} />
        <div style={{ position: 'absolute', left: 45, top: 124, width: 90, height: 17, background: '#f7f4ee' }} />
      </div>
    ),
    { ...size },
  )
}
