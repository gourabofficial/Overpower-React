import { useState } from 'react';
import './index.css' 

  

function App() {
  const [color, setColor] = useState("red");

  return (
    <div 
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >

    </div>  

  );

}

export default App;

