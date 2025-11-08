import { TitleSection } from '../../components/TitleSection.tsx'
import { newsData } from '../../../public/data/news.ts'

export function SectionNews() {
  return (
    <section className='bg-white flex flex-col gap-6.5 items-center py-25.5'>
      <TitleSection title={newsData.title} color='#000' position='center' fill='#FDCF55' />
      <div className='flex gap-7.5'>
        {newsData.news.map((n, i) => {
          return (
            <div className='max-w-87.5 flex flex-col gap-3.75' key={i}>
              <img src={n.img} alt='' />
              <h3 className='text-[22px] font-medium leading-6.5'>{n.title}</h3>
              <p className='text-base leading-4.75 font-light tracking-wide pb-2'>{n.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
