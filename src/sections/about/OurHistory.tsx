import { TitleSection } from '@/components/TitleSection.tsx'

export const OurHistory = () => (
  <div className='pt-8.25 text-black'>
    <TitleSection title='Наша история' position='start' wheat={false} />
    <div className='mt-3.5 flex flex-wrap justify-center gap-5.5 lg:flex-nowrap xl:justify-between'>
      <img src='/images/img/beer_glasses.jpg' alt='' className='w-full max-w-135 lg:w-1/2' />
      <div className='max-w-135 lg:w-1/2'>
        <TitleSection title='1883 г.' position='start' wheat={false} />
        <p className='pt-1.5 text-sm leading-4.25 font-normal'>
          Удивительная история старой пивной бутылки нашла отражение в подвалах старой пивоварни.
          Путем сложного научного процесса ученым из исследовательской лаборатории удалось вырастить
          и очистить оригинальные дрожжи 1883 года из бутылки. Теперь пиво переваривают, и дрожжи
          дали пиву название: 1883.
          <br />
          <br />
          Пиво медного цвета с компактной головкой. У него уникальный и отчетливый вкус, чистый и
          свежий аромат с тонкими нотками солода и карамели.
        </p>
      </div>
    </div>
  </div>
)
