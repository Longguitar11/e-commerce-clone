import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/layout/Header'

function App() {
  return (
    <div className='bg-white'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
