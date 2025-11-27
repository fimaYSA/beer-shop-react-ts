import type { ChangeEvent } from 'react'
import { cn } from '@sglara/cn'

type Props = {
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  min: number
  max: number
  step: number
  position: 'start' | 'end'
}

export function InputPrice({ value, onChange, min, max, step, position }: Props) {
  return (
    <div
      className={cn(
        `flex h-8.5 w-30 rounded-[5px] bg-white px-2.75 py-1.5 text-lg leading-5.5 font-medium
        text-black`,
        position === 'end' ? 'justify-end' : '',
      )}
    >
      <input
        type='number'
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className='w-3/10 [appearance:textfield] focus:outline-none
          [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
      />
      <span>₽</span>
    </div>
  )
}
