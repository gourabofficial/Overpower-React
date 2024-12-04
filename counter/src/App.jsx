import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 function addvalue(){
   setCount(count + 1);
 }
  function removevalue() {
    setCount(count - 1);
    if (count === 0) {
      setCount(0);
      alert("count cannot be less than 0")
    }

  }
  

  return (
    <>
      <h1>
        count : {count }
      </h1>
      <button
        onClick={ addvalue}
      >add value:{count}</button> {" "}
      <button
      onClick={removevalue}
      
      >remove value:{count}</button>
    </>
  )
}

export default App
