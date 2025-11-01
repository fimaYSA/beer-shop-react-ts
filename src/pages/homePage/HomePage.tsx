import { SliderSection } from './sections/SliderSection.tsx'
import { OurAssortment } from './sections/OurAssortment.tsx'
import { WhyUs } from './sections/WhyUs.tsx'
import { AboutCompany } from './sections/AboutCompany.tsx'
import { Services } from './sections/Services.tsx'
import { NewBeer } from './sections/NewBeer.tsx'
import { OurPartners } from './sections/OurPartners.tsx'

export function HomePage() {
  return (
    <main>
      <SliderSection />
      <OurAssortment />
      <WhyUs />
      <AboutCompany />
      <Services />
      <NewBeer />
      <OurPartners />
    </main>
  )
}
