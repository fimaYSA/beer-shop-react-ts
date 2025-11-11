import { assortment } from '../../data/assortment.ts'
import { TitleSection } from '../../components/TitleSection.tsx'

export function SectionAssortment() {
  return (
    <section
      className='relative overflow-hidden bg-no-repeat bg-center bg-cover'
      style={{ backgroundImage: 'url(/images/assortment/wood_BG.jpg)' }}
    >
      <div className='bg-[#292929]/60 px-9.5 pt-13 md:pt-10 pb-22.5 md:pb-11.25'>
        <TitleSection title={assortment.title} color={'#FFF'} position='center' fill='#FDCF55' />
        <div
          className='mx-auto md:w-170 flex gap-y-6.25 md:gap-y-10.5 gap-x-12 flex-wrap
            justify-center mt-23 md:mt-7'
        >
          {assortment.svgArray.map((el) => {
            return (
              <div
                className='w-24 sm:w-48 sm:h-48 flex flex-col gap-4.5 sm:gap-6 items-center
                  justify-start md:justify-end'
                key={el.name}
              >
                <img className='h-25 sm:h-auto' src={el.svgImg} alt={el.name} />
                <div
                  className='text-white text-lg leading-5.5 sm:text-2xl sm:leading-7.25 font-medium
                    text-center'
                >
                  {el.name}
                </div>
              </div>
            )
          })}
        </div>
        <img
          src={assortment.image.hop}
          alt='hop'
          className='absolute h-30.5 bottom-[73%] -left-9 sm:h-62 sm:bottom-13.5 md:h-62 lg:h-72
            xl:h-auto xl:-left-2'
        />
        <img
          className='absolute h-42.5 bottom-[73.4%] -left-22 sm:h-74 sm:bottom-15.5 md:h-74 lg:h-84
            xl:h-auto xl:-left-36 rotate-120'
          src={assortment.image.rye}
          alt='rye'
        />
        <img
          className='absolute h-40.5 -bottom-3 -right-21 sm:h-75 sm:-right-35 md:h-80 lg:h-100
            lg:-right-45 xl:h-auto xl:bottom-0 xl:-right-65.5'
          src={assortment.image.beerOnTop}
          alt='beerOnTop'
        />
      </div>
    </section>
  )
}
