import Image from 'next/image'
import { HERO, FACTS } from '@/lib/content'
import { VENUE_MAPS_URL } from '@/lib/config'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-kicker">{HERO.kicker}</div>
      <h1>
        {HERO.titleTop}
        <br />
        <span className="outline">{HERO.titleBottom}</span>
      </h1>
      <p className="hero-subtitle">{HERO.subtitle}</p>
      <p className="hero-intro">{HERO.intro}</p>

      <div className="sponsor-strip">
        <div className="sponsor-block">
          <span className="sponsor-label">Sponsored by</span>
          <Image
            src="/Anthropic_logo.svg"
            alt="Anthropic"
            width={180}
            height={22}
            className="sponsor-logo sponsor-logo--anthropic"
          />
        </div>
        <div className="sponsor-divider" aria-hidden="true" />
        <div className="sponsor-block">
          <span className="sponsor-label">Built with</span>
          <div className="sponsor-claude">
            <Image
              src="/anthropic-1.svg"
              alt=""
              width={28}
              height={28}
              className="sponsor-logo sponsor-logo--claude-icon"
            />
            <span className="sponsor-claude-text">Claude Code</span>
          </div>
        </div>
        <div className="sponsor-divider" aria-hidden="true" />
        <div className="sponsor-block">
          <span className="sponsor-label">Partner</span>
          <Image
            src="/vibraint-logo.svg"
            alt="Vibraint"
            width={160}
            height={32}
            className="sponsor-logo sponsor-logo--vibraint"
          />
        </div>
      </div>

      <div className="factbar">
        {FACTS.map(f => (
          <div key={f.label} className="fact">
            <div className="fact-label">{f.label}</div>
            <div className="fact-value">
              {f.label === 'Venue' ? (
                <a
                  href={VENUE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  {f.value}
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              ) : (
                f.value
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
