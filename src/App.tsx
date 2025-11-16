import { HomePage } from './pages/HomePage.tsx'
import { Carcass } from './components/containers/Carcass.tsx'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <Routes>
      <Route element={<Carcass />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
