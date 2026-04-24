import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { FORMAT_INTRO, AGENDA } from '@/lib/content'

export function FormatSection() {
  return (
    <section id="format" aria-labelledby="sec-format">
      <SectionHeader num="02" title="The Format" id="sec-format" />
      <Reveal className="format-body">
        <p className="format-intro">{FORMAT_INTRO}</p>
        <table className="agenda-table" aria-label="Event agenda">
          <thead className="sr-only">
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            {AGENDA.map(row => (
              <tr key={row.time} className={row.accent ? 'accent' : undefined}>
                <td><time dateTime={`2026-05-26T${row.time}:00+02:00`}>{row.time}</time></td>
                <td>{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  )
}
