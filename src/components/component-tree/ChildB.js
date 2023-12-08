import React, { useState } from 'react'
import ChildC from './ChildC'

function ChildB() {
  const[counter,setCounter]=useState(0)
  const[name,setName]=useState("sai")
  return (
    <div>
        <ChildC  name={name} />
        <h2>{counter}</h2>
        <button onClick={()=>setCounter(counter+1)} >+</button>
    </div>
  )
}

export default ChildB

// Pure component 

// it will prevent the un-neccessary re-render , component should re-render only 
// state or prop chages