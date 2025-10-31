import { TitleSection } from '../../../components/TitleSection.tsx'
import { servicesData } from '../../../../public/data/services.ts'
import { MainButton } from '../../../components/MainButton.tsx'

export function Services() {
  return (
    <section className='h-163.5 bg-white flex gap-4 flex-col justify-end'>
      <TitleSection title={servicesData.title} color='#000' position='center' fill='#FDCF55' />
      <div className='h-[447px] flex'>
        {servicesData.services.map((s, i) => {
          return (
            <div
              key={i}
              style={{ backgroundImage: `url(${s.img})` }}
              className='w-1/2 h-full bg-no-repeat bg-center'
            >
              <div className='h-full bg-black/70 pl-7.5 pb-9.75 content-end'>
                <h3 className='text-3xl text-white font-medium'>{s.name}</h3>
                <p className='max-w-135 text-white text-xl font-light leading-6 mt-2.75 mb-6.5'>
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
