import { SectionHeader } from './SectionHeader'
import { Reveal } from './Reveal'
import { FORMAT_INTRO, AGENDA } from '@/lib/content'

export function FormatSection() {
  return (
    <>
      <SectionHeader num="02" title="The Format" />
      <Reveal className="format-body">
        <p className="format-intro">{FORMAT_INTRO}</p>
        <table className="agenda-table">
          <tbody>
            {AGENDA.map(row => (
              <tr key={row.time} className={row.accent ? 'accent' : undefined}>
                <td>{row.time}</td>
                <td>{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </>
  )
}
