import React from "react"



const Value =({value})=>{
    console.log("currentValue---",value)
    return(
        <>
        <h1>{value}</h1>
        </>
    )
}
export default React.memo(Value)