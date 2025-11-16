import beer_1 from '/images/background/ice_beer_BG_1.jpg'
import beer_2 from '/images/background/ice_beer_BG_2.jpg'
import beer_3 from '/images/background/ice_beer_BG_3.jpg'

type Props = {
  title:
    | 'О компании'
    | 'Контакты'
    | 'Политика конфиденциальной информации'
    | 'Комплектация магазинов'
    | 'Дистрибуция'
    | 'Корзина'
    | 'Каталог'
}

export function TitlePage({ title }: Props) {
  const bg = title === 'Каталог' ? beer_3 : title === 'Корзина' ? beer_2 : beer_1
  const blackout = title === 'Корзина' ? ' bg-black/80' : ' bg-black/60'

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className='h-51 md:h-75 lg:h-97.5 bg-no-repeat bg-center bg-cover'
    >
      <div className={'h-full px-3.75 content-end' + blackout}>
        <h1
          className='text-[25px] md:text-4xl lg:text-5xl xl:text-[50px] leading-7.5 md:leading-11
            xl:leading-15 font-medium text-white mx-auto md:max-w-[90%] xl:max-w-280 mb-1.25
            md:mb-4.75'
        >
          {title}
        </h1>
      </div>
    </section>
  )
}
