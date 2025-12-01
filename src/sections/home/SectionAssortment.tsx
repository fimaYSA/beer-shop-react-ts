import { assortment } from '@/data/assortment.ts'
import { TitleSection } from '@/components/title/TitleSection.tsx'

export function SectionAssortment() {
  return (
    <section
      style={{ backgroundImage: `url(${assortment.image.backgroundImage})` }}
      className='relative overflow-hidden bg-cover bg-center bg-no-repeat'
    >
      <div className='bg-[#292929]/60 px-9.5 pt-13 pb-22.5 md:pt-10 md:pb-11.25'>
        <TitleSection title={assortment.title} color={'#FFF'} position='center' fill='#FDCF55' />
        <div
          className='mx-auto mt-23 flex flex-wrap justify-center gap-x-12 gap-y-6.25 md:mt-7
            md:w-170 md:gap-y-10.5'
        >
          {assortment.svgArray.map((el) => {
            return (
              <div
                className='flex w-24 flex-col items-center justify-start gap-4.5 sm:h-48 sm:w-48
                  sm:gap-6 md:justify-end'
                key={el.name}
              >
                <img className='h-25 sm:h-auto' src={el.svgImg} alt={el.name} />
                <div
                  className='text-center text-lg leading-5.5 font-medium text-white sm:text-2xl
                    sm:leading-7.25'
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
          className='absolute bottom-[73%] -left-9 h-30.5 sm:bottom-13.5 sm:h-62 md:h-62 lg:h-72
            xl:-left-2 xl:h-auto'
        />
        <img
          className='absolute bottom-[73.4%] -left-22 h-42.5 rotate-120 sm:bottom-15.5 sm:h-74
            md:h-74 lg:h-84 xl:-left-36 xl:h-auto'
          src={assortment.image.rye}
          alt='rye'
        />
        <img
          className='absolute -right-21 -bottom-3 h-40.5 sm:-right-35 sm:h-75 md:h-80 lg:-right-45
            lg:h-100 xl:-right-65.5 xl:bottom-0 xl:h-auto'
          src={assortment.image.beerOnTop}
          alt='beerOnTop'
        />
      </div>
    </section>
  )
}
