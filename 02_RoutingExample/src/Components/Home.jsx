import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function handalClick() {
    navigate("/Portfolio");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handalClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Click
      </button>
    </div>
  );
};
