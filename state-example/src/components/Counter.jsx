import React, { useState } from 'react'

export default function Counter() {
    let [count,setCount] = useState(0)
    const increment=()=> {
        setCount(count++)
       
    }
    const decrement=() => {
        setCount(count-1);
    }
  return (
    <div>
      <h1>Counter {count}</h1>
      <button onClick={increment}>Add</button><br />
      <button onClick={decrement}>Sub</button><br />
      <button onClick={()=>{setCount(0)}}>Reset</button>
    </div>
  )
}
