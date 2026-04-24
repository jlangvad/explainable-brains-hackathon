'use client'

import { useEffect, useState } from 'react'

const EVENT_START = new Date('2026-05-26T16:00:00+02:00').getTime()

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

export function MastheadCountdown({ fallback }: { fallback: string }) {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeLeft())
    const id = setInterval(() => {
      const t = getTimeLeft()
      if (!t) clearInterval(id)
      setTime(t)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return <div className="masthead-left">{fallback}</div>
  }

  if (!time) {
    return (
      <div className="masthead-left masthead-countdown" role="timer" aria-label="Event status">
        <span className="countdown-live-inline">Happening now</span>
        <span className="masthead-sep" aria-hidden="true"> · </span>
        <span>Copenhagen</span>
      </div>
    )
  }

  return (
    <div className="masthead-left masthead-countdown" role="timer" aria-label="Event countdown">
      <span className="countdown-inline">
        Starts in{' '}
        <span className="countdown-num">{time.days}</span>d{' '}
        <span className="countdown-num">{pad(time.hours)}</span>h{' '}
        <span className="countdown-num">{pad(time.minutes)}</span>m{' '}
        <span className="countdown-num">{pad(time.seconds)}</span>s
      </span>
      <span className="masthead-sep" aria-hidden="true"> · </span>
      <span>May 26th, 2026</span>
      <span className="masthead-sep" aria-hidden="true"> · </span>
      <span>Copenhagen</span>
      <span className="sr-only">
        {time.days} days, {time.hours} hours, {time.minutes} minutes until the event
      </span>
    </div>
  )
}
