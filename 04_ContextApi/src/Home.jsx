import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export const Home = () => {
  const { myValue,myValue2,myValue3 } = useContext(MyContext)

  return (
    <div>
      Hello frm Home Components,
      { myValue }
      {myValue2}
      {myValue3}

    </div>
  )
}
