import { useState } from 'react'
import './App.css'
import './index.css'
import ComponentTest from './pages/ComponentTest'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ComponentTest />
    </>
  )
}

export default App
