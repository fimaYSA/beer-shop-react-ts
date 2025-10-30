import { assortment } from '../../../../public/data/assortment.tsx'
import { TitleSection } from '../../../components/TitleSection.tsx'

export function OurAssortment() {
  return (
    <section
      className='h-151 relative overflow-hidden bg-no-repeat bg-center'
      style={{ backgroundImage: 'url(/images/assortment/wood_BG.jpg)' }}
    >
      <div className='h-full bg-[#292929]/60'>
        <div className='pt-11'>
          <TitleSection title={assortment.title} color={'#FFF'} position='center' />
        </div>
        <div
          className='mx-auto w-170 h-113 flex gap-x-12 flex-wrap justify-center content-around mt-6'
        >
          {assortment.svgArray.map((el) => {
            return (
              <div className='w-48 h-47 flex flex-col gap-6 items-center justify-end'>
                <img src={el.svgImg} alt={el.name} />
                <div className='text-white text-2xl font-medium'>{el.name}</div>
              </div>
            )
          })}
        </div>
        <img src={assortment.image.hop} alt='hop' className='absolute bottom-13.5 -left-2' />
        <img
          className='absolute bottom-15.5 -left-36 rotate-120'
          src={assortment.image.rye}
          alt='rye'
        />
        <img
          className='absolute bottom-0 -right-65.5'
          src={assortment.image.beerOnTop}
          alt='beerOnTop'
        />
      </div>
    </section>
  )
}
