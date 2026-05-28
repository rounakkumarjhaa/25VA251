import React, { useState } from 'react'

function UseState() {
    const[color,setColor] = useState('blue');
    const mouseover = () => {
        //setColor('red');
        setColor(color=='blue' ? 'red' : 'blue')
    }
    // Counter
    const[count,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset=()=>{
        setCount(0);
    }
  return (
    <>
        <h1>UseState</h1>
        <p style={{color:color}} onMouseOver={mouseover}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, et deleniti culpa blanditiis voluptatibus nesciunt quo adipisci omnis saepe magnam corrupti id qui excepturi quam suscipit ipsa asperiores repellendus numquam.</p>


        <div>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    </>
  )
}

export default UseState
