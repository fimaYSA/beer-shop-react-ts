import { useEffect, useState } from 'react'
import { SocialMedia } from '@/components/SocialMedia.tsx'
import { Search } from '@/components/inputs/Search.tsx'
import { Cart } from '@/components/Cart.tsx'
import { Nav } from '@/components/ui/Nav.tsx'

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    isOpen && (document.body.style.overflow = 'hidden')

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='md:hidden'>
      {/* Кнопка бургера */}
      <button
        onClick={toggleMenu}
        className='absolute top-8.75 right-3.5 size-6 flex cursor-pointer flex-col items-center
          justify-center gap-0.75 z-10'
      >
        {/*Иконка бургера */}
        <div
          className='w-6 h-0.75 bg-[#FDCF55] rounded-full transition-all duration-300'
          style={{
            transform: isOpen ? 'rotate(45deg) translateY(2px) translateX(2px)' : 'rotate(0deg)',
          }}
        ></div>
        <div
          className='w-6 h-0.75 bg-[#FDCF55] rounded-full'
          style={{
            display: isOpen ? 'none' : undefined,
          }}
        ></div>
        <div
          className='w-6 h-0.75 bg-[#FDCF55] rounded-full transition-all duration-300'
          style={{
            transform: isOpen
              ? 'rotate(-45deg) translateY(-2.5px) translateX(2.5px)'
              : 'rotate(0deg)',
          }}
        ></div>
      </button>

      {/* Меню */}
      <div
        className={`fixed top-0 right-0 flex flex-col h-screen w-full bg-black text-[#FDCF55]
          transition duration-300 pt-26 pl-4.5 ${isOpen ? '-translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex gap-6.5 items-end'>
          <Search />
          <Cart />
        </div>
        <div className='mt-7 mb-38'>
          <Nav direction='col' />
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}
