import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";


//  this is my parent components

function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Card name={name} setName={setName} /> // here i am passing the value and function to the child components
      <h4>I am in parent comonents:{name}</h4>
    </>
  );
}

export default App;
