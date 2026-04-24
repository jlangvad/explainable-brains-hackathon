import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { WHO_INTRO, PROFILES, WHO_FOOTNOTE } from '@/lib/content'

export function WhoSection() {
  return (
    <section id="who" aria-labelledby="sec-who">
      <SectionHeader num="03" title="Who's In The Room" id="sec-who" />
      <Reveal className="who-body">
        <p className="who-intro">{WHO_INTRO}</p>
        <ul className="profiles" role="list">
          {PROFILES.map(p => (
            <li key={p.name} className="profile">
              <div className="profile-role">{p.role}</div>
              <div className="profile-name">{p.name}</div>
              <p className="profile-desc">{p.desc}</p>
            </li>
          ))}
        </ul>
        {WHO_FOOTNOTE ? <p className="who-footnote">{WHO_FOOTNOTE}</p> : null}
      </Reveal>
    </section>
  )
}
