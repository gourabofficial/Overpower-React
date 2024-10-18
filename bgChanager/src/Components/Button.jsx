import React from 'react'
import { useState } from "react";

export const Button = () => {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center
      bottom-12 px-2
      inset-x-0 "
      >
        <div
          className="
        flex flex-wrap justify-center
        gap-3 shadow-lg bg-white rounded-3xl px-3 py-3  "
        >
          <button

            onMouseEnter={ ()=>{setColor("red")}}
            className=" w-24 h-10 outline-none px-4 bg-red-500 py-1 rounded-full text-white shadow-lg 
          
          "
          >
            
          </button>
          <button
            onMouseEnter={ ()=>{setColor("purple")}}
            className=" w-24 h-10 outline-none px-4 bg-purple-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
           
          </button>{" "}
          <button
            onMouseEnter={ ()=>{setColor("blue")}}
            className=" w-24 h-10 outline-none px-4 bg-blue-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
            
          </button>{" "}
          <button
            onMouseEnter={ ()=>{setColor("yellow")}}
            className=" w-24 h-10 outline-none px-4 bg-yellow-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
           
          </button>{" "}
          <button
            onMouseEnter={ ()=>{setColor("pink")}}
            className=" w-24 h-10 outline-none px-4 bg-pink-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
            
          </button>{" "}
          <button
            
            onMouseEnter={ ()=>{setColor("green")}}
            className=" w-24 h-10 outline-none px-4 bg-green-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
           
          </button>
          <button
            onMouseEnter={ ()=>{setColor("gray")}}
            className=" w-24 h-10 outline-none px-4 bg-gray-500 py-1 rounded-full text-white shadow-lg
          
          "
          >
            
          </button>{" "}
          
        </div>
      </div>
    </div>
  );
    </>
  )
}
