import { FormSearch } from '@/components/forms/FormSearch.tsx'
import { FilterCategories } from '@/components/ui/filter/FilterCategories.tsx'
import { FilterPrice } from '@/components/ui/filter/FilterPrice.tsx'
import { MainButton } from '@/components/inputs/MainButton.tsx'
import { TitleFilter } from '@/components/title/TitleFilter.tsx'
import { useState } from 'react'
import { cn } from '@sglara/cn'
import useWindowSize from '@/hook/useWindowSize.ts'

export function Filter() {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowSize()

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <div
      className={cn(
        [isOpen && 'pt-2.75 pb-6', !isOpen && 'py-4.5'],
        'w-[290px] rounded-[5px] bg-[#262022] px-3.25 text-white',
      )}
    >
      {width <= 768 && (
        <div className='flex justify-center'>
          <button onClick={toggleOpen}>
            {isOpen ? (
              <div className='mb-3.5 underline'>закрыть</div>
            ) : (
              <TitleFilter title='фильтр' />
            )}
          </button>
        </div>
      )}

      {(isOpen || width > 768) && (
        <div>
          <FormSearch />
          <FilterCategories />
          <FilterPrice />
          <div className='mt-7.75 h-11'>
            <MainButton title='Подобрать' />
          </div>
        </div>
      )}
    </div>
  )
}
