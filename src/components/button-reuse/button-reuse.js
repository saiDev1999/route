

import React from 'react'

function ButtonReuse({increment,decrement,reset}) {
  return (
    <>
    <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>

</>
  )
}

export default ButtonReuse