import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);

    function handleClick1() {
        setCounter(counter + 1);
    }

    function handleClick2() {
        setCounter(counter - 1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleClick1}>Increase</button>
        <button onClick={() => setCounter(counter + 1)}>Increase2</button>
        <div style={{fontSize: 60, color: "blue"}}>           
            {counter}
        </div>
        <button onClick={handleClick2}>Decrease</button>
    </div>
  )
}