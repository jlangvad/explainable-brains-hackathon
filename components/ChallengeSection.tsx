import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { CHALLENGE, TAGS } from '@/lib/content'

export function ChallengeSection() {
  return (
    <>
      <SectionHeader num="04" title="The Challenge" />
      <Reveal className="challenge-teaser">
        <p className="challenge-q">{CHALLENGE.question}</p>
        <div className="challenge-note">
          {CHALLENGE.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="challenge-tags">
          {TAGS.map(tag => (
            <span key={tag.label} className={tag.hi ? 'ctag hi' : 'ctag'}>
              {tag.label}
            </span>
          ))}
        </div>
      </Reveal>
    </>
  )
}
