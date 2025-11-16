import { useEffect, useState } from 'react'
import { TitleSection } from '@/components/TitleSection.tsx'
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
    fetch('/data/aboutCompany.json')
      .then((res) => res.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <section className='bg-white relative'>
      <img
        className='absolute top-7 2xl:top-16 -left-5 lg:-left-16 rotate-195 opacity-10
          2xl:opacity-100 h-[25%] sm:h-[35%] 2xl:h-auto'
        src={data?.img.glass}
        alt=''
      />
      <img
        className='absolute top-56 2xl:top-98 -left-12 lg:-left-23 -rotate-45 opacity-10
          2xl:opacity-100 h-[25%] sm:h-[35%] 2xl:h-auto'
        src={data?.img.hop}
        alt=''
      />

      {data && (
        <div className='max-w-[1920px] flex gap-7.5 justify-center xl:justify-end 2xl:ml-60'>
          <div
            className='max-w-135 pt-11.25 lg:pt-10 pb-12.5 text-sm lg:text-base font-light
              leading-5.75 tracking-wide px-3.75 2xl:px-0'
          >
            <TitleSection title={data.title} color='' position='start' />
            <div className='mt-3 lg:mt-4.5 mb-6.5 tracking-normal'>
              {data.description.map((p, i) => {
                return <p key={i}>{p}</p>
              })}
            </div>
            <div className='w-47.5 h-9.25 text-sm sm:w-[255px] sm:h-[44px] sm:text-base'>
              <MainButton title={data.title} />
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${data?.img.manWithGlass.src})` }}
            className={'w-[945px] hidden lg:block bg-no-repeat bg-right bg-contain'}
          ></div>
        </div>
      )}
    </section>
  )
}
