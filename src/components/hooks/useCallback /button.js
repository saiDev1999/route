import React from "react";

const Button = ({handleIncrement,value}) => {
    console.log("handleIncrement",value)
  return <button onClick={()=>handleIncrement(10)}>Increment {value}</button>;
};

export default React.memo(Button);
