import { useState } from 'react'
import { Wheat } from '@/components/Wheat.tsx'
import { cn } from '@sglara/cn'

type Props = {
  category: {
    name: string
    view: string[]
    selected: boolean
  }
}

export function FilterCategory({ category }: Props) {
  const [isSelected, setIsSelected] = useState(category.selected)
  const handleClick = () => setIsSelected((prev) => !prev)

  return (
    <div className='flex transform items-start gap-2 duration-500'>
      {isSelected && (
        <div className='py-1'>
          <Wheat h={11} w={33} />
        </div>
      )}
      <div className='text-base leading-4.75'>
        <h3 className={cn(isSelected && 'font-medium', 'cursor-pointer')} onClick={handleClick}>
          {category.name}
        </h3>
        {isSelected && (
          <ul className='mt-2.5 mb-1 flex flex-col gap-2.75 font-light'>
            {category.view.map((v, index) => (
              <li key={index} className='cursor-pointer'>
                {v}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
