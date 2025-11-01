import { whyUs } from '../../../../public/data/whyUs.ts'
import { SliderBtn } from '../../../components/SliderBtn.tsx'
import { TitleSection } from '../../../components/TitleSection.tsx'
import { ourPartnersData } from '../../../../public/data/ourPartners.ts'

export function OurPartners() {
  return (
    <section
      className='h-92.5 bg-no-repeat bg-center relative flex flex-col items-center gap-12'
      style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
    >
      <TitleSection title={ourPartnersData.title} color='#000' position='center' />
      <div className='flex gap-57.75'>
        {ourPartnersData.partners.map((p, i) => {
          return (
            <div className='size-37.25 flex justify-center items-center'>
              <img key={i} src={p.src} alt='' />
            </div>
          )
        })}
      </div>
      <div className='w-296.5 flex justify-between absolute bottom-43 left-1/2 -translate-x-1/2'>
        <SliderBtn />
        <SliderBtn rotate={180} />
      </div>
    </section>
  )
}
