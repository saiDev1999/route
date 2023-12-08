import { createContext, useState } from "react"
import ChildA from "./ChildA"



 
export const UserDetails = createContext()
const ParentComponent =()=>{

    const[name,setName]=useState("sai")
    const[userDetails,setDetails]=useState({
 name:"a",
 id:1,
 class:"10th"       
    })

    return(
        <>
        <UserDetails.Provider value={userDetails}  >
        <h1>I am from parent component</h1>
        <ChildA  />
        </UserDetails.Provider>
      
        </>
    )
}

export default ParentComponent



// context api 

// 3 steps :


// 1.create context 
// 2. wrap the context with the provider 
// 3 use the context 




