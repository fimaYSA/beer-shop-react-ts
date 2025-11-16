import { Route, Routes } from 'react-router'
import { Carcass } from '@/components/containers/Carcass.tsx'
import { HomePage } from '@/pages/HomePage.tsx'
import { AboutPage } from '@/pages/AboutPage.tsx'

function App() {
  return (
    <Routes>
      <Route element={<Carcass />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
      </Route>
    </Routes>
  )
}

export default App
