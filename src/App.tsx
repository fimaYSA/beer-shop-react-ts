import { HomePage } from './pages/HomePage.tsx'
import { Carcass } from './components/containers/Carcass.tsx'

function App() {
  return (
    // <div className='max-w-480 mx-auto'>
    <Carcass>
      <HomePage />
    </Carcass>
  // </div>
)
}

export default App
