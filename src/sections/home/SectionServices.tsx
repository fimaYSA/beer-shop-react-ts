import { TitleSection } from '@/components/title/TitleSection.tsx'
import { servicesData } from '@/data/services.ts'
import { MainButton } from '@/components/inputs/MainButton.tsx'

export function SectionServices() {
  return (
    <section className='flex flex-col justify-end gap-8.25 bg-white pt-10 md:gap-4 xl:pt-18.75'>
      <TitleSection title={servicesData.title} position='center' fill='#FDCF55' />
      <div className='grid-col-1 grid xl:grid-cols-2'>
        {servicesData.services.map((s, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: `url(${s.img})` }}
              className='bg-cover bg-center bg-no-repeat'
            >
              <div className='h-full bg-black/70 px-3.75 pt-10.5 pb-9.75 sm:px-7.5 sm:pt-60.75'>
                <h3
                  className='text-[25px] leading-7.5 font-medium text-white sm:text-3xl
                    sm:leading-9'
                >
                  {s.name}
                </h3>
                <p
                  className='my-3.75 max-w-72 text-sm leading-4.25 font-light text-white
                    sm:max-w-135 sm:text-xl sm:leading-6 xl:mt-2.75 xl:mb-6.5'
                >
                  {s.description}
                </p>
                <div className='h-10.25 w-47.5 text-sm sm:h-[44px] sm:w-[255px] sm:text-base'>
                  <MainButton title='Подробнее' />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
