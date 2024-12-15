import { useRef } from "react";
import "./App.css";

function App() {

  let changeColor = useRef()

  function handleClick() {
  
    changeColor.current.style.backgroundColor = "red";
    changeColor.current.style.color = "white";
    changeColor.current.style.width = "50vh";
    changeColor.current.style.height = "50vh";
    changeColor.current.innerText = "Hello from Gourab";

    if (changeColor.current.innerText === "Hello from Gourab") {
      setTimeout(() => {
        changeColor.current.innerText = "Now the backgroud will change to Black , get ready";
      }, 1000);

      setTimeout(() => {
        changeColor.current.style.backgroundColor = "Black";
        changeColor.current.innerText= "Hehehehehe....";
      },4000)
    }
}

  return (
    <>
      <div>
        <button  ref={changeColor}>changing color background</button>
      </div>
      <br />
      <div>
        <button onClick={handleClick}>Click Here</button>
      </div>
    </>
  );
}

export default App;
