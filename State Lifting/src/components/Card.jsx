import React from 'react'
import "/home/gourabsr4/Desktop/Overpower-React/State Lifting/src/App.css"


// this is my child components

export const Card = ({name,setName}) => {
  return (
    <div>
      <input
        type="text"
        value={name} // this is the value that is passed from parent components
        onChange={(e) => setName(e.target.value)}  // this is the function that is passed from parent components
        placeholder="Enter your name"
      />
      <p>i am in child components: {name }</p>    
    </div>
   
  )
}
