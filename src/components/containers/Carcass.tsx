import { Header } from '../ui/Header.tsx'
import { Footer } from '../ui/Footer.tsx'
import { Outlet } from 'react-router'

export function Carcass() {
  return (
    <div className='max-w-480 mx-auto relative overflow-hidden'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
