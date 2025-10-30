import { SliderSection } from './sections/SliderSection.tsx'
import { OurAssortment } from './sections/OurAssortment.tsx'
import { WhyUs } from './sections/WhyUs.tsx'

export function HomePage() {
  return (
    <main>
      <SliderSection />
      <OurAssortment />
      <WhyUs />
    </main>
  )
}
