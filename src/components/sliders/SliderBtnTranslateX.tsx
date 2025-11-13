import { SliderBtn } from './SliderBtn.tsx'
import { type RefObject, useEffect, useState } from 'react'

type PropsT = {
  onTranslateX: (value: number) => void
  viewportRef: RefObject<HTMLDivElement | null>
}

export const SliderBtnTranslateX = ({ onTranslateX, viewportRef }: PropsT) => {
  const [offset, setOffset] = useState(0)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [scrollElementWidth, setScrollElementWidth] = useState(0)

  const getViewportData = () => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth
      setViewportWidth(viewportWidth)

      const scrollElement = viewportRef.current.firstChild as HTMLElement
      const scrollElementWidth = scrollElement?.offsetWidth
      setScrollElementWidth(scrollElementWidth)
    }
  }

  useEffect(() => {
    getViewportData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      getViewportData()
      onTranslateX(0)
      setOffset(0)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const updateWith = () => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth

      const scrollElement = viewportRef.current.firstChild as HTMLElement

      const scrollElementItemsCount = scrollElement.childElementCount

      const items = scrollElement.firstChild as HTMLElement
      const itemsWidth = items.offsetWidth
      const gap =
        (scrollElementWidth - itemsWidth * scrollElementItemsCount) / (scrollElementItemsCount - 1)

      const move = Math.round(itemsWidth + gap)

      return { move, viewportWidth }
    }
    return undefined
  }

  const updateWithRight = () => {
    const result = updateWith()
    if (result) {
      onTranslateX(result.move)
      setOffset((prev) => prev + result.move)
      setViewportWidth(result.viewportWidth)
    }
  }

  const updateWithLeft = () => {
    const result = updateWith()
    if (result) {
      onTranslateX(-result.move)
      setOffset((prev) => prev - result.move)
      setViewportWidth(result.viewportWidth)
    }
  }

  return (
    <div className='flex justify-between'>
      <SliderBtn colorBtn='green' disabled={offset === 0} onClick={updateWithLeft} />
      <SliderBtn
        colorBtn='green'
        rotate={180}
        disabled={scrollElementWidth - (viewportWidth + offset) === 0}
        onClick={updateWithRight}
      />
    </div>
  )
}
