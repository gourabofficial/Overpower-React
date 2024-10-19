import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQUSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#!$%&*()";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      
      <div className="w-full max-w-md mx-auto text-orange-500
       bg-gray-400 rounded-lg shadow-md px-4 my-8 h-52">
        <h1 className="text-4xl text-red-600 mb-8 p-2">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden
       md-4">
          
          <input type="text"
            value={password } className="outline-none w-full px-3 py-1" placeholder="Password" readOnly
          />
          <button className=" bg-blue-500 outline-none text-white py-0.5 px-3 shrink-0 ">copy</button>

        </div>
        
      </div>
    </>
  );
}

export default App;
