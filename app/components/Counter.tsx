'use client'; // tell NextJS this is a client component

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h4>Count: {count}</h4>
      <button
        className="border p-1"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        className="border p-1"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
