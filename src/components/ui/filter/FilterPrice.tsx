import { TitleFilter } from '@/components/title/TitleFilter.tsx'
import { type ChangeEvent, useState } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { InputPrice } from '@/components/inputs/InputPrice.tsx'

const MIN_PRICE_LIMIT = 0
const MAX_PRICE_LIMIT = 199
const STEP = 1

export function FilterPrice() {
  const [minPrice, setMinPrice] = useState(MIN_PRICE_LIMIT)
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_LIMIT)

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value >= MIN_PRICE_LIMIT && value <= maxPrice) {
      setMinPrice(value)
    }
  }

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    if (value <= MAX_PRICE_LIMIT && value >= minPrice) {
      setMaxPrice(value)
    }
  }

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      const [min, max] = value
      setMinPrice(min)
      setMaxPrice(max)
    }
  }

  return (
    <>
      <div className='border-b-main-dark_gray border-b pt-8 pb-1.75'>
        <TitleFilter title='Цена' />
      </div>

      <div className='mt-5 mb-6.25 flex items-center gap-1.5'>
        <InputPrice
          value={minPrice}
          onChange={handleMinChange}
          min={MIN_PRICE_LIMIT}
          max={MAX_PRICE_LIMIT}
          step={STEP}
          position='start'
        />

        <div className='w-2.75 border border-b-white' />

        <InputPrice
          value={maxPrice}
          onChange={handleMaxChange}
          min={MIN_PRICE_LIMIT}
          max={MAX_PRICE_LIMIT}
          step={STEP}
          position='end'
        />
      </div>

      <Slider
        range
        min={MIN_PRICE_LIMIT}
        max={MAX_PRICE_LIMIT}
        value={[minPrice, maxPrice]}
        dotStyle={{ backgroundColor: 'red', height: '2px' }}
        activeDotStyle={{ border: 'none' }}
        styles={{
          rail: { backgroundColor: '#FDCF55', height: '2px' },
          track: { backgroundColor: '#FFF', height: '2px' },
          handle: {
            backgroundColor: '#FDCF55',
            width: '10px',
            height: '10px',
            border: 'none',
            opacity: '100',
            top: '6px',
          },
        }}
        onChange={
          handleSliderChange
          // (value: number | number[]) => {
          //   if (Array.isArray(value)) {
          //     const [min, max] = value
          //     setMinPrice(min)
          //     setMaxPrice(max)
          //   }
          // }
        }
      />
    </>
  )
}
