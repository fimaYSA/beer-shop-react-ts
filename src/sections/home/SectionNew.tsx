import { whyUs } from '@/data/whyUs.ts'
import { TitleSection } from '@/components/title/TitleSection.tsx'
import { newBeerData } from '@/data/newBeer.ts'
import { SliderBtnTranslateX } from '@/components/sliders/SliderBtnTranslateX.tsx'
import { useRef, useState } from 'react'

export function SectionNew() {
  const [translateX, setTranslateX] = useState<number>(0)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  const onTranslateX = (value: number) => {
    if (value === 0) {
      setTranslateX(0)
    } else {
      setTranslateX((prev) => prev + value)
    }
  }

  return (
    <section
      className='bg-repeat-y pt-10.25 md:pt-25 pb-21.75 md:pb-25.75 flex flex-col items-center
        relative'
      style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
    >
      <TitleSection title={newBeerData.title} position='center' />
      <p
        className='mt-1.75 md:mt-4.75 mb-8 md:mb-7 font-normal text-base leading-4.75 sm:text-[22px]
          sm:leading-6.5'
      >
        {newBeerData.subtitle}
      </p>
      <div
        ref={viewportRef}
        className='max-w-[146px] sm:max-w-[364px] md:max-w-[582px] lg:max-w-[1072px]
          overflow-x-hidden'
      >
        <div
          className='inline-flex gap-18 duration-300'
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {newBeerData.beers.map((b, i) => {
            return (
              <div
                key={i}
                className='flex flex-col items-center text-center w-[146px] xl:w-[214px]'
              >
                <img src={b.src} alt={b.name} />
                <h3 className='font-medium text-[22px] leading-6.5 mt-1.75 md:mt-0 mb-2.25'>
                  {b.name}
                </h3>
                <p className='max-w-50 text-base lg:text-lg leading-5.5'>{`${b.alc}, ${b.color}, ${b.process}`}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className='px-3.75 w-full sm:w-9/10 xl:w-[1220px] absolute top-1/2 -translate-y-1/2'>
        <SliderBtnTranslateX onTranslateX={onTranslateX} viewportRef={viewportRef} />
      </div>
    </section>
  )
}
