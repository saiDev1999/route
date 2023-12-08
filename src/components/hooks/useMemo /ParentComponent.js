import { useState } from "react"
import ChildComponent from "./ChildComponent"







const ParentComponent =()=>{
    const[greeting]=useState("Good Morning")
    return(
        <>
        <ChildComponent text={greeting} />
        </>
    )
}

export default ParentComponent

