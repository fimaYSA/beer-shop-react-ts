import { TitleSection } from '@/components/TitleSection.tsx'
import { CardWhyUs } from '@/components/cards/CardWhyUs.tsx'

const whyUsItems = [
  {
    image: 'images/about/why_us_wheat.svg',
    label: 'Солод',
    description:
      'Удивительная история старой пивной бутылки нашла отражение в подвалах старой пивоварни.',
  },
  {
    image: 'images/about/why_us_hop.svg',
    label: 'Качественные материалы',
    description:
      'Удивительная история старой пивной бутылки нашла отражение в подвалах старой пивоварни.',
  },
  {
    image: 'images/about/why_us_molecules.svg',
    label: 'Технологии',
    description:
      'Удивительная история старой пивной бутылки нашла отражение в подвалах старой пивоварни.',
  },
  {
    image: 'images/about/why_us_manufacturing.svg',
    label: 'Оборудование',
    description:
      'Удивительная история старой пивной бутылки нашла отражение в подвалах старой пивоварни.',
  },
]

export const WhyUs = () => (
  <div className='pt-11.5 pb-9.25 xl:pt-22.5 xl:pb-19.5'>
    <TitleSection title='Почему мы' position='start' wheat={false} />
    <ul className='flex flex-wrap justify-center gap-x-7.75'>
      {whyUsItems.map((item) => (
        <CardWhyUs
          key={item.label}
          label={item.label}
          image={item.image}
          description={item.description}
        />
      ))}
    </ul>
  </div>
)
