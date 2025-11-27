import { TitleFilter } from '@/components/title/TitleFilter.tsx'
import { FilterCategory } from '@/components/ui/filter/FilterCategory.tsx'

const drinks = [
  {
    name: 'Пиво',
    view: ['Темное', 'Светлое', 'Нефильрованное', 'Фильрованное', 'Пшеничное'],
    selected: true,
  },
  {
    name: 'Квас',
    view: ['Темный', 'Светлый'],
    selected: false,
  },
  {
    name: 'Лимонад',
    view: ['Сладкий', 'Кислый', 'Соленый', 'Горький'],
    selected: false,
  },
  {
    name: 'Соки, воды',
    view: ['Натуральные', 'Поддельные', 'Говеные'],
    selected: false,
  },
]

export function FilterCategories() {
  return (
    <>
      <div className='border-b-main-dark_gray border-b pt-10 pb-1.75'>
        <TitleFilter title='Категории' />
      </div>
      <div className='flex flex-col gap-2.75 px-1 pt-5'>
        {drinks.map((item) => {
          return <FilterCategory category={item} key={item.name} />
        })}
      </div>
    </>
  )
}
