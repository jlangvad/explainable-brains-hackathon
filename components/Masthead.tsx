import { MASTHEAD } from '@/lib/content'
import { ThemeToggle } from './ThemeToggle'

export function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-left">{MASTHEAD.left}</div>
      <div className="masthead-right">
        {MASTHEAD.right}
        <ThemeToggle />
      </div>
    </header>
  )
}
