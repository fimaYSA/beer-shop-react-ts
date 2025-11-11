import { TitleSection } from '../../components/TitleSection.tsx'
import { servicesData } from '../../data/services.ts'
import { MainButton } from '../../components/inputs/MainButton.tsx'

export function SectionServices() {
  return (
    <section className='pt-10 xl:pt-18.75 bg-white flex gap-8.25 md:gap-4 flex-col justify-end'>
      <TitleSection title={servicesData.title} color='#000' position='center' fill='#FDCF55' />
      <div className='grid grid-col-1 xl:grid-cols-2'>
        {servicesData.services.map((s, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: `url(${s.img})` }}
              className='bg-no-repeat bg-center bg-cover'
            >
              <div className='h-full bg-black/70 px-3.75 sm:px-7.5 pt-10.5 sm:pt-60.75 pb-9.75'>
                <h3
                  className='text-[25px] leading-7.5 sm:text-3xl sm:leading-9 text-white
                    font-medium'
                >
                  {s.name}
                </h3>
                <p
                  className='max-w-72 sm:max-w-135 text-white text-sm sm:text-xl font-light
                    leading-4.25 sm:leading-6 my-3.75 xl:mt-2.75 xl:mb-6.5'
                >
                  {s.description}
                </p>
                <MainButton title='Подробнее' height={44} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
