import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CryptoHome from './pages/CryptoHome'
import CryptoDetail from './pages/CryptoDetail'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <h1 className="text-center bg-slate-200 py-6 text-3xl font-bold underline">
            Hello world!
          </h1> */}
          <Route path='/' element={<CryptoHome />}></Route>
          <Route path='/coin/:id' element={<CryptoDetail />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
