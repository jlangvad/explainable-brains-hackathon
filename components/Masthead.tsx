import { MASTHEAD } from '@/lib/content'

export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-left">{MASTHEAD.left}</div>
      <div className="masthead-right">{MASTHEAD.right}</div>
    </header>
  )
}
