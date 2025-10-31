import { TitleSection } from '../../../components/TitleSection.tsx'
import { whyUs } from '../../../../public/data/whyUs.ts'

export function WhyUs() {
  return (
    <>
      <section
        style={{ backgroundImage: `url(${whyUs.background.paper_BG})` }}
        className='h-[589px] bg-no-repeat bg-center pt-14'
      >
        <TitleSection title={whyUs.title} color='#000' position='center' />
        <div className='flex gap-25 justify-center mt-12'>
          {whyUs.itemsArr.map((el) => {
            return (
              <div key={el.title} className='flex flex-col items-center'>
                <div className='h-[187px] relative flex justify-center items-end'>
                  <div className='w-35.5 h-35.5 rounded-full bg-[#FDCF55] absolute bottom-[5px]'></div>
                  <img
                    src={el.svgImg.url}
                    alt={el.title}
                    className={`w-[${el.svgImg.width}] h-[${el.svgImg.height}] z-50`}
                  />
                </div>
                <p className='mt-12 w-45 text-2xl font-medium text-center'>{el.title}</p>
              </div>
            )
          })}
        </div>
      </section>
      <div
        style={{ backgroundImage: `url(${whyUs.background.hop_parallax_BG})` }}
        className='h-65 bg-no-repeat bg-center'
      >
        <div className='h-full bg-black/40 flex justify-center items-center'>
          <p className='text-[40px] text-white font-medium max-w-128 text-center'>
            “Чудесное пиво, для замечательных людей”
          </p>
        </div>
      </div>
    </>
  )
}
