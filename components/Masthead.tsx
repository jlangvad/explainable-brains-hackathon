import { MASTHEAD } from '@/lib/content'
import {
  APPLIED_FUTURES_URL,
  DANISH_CANCER_INSTITUTE_URL,
  DANISH_DATA_SCIENCE_URL,
  VIBRAINT_URL,
} from '@/lib/config'
import { MastheadCountdown } from './MastheadCountdown'

export function Masthead() {
  return (
    <header className="masthead">
      <MastheadCountdown fallback={MASTHEAD.left} />
      <div className="masthead-right">
        <a href={VIBRAINT_URL} target="_blank" rel="noopener noreferrer" className="map-link">
          {MASTHEAD.rightVibraint}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
        <span aria-hidden="true"> × </span>
        <a
          href={DANISH_CANCER_INSTITUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          {MASTHEAD.rightDanishCancerInstitute}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
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
        <a
          href={DANISH_DATA_SCIENCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          {MASTHEAD.rightDanishDataScience}
          <span className="sr-only"> (opens in new tab)</span>
        </a>
      </div>
    </header>
  )
}
