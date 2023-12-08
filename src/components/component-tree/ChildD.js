import React, { useContext } from 'react'
import { UserDetails } from './Parent'

function ChildD() {
   const user = useContext(UserDetails)


   console.log(user)

  return (
    <div>

        <h1>hai good morning i am {user.name}</h1>
        <h1>my id is {user.id}</h1>
        <h1>my class {user.class}</h1>
    </div>
  )
}

export default ChildD