import { whyUs } from '../../data/whyUs.ts'
import { TitleSection } from '../../components/TitleSection.tsx'
import { useEffect, useState } from 'react'
import { MainButton } from '../../components/inputs/MainButton.tsx'

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
    <section
      className='w-full h-[611px] bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
    >
      {data && (
        <div className='flex h-full gap-7.5 justify-end'>
          <div className='w-full h-full relative'>
            <img
              className='absolute bottom-52.5 -left-16 rotate-195'
              src={data?.img.glass}
              alt=''
              width='263px'
              height='363px'
            />
            <img
              className='absolute -bottom-12 -left-23 -rotate-45'
              src={data?.img.hop}
              alt=''
              width='239px'
              height='2663px'
            />
          </div>
          <div className='max-w-135 pt-10 text-base font-light leading-5.75'>
            <TitleSection title={data.title} color='' position='start' />
            <div className='mt-4.5 mb-6.5'>
              {data.description.map((p, i) => {
                return <p key={i}>{p}</p>
              })}
            </div>
            <MainButton title={data.title} height={44} />
          </div>
          <img
            src={data?.img.manWithGlass.src}
            alt=''
            width={data?.img.manWithGlass.width}
            height={data?.img.manWithGlass.height}
          />
        </div>
      )}
    </section>
  )
}
