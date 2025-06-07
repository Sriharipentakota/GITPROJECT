import React, { useState } from "react";

/**
 * State Example
 * -------------
 * useState lets you add local state to function components.
 */
export default function StateExample() {
  // count is the current state value; setCount updates it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: <strong>{count}</strong></p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        style={{ marginLeft: 8 }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
}