import Image from 'next/image'
import { HERO } from '@/lib/content'
import { REGISTER_URL } from '@/lib/config'

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

    </section>
  )
}
