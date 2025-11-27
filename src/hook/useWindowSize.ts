import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 200)

    window.addEventListener('resize', handleResize)

    // Очистка: отменяем addEventListener & debounce при размонтировании
    return () => {
      window.removeEventListener('resize', handleResize)
      handleResize.cancel()
    }
  }, [])

  return windowSize
}

export default useWindowSize
