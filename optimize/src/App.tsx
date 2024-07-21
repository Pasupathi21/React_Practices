import { useState } from 'react'
import './App.css'
import Opt from './pages/opt/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Opt></Opt>
    </>
  )
}

export default App
