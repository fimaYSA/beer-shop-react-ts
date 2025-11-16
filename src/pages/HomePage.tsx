import { SectionSlider } from '@/sections/home/SectionSlider.tsx'
import { SectionAssortment } from '@/sections/home/SectionAssortment.tsx'
import { SectionWhyUs } from '@/sections/home/SectionWhyUs.tsx'
import { SectionAboutCompany } from '@/sections/home/SectionAboutCompany.tsx'
import { SectionServices } from '@/sections/home/SectionServices.tsx'
import { SectionNew } from '@/sections/home/SectionNew.tsx'
import { SectionPartners } from '@/sections/home/SectionPartners.tsx'
import { SectionNews } from '@/sections/home/SectionNews.tsx'

export function HomePage() {
  return (
    <>
      <SectionSlider />
      <SectionAssortment />
      <SectionWhyUs />
      <SectionAboutCompany />
      <SectionServices />
      <SectionNew />
      <SectionPartners />
      <SectionNews />
    </>
  )
}
