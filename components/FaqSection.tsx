import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { FAQ } from '@/lib/content'

export function FaqSection() {
  return (
    <section id="faq" aria-labelledby="sec-faq">
      <SectionHeader num="05" title="Frequently Asked Questions" id="sec-faq" />
      <Reveal className="faq-body">
        <dl className="faq-list">
          {FAQ.map((item, i) => (
            <div key={i} className="faq-item">
              <dt className="faq-q">{item.q}</dt>
              <dd className="faq-a">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
