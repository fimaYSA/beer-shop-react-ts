import { whyUs } from '../../../../public/data/whyUs.ts'
import { TitleSection } from '../../../components/TitleSection.tsx'
import { newBeerData } from '../../../../public/data/newBeer.ts'
import { SliderBtn } from '../../../components/SliderBtn.tsx'

export function NewBeer() {
  return (
    <section
      className='h-246.5 bg-repeat-y pt-25 flex flex-col items-center relative'
      style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
    >
      <TitleSection title={newBeerData.title} color='#000' position='center' />
      <p className='mt-4.75 mb-7 font-normal text-[22px] leading-6.5'>{newBeerData.subtitle}</p>
      <div className='flex gap-21.5'>
        {newBeerData.beers.map((b, i) => {
          return (
            <div key={i} className='text-center'>
              <img src={b.src} alt={b.name} />
              <h3 className='font-medium text-[22px] leading-6.5 mb-2.25'>{b.name}</h3>
              <p className='max-w-50 text-[18px] leading-5.5'>{`${b.alc}, ${b.color}, ${b.process}`}</p>
            </div>
          )
        })}
      </div>
      <div className='w-296.5 flex justify-between absolute bottom-112'>
        <SliderBtn />
        <SliderBtn rotate={180}/>
      </div>
    </section>
  )
}
