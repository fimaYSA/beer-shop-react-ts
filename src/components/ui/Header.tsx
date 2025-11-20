import { Logo } from '@/components/ui/Logo.tsx'
import { SocialMedia } from '@/components/SocialMedia.tsx'
import { Nav } from '@/components/ui/Nav.tsx'
import { Cart } from '@/components/Cart.tsx'
import { Search } from '@/components/inputs/Search.tsx'
import { BurgerMenu } from '@/components/ui/BurgerMenu.tsx'
import { NavLink } from 'react-router'
import { PATS } from '@/common/routing/routesConstants.ts'

export function Header() {
  return (
    <header
      className='absolute top-0 left-1/2 z-10 w-full -translate-x-1/2 pt-3 text-white md:w-[87.5%]
        xl:w-[1120px]'
    >
      <div className='absolute top-15 hidden w-full items-end justify-between md:flex'>
        <SocialMedia />
        <div className='flex items-end gap-8.75'>
          <Search />
          <Cart />
        </div>
      </div>

      <div className='absolute top-[191px] left-1/2 hidden -translate-x-1/2 md:block'>
        <Nav direction='row' />
      </div>

      <NavLink to={PATS.Home}>
        <div className='flex justify-center'>
          <Logo direction='col' />
        </div>
      </NavLink>

      <BurgerMenu />
    </header>
  )
}
