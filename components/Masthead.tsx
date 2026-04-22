import { MASTHEAD } from '@/lib/content'
import { APPLIED_FUTURES_URL, VIBRAINT_URL } from '@/lib/config'
import { MastheadCountdown } from './MastheadCountdown'

export function Masthead() {
  return (
    <header className="masthead">
      <MastheadCountdown fallback={MASTHEAD.left} />
      <div className="masthead-right">
        <span>{MASTHEAD.rightCommunity}</span>
        <span aria-hidden="true"> × </span>
        <a
          href={APPLIED_FUTURES_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          {MASTHEAD.rightAppliedFutures}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <span aria-hidden="true"> × </span>
        <a href={VIBRAINT_URL} target="_blank" rel="noopener noreferrer" className="map-link">
          {MASTHEAD.rightVibraint}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </header>
  )
}
