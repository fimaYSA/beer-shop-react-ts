import { TitleSection } from '../../components/TitleSection.tsx'
import { newsData } from '../../data/news.ts'

export function SectionNews() {
  return (
    <section
      className='bg-white flex flex-col gap-4.5 lg:gap-6.5 items-center pt-10.25 pb-17 px-3.75
        lg:py-25.5'
    >
      <TitleSection title={newsData.title} color='#000' position='center' fill='#FDCF55' />
      <div className='flex flex-col md:flex-row md:flex-wrap md: justify-center gap-7.5'>
        {newsData.news.map((n, i) => {
          return (
            <div className='max-w-87.5 flex flex-col gap-2.5 lg:gap-3.75' key={i}>
              <img src={n.img} alt='' />
              <h3 className='text-xl lg:text-[22px] font-medium leading-6 lg:leading-6.5'>
                {n.title}
              </h3>
              <p
                className='text-sm lg:text-base leading-4.25 lg:leading-4.75 font-light
                  lg:tracking-wide lg:pb-2'
              >
                {n.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
