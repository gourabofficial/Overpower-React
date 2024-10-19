import { useCallback,useEffect, useState,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const[copied,setCopied] = useState(false)
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
    setCopied(true); 

    setTimeout(() => {
      setCopied(false);
    }, 1000);

  })

  useEffect(() => {
      passwordGenerator()
    },[length,charAllowed,numberAllowed,passwordGenerator])


  return (
    <>
       
      <div className="w-full max-w-fit  h-72 mx-auto  text-black
       bg-gray-800 rounded-lg shadow-md px-4 my-8 ">
        <h1 className="text-4xl  shadow-xl font-bold text-orange-400 mb-8 p-2">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden
       md-4">
          
          <input type="text"
            value={password} className="outline-none font-bold w-full px-3 py-1"
            placeholder="Password" readOnly ref={ passwordRef}
          />
           <button
            onClick={copypassword}
            className={`bg-blue-500 outline-none text-white py-2 px-4 rounded-r-md transition
               duration-300 ease-in-out transform hover:scale-105 ${
              copied ? "bg-blue-900" : "hover:bg-blue-600"
            }`} 
          >
            {copied ? "Copied!" : "Copy"} 
          </button>

        </div>

        <div className='flex text-sm gap-x-2'> 
          <div className='flex items-center gap-x-1'>

            <input type="range" min={8} max={100} value={length} className=""
              onChange={(e)=>{setLength(e.target.value)} } />
            <label className=" font-bold text-xl text-white p-4">Length:({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input  type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}/>
         < label className="font-bold text-xl  text-white" htmlFor ="numberInput">Numbers</label>
          </div>
          <div className=" p-4 flex items-center gap-x-1">
          <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setcharAllowed((prev) => !prev )
              }}
          />
          <label  className="font-bold text-xl text-white" htmlFor="characterInput">Characters</label>
      </div>
        </div>
        </div>
      
    </>
  );
}

export default App;
