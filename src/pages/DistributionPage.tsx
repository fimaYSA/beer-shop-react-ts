import { TitlePage } from '@/components/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { FormMessageForUs } from '@/components/forms/FormMessageForUs.tsx'
import { Paragraph } from '@/components/Paragraph.tsx'

export function DistributionPage() {
  return (
    <div className='text-sm leading-4.25 font-light lg:text-base lg:leading-4.75'>
      <TitlePage title='Дистрибуция' />
      <Background background={'white'}>
        <div className='pt-5.75 pb-6.75 xl:pt-9.25 xl:pb-6.25'>
          <h2 className='mb-2.5 font-normal xl:mb-5'>
            Поставляем пенные напитки для торговых точек и заведений общепита!
          </h2>
          <Paragraph />
        </div>
      </Background>

      <div
        className='flex flex-wrap justify-center gap-3.75 bg-white pb-3.75 sm:pb-13.75 lg:gap-7.5'
      >
        <img className='w-full max-w-[540px] shrink' src='/images/img/oak_barrels.jpg' alt='' />
        <img className='w-full max-w-[540px] shrink' src='/images/img/steel_barrels.jpg' alt='' />
      </div>

      <Background background={'hop'} blackOut={40}>
        <div className='mx-auto max-w-135 pt-7 pb-15.5 text-white lg:py-9.5'>
          <FormMessageForUs backgroundInput={true} borderInput={false} />
        </div>
      </Background>
    </div>
  )
}
