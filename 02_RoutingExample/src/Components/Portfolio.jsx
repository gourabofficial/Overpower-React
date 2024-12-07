import React from "react";
import { Link } from "react-router-dom";

export const Portfolio = () => {
  return (
    <>
      <p className="font-bold  ">
        if you want to see my portfolio click here

        </p>
    <div className="flex justify-center items-center h-screen">
      <Link to="https://gourab-portfolio.vercel.app/">
        
        
        <button className=" bg-orange-500 text-white font-extrabold py-2 px-4 rounded hover:bg-orange-700 ">
          click
      </button>
      
      </Link>
      </div>
      </>
  );
};