'use client'

import { useEffect, useRef } from 'react'
import { PILLARS } from '@/lib/content'

export function PillarList() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const pillars = Array.from(container.querySelectorAll<HTMLElement>('.pillar'))
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const idx = pillars.indexOf(e.target as HTMLElement)
            setTimeout(() => (e.target as HTMLElement).classList.add('in'), idx * 120)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    pillars.forEach(p => obs.observe(p))
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="pillars">
      {PILLARS.map(p => (
        <div key={p.n} className="pillar">
          <div className="pillar-num">{p.n}</div>
          <div>
            <div className="pillar-title">{p.title}</div>
            <p className="pillar-text">{p.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
