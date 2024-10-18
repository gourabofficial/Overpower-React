import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-6'  >Cristiano Ronaldo </h1>
      <Card name = "Gourab Ganguly" />
      <Card name = "Budhadev Koner" />
    </>
  )
}

export default App
