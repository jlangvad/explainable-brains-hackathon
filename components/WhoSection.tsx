import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { WHO_INTRO, PROFILES, WHO_FOOTNOTE } from '@/lib/content'

export function WhoSection() {
  return (
    <>
      <SectionHeader num="03" title="Who's In The Room" />
      <Reveal className="who-body">
        <p className="who-intro">{WHO_INTRO}</p>
        <div className="profiles">
          {PROFILES.map(p => (
            <div key={p.name} className="profile">
              <div className="profile-role">{p.role}</div>
              <div className="profile-name">{p.name}</div>
              <p className="profile-desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="who-footnote">{WHO_FOOTNOTE}</p>
      </Reveal>
    </>
  )
}
