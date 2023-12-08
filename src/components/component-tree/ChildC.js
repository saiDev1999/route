import React, { Component } from 'react'
import ChildD from './ChildD'

function ChildC({name}) {
  console.log("child re-render")
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default React.memo(ChildC)



//  Pure Component : class based 

// functiin Component : React.memo()


