import { Reveal } from './Reveal'

export function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <Reveal className="sec-head">
      <span className="sec-num">{num} —</span>
      <h2 className="sec-title">{title}</h2>
    </Reveal>
  )
}
