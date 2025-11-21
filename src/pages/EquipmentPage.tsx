import { TitlePage } from '@/components/title/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { FormMessageForUs } from '@/components/forms/FormMessageForUs.tsx'
import { Paragraph } from '@/components/Paragraph.tsx'

export function EquipmentPage() {
  return (
    <div className='text-sm leading-4.25 font-light lg:text-base lg:leading-4.75'>
      <TitlePage title='Комплектация магазинов' />
      <Background background={'white'}>
        <div className='pt-5.75 pb-6.75 xl:pt-9.25 xl:pb-6.25'>
          <h2 className='mb-2.5 font-normal xl:mb-5'>
            Поставляем пенные напитки для торговых точек и заведений общепита!
          </h2>
          <Paragraph />
        </div>
      </Background>

      <div className='flex flex-wrap justify-center gap-3.75 bg-white lg:gap-7.5'>
        <img
          className='w-full max-w-[540px] shrink'
          src='/images/equipment_page/shop_1.jpg'
          alt=''
        />
        <img
          className='w-full max-w-[540px] shrink'
          src='/images/equipment_page/shop_2.jpg'
          alt=''
        />
      </div>

      <Background background={'white'}>
        <div className='pt-5.5 pb-9 xl:pt-6.25 xl:pb-15'>
          <Paragraph />
        </div>
      </Background>

      <Background background={'hop'} blackOut={40}>
        <div className='mx-auto max-w-135 pt-7 pb-15.5 text-white lg:py-9.5'>
          <FormMessageForUs backgroundInput={true} borderInput={false} />
        </div>
      </Background>
    </div>
  )
}
