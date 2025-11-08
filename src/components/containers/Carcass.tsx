import { Header } from '../Header.tsx'
import { Footer } from '../Footer.tsx'
import type { ReactElement } from 'react'

type Props = {
  children: ReactElement
}

export function Carcass({ children }: Props) {
  return (
    <div className='max-w-480 mx-auto relative'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
