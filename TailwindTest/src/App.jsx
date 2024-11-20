import { useState } from 'react'
import './App.css'
import { Card } from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card  name={"Gourab Ganguly"} age={21}/>
      <Card name={"Budhadev Koner"} />
      <Card name={"Rahul Bro"}  age={22}/>
      <Card name={"Bebesh mondal"} age={19} />
      <Card name={"dev "} age={25}/>
    </>
  )
}

export default App
