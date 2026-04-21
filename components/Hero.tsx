import { HERO, FACTS } from '@/lib/content'

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
      <div className="factbar">
        {FACTS.map(f => (
          <div key={f.label} className="fact">
            <div className="fact-label">{f.label}</div>
            <div className="fact-value">{f.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
