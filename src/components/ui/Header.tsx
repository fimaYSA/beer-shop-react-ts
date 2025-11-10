import { Logo } from './Logo.tsx'
import { SocialMedia } from '../SocialMedia.tsx'
import { Nav } from './Nav.tsx'
import { Cart } from '../Cart.tsx'
import { Search } from '../inputs/Search.tsx'
import { BurgerMenu } from './BurgerMenu.tsx'

export function Header() {
  return (
    <header
      className='absolute text-white pt-3 top-0 w-full md:w-[87.5%] xl:w-[1120px] z-10 left-1/2
        -translate-x-1/2'
    >
      <div className='w-full hidden md:flex items-end justify-between absolute top-15'>
        <SocialMedia />
        <div className='flex gap-8.75 items-end'>
          <Search />
          <Cart />
        </div>
      </div>

      <div className='hidden md:block absolute top-[191px] left-1/2 -translate-x-1/2'>
        <Nav direction='row' />
      </div>

      <div className='flex justify-center'>
        <Logo direction='col' />
      </div>

      <BurgerMenu />
    </header>
  )
}
