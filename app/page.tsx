import { Masthead } from '@/components/Masthead'
import { Hero } from '@/components/Hero'
import { WhySection } from '@/components/WhySection'
import { FormatSection } from '@/components/FormatSection'
import { WhoSection } from '@/components/WhoSection'
import { ChallengeSection } from '@/components/ChallengeSection'
import { CtaSection } from '@/components/CtaSection'

export default function Page() {
  return (
    <>
      <Masthead />
      <Hero />
      <div className="body-wrap">
        <WhySection />
        <FormatSection />
        <WhoSection />
        <ChallengeSection />
        <CtaSection />
      </div>
    </>
  )
}
