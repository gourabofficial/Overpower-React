import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);

  
  function expensiveTask(num) {
    console.log("inside Big task...")
    for (let i = 0; i <= 100000000; i++){ }
    
    return num*3
    }
 
  let totalValue = useMemo(() =>expensiveTask(input), [input])


  

  return (
    <div>
      <button onClick={() => { setCount(count + 1) }}>countButton</button>
      <div>Count :{ count}</div>
      

      <div>
        total :{totalValue}
      </div>

      <input type="number"
        value={input}
        onChange={(e)=>setinput(e.target.value)}
      
      />
    </div>
  )
}

export default App;
