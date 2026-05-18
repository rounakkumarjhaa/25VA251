import React, { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0);   // ✅ Example useState usage

  return (
    <>
      <h1>UseState Example</h1>
      <p style={{ color: 'red' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum alias explicabo, et corrupti odio tempore neque, totam quas quis sunt suscipit atque numquam maiores porro rerum perspiciatis provident id excepturi natus vero!
      </p>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default UseState;