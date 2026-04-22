'use client'

import { useEffect, useState } from 'react'

const EVENT_START = new Date('2026-05-20T16:00:00+02:00').getTime()

function getTimeLeft() {
  const diff = EVENT_START - Date.now()
  if (diff <= 0) return null
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => {
      const t = getTimeLeft()
      if (!t) clearInterval(id)
      setTime(t)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) {
    return (
      <div className="countdown" role="timer" aria-label="Event countdown">
        <div className="countdown-live">Happening now</div>
      </div>
    )
  }

  const segments = [
    { value: time.days, label: 'Days' },
    { value: time.hours, label: 'Hours' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Sec' },
  ]

  return (
    <div className="countdown" role="timer" aria-label="Event countdown">
      <div
        className="countdown-grid"
        aria-live="off"
        aria-atomic="true"
      >
        {segments.map(s => (
          <div key={s.label} className="countdown-seg">
            <span className="countdown-value">{pad(s.value)}</span>
            <span className="countdown-label">{s.label}</span>
          </div>
        ))}
      </div>
      <span className="sr-only">
        {time.days} days, {time.hours} hours, {time.minutes} minutes until the event
      </span>
    </div>
  )
}
