import { useState } from 'react'
import { SliderBtn } from './SliderBtn.tsx'
import { SelectedSlideBtn } from './SelectedSlideBtn.tsx'

export function Slider() {
  const [sliderImg, setSliderImg] = useState(1)
  const urlImg = '/images/slider/SLIDE_' + sliderImg + '.jpg'

  const handelClickNext = () => {
    setSliderImg((prev) => prev + 1)
  }
  const handelClickPrev = () => {
    setSliderImg((prev) => prev - 1)
  }
  const handelClick = (id: number) => {
    setSliderImg(id)
  }

  return (
    <div
      style={{ backgroundImage: `url(${urlImg})` }}
      className={'bg-no-repeat bg-center bg-cover duration-300 w-full h-full'}
    >
      <div className='w-full h-full bg-black/60 relative flex flex-col items-center'>
        <div
          className='flex w-72.5 xl:w-292 justify-between absolute bottom-14 md:bottom-51
            xl:bottom-111'
        >
          <SliderBtn onClick={handelClickPrev} disabled={sliderImg - 1 === 0} colorBtn='white' />
          <SliderBtn
            onClick={handelClickNext}
            disabled={sliderImg === 3}
            colorBtn='white'
            rotate={180}
          />
        </div>

        <div className='absolute bottom-14 md:bottom-51'>
          <SelectedSlideBtn onClick={handelClick} selectedID={sliderImg} />
        </div>
      </div>
    </div>
  )
}
