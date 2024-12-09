import { createContext } from "react";

export const MyContext = createContext();



export const MyContextProvider = ({ children }) => {

  const myValue = "i am Gourab"
  const myValue2 = " Ganguly"

  const myValue3 = " I am a Full Stack Developer"
  return <MyContext.Provider value={{myValue,myValue2,myValue3}}>
    {children}
  </MyContext.Provider>
}

