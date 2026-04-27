import { Reveal } from './Reveal'
import { CTA, CTA_VENUE_LINE } from '@/lib/content'
import {
  APPLIED_FUTURES_URL,
  DANISH_CANCER_INSTITUTE_URL,
  DANISH_DATA_SCIENCE_URL,
  REGISTER_URL,
  VENUE_MAPS_URL,
  VIBRAINT_URL,
} from '@/lib/config'
import { ThemeToggle } from './ThemeToggle'

export function CtaSection() {
  return (
    <footer id="register">
    <Reveal className="cta-section">
      <div>
        <h2 className="cta-headline">
          {CTA.lines.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <em>{CTA.emphasis}</em>
        </h2>
        <p className="cta-detail">
          <span>
            {CTA_VENUE_LINE.before}
            <a href={VENUE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="map-link">
              {CTA_VENUE_LINE.place}
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <br />
          </span>
          {CTA.detail.map((line, i) => (
            <span key={i}>
              {line}
              {i < CTA.detail.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      <div className="cta-right">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reg-btn"
          aria-label="Register now (opens in new tab)"
        >
          Register Now <span aria-hidden="true">&rarr;</span>
        </a>
        <div className="hosted-by">
          {CTA.hostedBy.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
          <span>
            <a href={VIBRAINT_URL} target="_blank" rel="noopener noreferrer" className="map-link">
              Vibraint
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={DANISH_CANCER_INSTITUTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Danish Cancer Institute
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={APPLIED_FUTURES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Applied Futures
              <span className="sr-only"> (opens in new tab)</span>
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={DANISH_DATA_SCIENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              Danish Data Science Community
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </span>
        </div>
        <div className="footer-theme-toggle">
          <ThemeToggle />
        </div>
      </div>
    </Reveal>
    </footer>
  )
}
