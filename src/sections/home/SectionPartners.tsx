import { whyUs } from '@/data/whyUs.ts'
import { TitleSection } from '@/components/title/TitleSection.tsx'
import { ourPartnersData } from '@/data/ourPartners.ts'
import { SliderBtnTranslateX } from '@/components/sliders/SliderBtnTranslateX.tsx'
import { useRef, useState } from 'react'

export function SectionPartners() {
  const [translateX, setTranslateX] = useState<number>(0)
  const viewportRef = useRef<HTMLDivElement | null>(null)

  const onClickBtn = (value: number) => {
    if (value === 0) {
      setTranslateX(value)
    } else {
      setTranslateX((prev) => prev + value)
    }
  }

  return (
    <section
      className='bg-center bg-origin-padding relative flex flex-col items-center gap-8.25 md:gap-12
        pb-16.75'
      style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
    >
      <TitleSection title={ourPartnersData.title} position='center' />

      <div
        ref={viewportRef}
        className='w-[149px] sm:w-[358px] lg:w-[567px] xl:w-[911px] overflow-hidden'
      >
        <div
          style={{ transform: `translateX(-${translateX}px)` }}
          className='inline-flex gap-15 xl:gap-58 duration-300'
        >
          {ourPartnersData.partners.map((p, i) => {
            return (
              <div key={i} className='size-37.25 flex justify-center items-center'>
                <img src={p.src} alt='' />
              </div>
            )
          })}
        </div>
      </div>

      <div
        className='px-3.75 w-full sm:w-8/10 md:w-7/10 xl:w-[1220px] absolute top-1/2
          -translate-y-1/4 md:translate-y-1/2'
      >
        <SliderBtnTranslateX onTranslateX={onClickBtn} viewportRef={viewportRef} />
      </div>
    </section>
  )
}
