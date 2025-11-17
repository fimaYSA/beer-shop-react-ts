import { TitlePage } from '@/components/TitlePage.tsx'
import { BgPaper } from '@/components/containers/BgPaper.tsx'
import { OurHistory } from '@/sections/about/OurHistory.tsx'

export function AboutPage() {
  return (
    <>
      <TitlePage title='О компании' />
      <BgPaper>
        <OurHistory />
      </BgPaper>
    </>
  )
}
