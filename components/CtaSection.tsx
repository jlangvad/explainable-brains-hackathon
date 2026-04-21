import { Reveal } from './Reveal'
import { CTA } from '@/lib/content'
import { REGISTER_URL } from '@/lib/config'

export function CtaSection() {
  return (
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
        >
          {CTA.buttonLabel}
        </a>
        <div className="hosted-by">
          {CTA.hostedBy.map((line, i) => (
            <span key={i}>
              {line}
              {i < CTA.hostedBy.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
