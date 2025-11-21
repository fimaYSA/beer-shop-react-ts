import { TitlePage } from '@/components/TitlePage.tsx'
import { Background } from '@/components/containers/Background.tsx'
import { FormMessageForUs } from '@/components/forms/FormMessageForUs.tsx'

const Paragraph = () => (
  <div className='flex flex-wrap gap-2.5 xl:gap-5'>
    <p>
      Если вы – владелец магазина, отдела, бара, ресторана или иного заведения общественного
      питания, вам необходимо составить лучшее меню для своих клиентов, и напитки играют в нём
      немаловажную роль.
    </p>
    <p>
      Пенное, ароматное, освежающее пиво привлечёт новых посетителей, а мы обеспечим вас им в любых
      необходимых объёмах – можете купить мелким оптом в Москве или заказать большие партии, мы в
      любом случае быстро и профессионально выполним ваш заказ!
    </p>
    <p>
      Мы можем гарантировать безупречное качество всей продукции и полное соответствие современным
      стандартам безопасности:
    </p>
    <p>
      Изготовление пива и других напитков происходит из лучшего отечественного и иностранного сырья;
    </p>
    <p>
      Наши технологи регулярно посещают производства партнёров для контроля соблюдения
      технологического процесса и качества продукции;
    </p>
    <p>Мы помогаем заказчикам в комплектации и оформлении мест продаж</p>
  </div>
)

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
