import { useEffect, useState } from 'react'
import { TitleSection } from '@/components/title/TitleSection.tsx'
import { MainButton } from '@/components/inputs/MainButton.tsx'

type DataType = {
  title: string
  description: string[]
  img: {
    glass: string
    hop: string
    manWithGlass: {
      src: string
      width: string
      height: string
    }
  }
}

export function SectionAboutCompany() {
  const [data, setData] = useState<DataType | null>(null)

  useEffect(() => {
    fetch('data/aboutCompany.json')
      .then((res) => res.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <section className='relative bg-white'>
      <img
        className='absolute top-7 -left-5 h-[25%] rotate-195 opacity-10 sm:h-[35%] lg:-left-16
          2xl:top-16 2xl:h-auto 2xl:opacity-100'
        src={data?.img.glass}
        alt=''
      />
      <img
        className='absolute top-56 -left-12 h-[25%] -rotate-45 opacity-10 sm:h-[35%] lg:-left-23
          2xl:top-98 2xl:h-auto 2xl:opacity-100'
        src={data?.img.hop}
        alt=''
      />

      {data && (
        <div className='flex max-w-[1920px] justify-center gap-7.5 xl:justify-end 2xl:ml-60'>
          <div
            className='max-w-135 px-3.75 pt-11.25 pb-12.5 text-sm leading-5.75 font-light
              tracking-wide lg:pt-10 lg:text-base 2xl:px-0'
          >
            <TitleSection title={data.title} position='start' />
            <div className='mt-3 mb-6.5 tracking-normal lg:mt-4.5'>
              {data.description.map((p, i) => {
                return <p key={i}>{p}</p>
              })}
            </div>
            <div className='h-9.25 w-47.5 text-sm sm:h-[44px] sm:w-[255px] sm:text-base'>
              <MainButton title={data.title} />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${data?.img.manWithGlass.src})` }}
            className={'hidden w-[945px] bg-contain bg-right bg-no-repeat lg:block'}
          ></div>
        </div>
      )}
    </section>
  )
}
