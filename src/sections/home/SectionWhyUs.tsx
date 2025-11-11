import { TitleSection } from '../../components/TitleSection.tsx'
import { whyUs } from '../../data/whyUs.ts'

export function SectionWhyUs() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
        className='bg-no-repeat bg-center bg-cover pt-9 md:pt-14 pb-19 md:pb-32.75'
      >
        <TitleSection title={whyUs.title} color='#000' position='center' />
        <div
          className='flex flex-wrap gap-y-13.75 gap-x-8 lg:gap-25 justify-center mt-3.25
            lg:mt-11.75'
        >
          {whyUs.itemsArr.map((el) => {
            return (
              <div key={el.title} className='flex flex-col items-center'>
                <div className='relative flex justify-center items-end'>
                  <div
                    className='size-23.75 lg:size-35.5 rounded-full bg-[#FDCF55] absolute
                      bottom-[5px]'
                  ></div>
                  <img
                    src={el.svgImg.url}
                    alt={el.title}
                    className={'h-31 w-30 lg:h-auto lg:w-auto' + ' z-50'}
                  />
                </div>
                <p
                  className='mt-5.5 w-30 lg:w-45 text-base leading-4.5 lg:mt-11.5 lg:text-2xl
                    lg:leading-7.25 font-medium text-center'
                >
                  {el.title}
                </p>
              </div>
            )
          })}
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${whyUs.background.hop_parallax_BG})` }}
        className='bg-no-repeat bg-center bg-cover'
      >
        <div className='bg-black/40 flex justify-center items-center py-13.75 md:pt-21.5 md:pb-19.5'>
          <p
            className='text-xl leading-6 md:text-[40px] md:leading-12 text-white font-medium
              max-w-128 text-center'
          >
            “Чудесное пиво, для замечательных людей”
          </p>
        </div>
      </div>
    </>
  )
}
