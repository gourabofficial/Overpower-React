import React, { useContext } from "react";
import { UserContext } from "../App";


export const ChildC = () => {
  const user = useContext(UserContext);


  return (
    <div>
      data: {user.name}
    </div>
  );
};
export default ChildC;