import { Logo } from './Logo.tsx'
import { SocialMedia } from '../SocialMedia.tsx'
import { Nav } from './Nav.tsx'
import { Cart } from '../Cart.tsx'
import { Search } from '../inputs/Search.tsx'

export function Header() {
  return (
    <header className='absolute text-white top-3 w-[1120px] z-10 left-1/2 -translate-x-1/2'>
      <div className='w-full flex items-end justify-between absolute top-15'>
        <SocialMedia />
        <div className='flex gap-8.75 items-end'>
          <Search />
          <Cart />
        </div>
      </div>
      <div className='flex flex-col gap-5.5 items-center'>
        <Logo direction='col' />
        <Nav />
      </div>
    </header>
  )
}
