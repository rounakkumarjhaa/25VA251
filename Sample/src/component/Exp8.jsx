import React, { useState } from 'react';

function Exp8() {

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>

      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>+</button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

    </div>
  );
}

export default Exp8;