import { TitlePage } from '@/components/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { OurHistory } from '@/sections/about/OurHistory.tsx'
import { WhyUs } from '@/sections/about/WhyUs.tsx'

export function AboutPage() {
  return (
    <>
      <TitlePage title='О компании' />
      <Background background={'paper'}>
        <OurHistory />
        <WhyUs />
      </Background>
    </>
  )
}
