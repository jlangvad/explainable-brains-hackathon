import Image from 'next/image'
import { HERO, FACTS } from '@/lib/content'
import { REGISTER_URL, VENUE_MAPS_URL } from '@/lib/config'

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-kicker">{HERO.kicker}</div>
      <h1>
        {HERO.titleTop}
        <br />
        {HERO.titleBottom}{' '}
        <span className="outline">{HERO.titleSuffix}</span>
      </h1>
      <div className="hero-body">
        <div className="hero-copy">
          <p className="hero-subtitle">{HERO.subtitle}</p>
          <p className="hero-definition">{HERO.definition}</p>
          <p className="hero-intro">{HERO.intro}</p>
          <div className="hero-cta">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reg-btn"
              aria-label="Register now (opens in new tab)"
            >
              Register Now <span aria-hidden="true">&rarr;</span>
            </a>
            <span className="hero-cta-note">Free · 60 seats · Challenge brief sent after registration</span>
          </div>
        </div>
        <aside className="hero-sponsors" aria-label="Sponsors and partners">
          <div className="sponsor-strip sponsor-strip--vertical">
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
              <Image
                src="/claude-logo_brandlogos.net_yx32y.png"
                alt="Claude Code"
                width={524}
                height={113}
                className="sponsor-logo sponsor-logo--claude"
              />
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
        </aside>
      </div>

      <dl className="factbar">
        {FACTS.map(f => (
          <div key={f.label} className="fact">
            <dt className="fact-label">{f.label}</dt>
            <dd className="fact-value">
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
              ) : f.label === 'Date' ? (
                <time dateTime="2026-05-26">{f.value}</time>
              ) : f.label === 'Time' ? (
                <time dateTime="16:00/19:00">{f.value}</time>
              ) : (
                f.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
