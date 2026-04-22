import Image from 'next/image'
import { SectionHeader } from './SectionHeader'
import { PillarList } from './PillarList'
import { VIBRAINT_SIDEBAR } from '@/lib/content'

export function WhySection() {
  return (
    <section id="why" aria-labelledby="sec-why">
      <SectionHeader num="01" title="The Problem Worth Solving" id="sec-why" />
      <div className="why-body">
        <PillarList />
        <div>
          <aside className="sidebar-box">
            <Image
              src="/vibraint-logo.svg"
              alt="Vibraint"
              width={160}
              height={44}
              className="sidebar-logo"
            />
            <h3>{VIBRAINT_SIDEBAR.heading}</h3>
            {VIBRAINT_SIDEBAR.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </aside>
        </div>
      </div>
    </section>
  )
}
