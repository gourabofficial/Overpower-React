import React, { useState } from "react";
import Product from "./Product";
function App() {
  
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 text-white p-5">
        <Product  data={{name:"Gourab Ganaguly",age:20, coder: 'coder: yes'} } />
      </div>
      </>
  );
}
export default App;
