import { useState } from 'react'
import './App.css'
import './index.css'
import Footer from './components/Footer'
import TestPage from './pages/TestPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TestPage />
    <Footer />
    </>
  )
}

export default App
