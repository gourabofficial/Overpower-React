import React from "react";
import { useParams } from "react-router-dom";

export const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white 
    p-4 text-3xl flex justify-center ">
      User: {userid}
    </div>
  );
};
