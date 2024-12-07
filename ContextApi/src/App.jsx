import { createContext, useState } from 'react'
import { ChildA } from './ChildA'


const UserContext = createContext();


function App() {

  const [user,setUser] = useState({name: "Ronaldo"})



  return (

    <div>
      <UserContext.Provider  value= {user}>
      <ChildA />
      </UserContext.Provider>
    
    </div>
  )
}

export default App
export { UserContext}
