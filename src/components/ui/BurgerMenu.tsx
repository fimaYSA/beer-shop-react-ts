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
  const handelCloseMenu= ()=>setIsOpen(false)

  return (
    <div className='md:hidden'>
      {/* Кнопка бургера */}
      <button
        onClick={toggleMenu}
        className='absolute top-8.75 right-3.5 z-10 flex size-6 cursor-pointer flex-col items-center
          justify-center gap-0.75'
      >
        {/*Иконка бургера */}
        <div
          className='h-0.75 w-6 rounded-full bg-[#FDCF55] transition-all duration-300'
          style={{
            transform: isOpen ? 'rotate(45deg) translateY(2px) translateX(2px)' : 'rotate(0deg)',
          }}
        ></div>
        <div
          className='h-0.75 w-6 rounded-full bg-[#FDCF55]'
          style={{
            display: isOpen ? 'none' : undefined,
          }}
        ></div>
        <div
          className='h-0.75 w-6 rounded-full bg-[#FDCF55] transition-all duration-300'
          style={{
            transform: isOpen
              ? 'rotate(-45deg) translateY(-2.5px) translateX(2.5px)'
              : 'rotate(0deg)',
          }}
        ></div>
      </button>

      {/* Меню */}
      <div
        className={`fixed top-0 right-0 flex h-screen w-full flex-col bg-black pt-26 pl-4.5
          text-[#FDCF55] transition duration-300 ${isOpen ? '-translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex items-end gap-6.5'>
          <Search />
          <Cart />
        </div>
        <div className='mt-7 mb-38'>
          <Nav direction='col' onCloseMenu={handelCloseMenu} />
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}
