import { useCallback,useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQUSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "@#!$%&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copypassword = useCallback(() => {
    passwordRef.current?.select( )
    window.navigator.clipboard.writeText(password)
  })

  useEffect(() => {
      passwordGenerator()
    },[length,charAllowed,numberAllowed,passwordGenerator])


  return (
    <>
      
      <div className="w-full max-w-fit mx-auto  text-orange-500
       bg-gray-800 rounded-lg shadow-md px-4 my-8 h-52">
        <h1 className="text-4xl font-bold text-white mb-8 p-2">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden
       md-4">
          
          <input type="text"
            value={password} className="outline-none w-full px-3 py-1"
            placeholder="Password" readOnly ref={ passwordRef}
          />
          <button onClick={copypassword} className=" bg-blue-500 outline-none text-white py-0.5 px-3 shrink-0 ">copy</button>

        </div>

        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'>

            <input type="range" min={8} max={100} value={length} className="font-bold  cursor-pointer"
              onChange={(e)=>{setLength(e.target.value)} } />
            <label className=" text-bold text-xl p-4">Length:({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input  type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}/>
         < label className="font-bold text-xl" htmlFor ="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input className="font-bold text-xl"
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
        </div>
      
    </>
  );
}

export default App;
