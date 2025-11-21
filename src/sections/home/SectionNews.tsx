import { TitleSection } from '@/components/title/TitleSection.tsx'
import { newsData } from '@/data/news.ts'

export function SectionNews() {
  return (
    <section
      className='flex flex-col items-center gap-4.5 bg-white px-3.75 pt-10.25 pb-17 lg:gap-6.5
        lg:py-25.5'
    >
      <TitleSection title={newsData.title} color='#000' position='center' fill='#FDCF55' />
      <div className='md: flex flex-col justify-center gap-7.5 md:flex-row md:flex-wrap'>
        {newsData.news.map((n, i) => {
          return (
            <div className='flex max-w-87.5 flex-col gap-2.5 lg:gap-3.75' key={i}>
              <img src={n.img} alt='' />
              <h3 className='text-xl leading-6 font-medium lg:text-[22px] lg:leading-6.5'>
                {n.title}
              </h3>
              <p
                className='text-sm leading-4.25 font-light lg:pb-2 lg:text-base lg:leading-4.75
                  lg:tracking-wide'
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
