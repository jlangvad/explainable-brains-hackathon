import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { CHALLENGE, TAGS } from '@/lib/content'

export function ChallengeSection() {
  return (
    <section id="challenge" aria-labelledby="sec-challenge">
      <SectionHeader num="04" title="The Challenge" id="sec-challenge" />
      <Reveal className="challenge-teaser">
        <p className="challenge-q">{CHALLENGE.question}</p>
        <div className="challenge-note">
          {CHALLENGE.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="challenge-tags" role="list" aria-label="Challenge topics">
          {TAGS.map(tag => (
            <span key={tag.label} role="listitem" className={tag.hi ? 'ctag hi' : 'ctag'}>
              {tag.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
