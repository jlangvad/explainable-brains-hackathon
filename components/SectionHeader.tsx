import { Reveal } from './Reveal'

export function SectionHeader({ num, title, id }: { num: string; title: string; id?: string }) {
  return (
    <Reveal className="sec-head" id={id}>
      <span className="sec-num">{num} —</span>
      <h2 className="sec-title">{title}</h2>
    </Reveal>
  )
}
