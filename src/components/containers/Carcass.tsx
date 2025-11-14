import { Header } from '../ui/Header.tsx'
import { Footer } from '../ui/Footer.tsx'
import type { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export function Carcass({ children }: Props) {
  return (
    <div className='max-w-480 mx-auto relative overflow-hidden'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
