import React from "react";
import { useEffect,useState } from "react";

function CountComp() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    alert("Count is done..");
  }, [count]);
  
  function handalclick() {
    setcount(count + 1);
  }

  return <>
    count is : {count}
    <button onClick={handalclick } >click me </button>
  </>;
}

export default CountComp;
