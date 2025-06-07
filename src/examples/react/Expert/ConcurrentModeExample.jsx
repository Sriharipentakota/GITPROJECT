/**
 * Concurrent Mode Example (Simulated)
 * -----------------------------------
 * React's Concurrent features are experimental, but we can show the concept of interruptible rendering.
 */
import React, { useState, startTransition } from "react";

export default function ConcurrentModeExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    // Simulate concurrent update: update state in a transition
    startTransition(() => {
      const items = [];
      for (let i = 0; i < 10000; i++) {
        items.push(`${value} - item ${i}`);
      }
      setList(items);
    });
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Type to see concurrent rendering"
      />
      <div style={{ height: 100, overflow: "auto", border: "1px solid #eee", marginTop: 10 }}>
        {list.slice(0, 20).map((item, idx) => (
          <div key={idx}>{item}</div>
        ))}
      </div>
      <p style={{ color: "#888", fontSize: 14 }}>
        (Only the first 20 of {list.length} items shown. Rendering is interruptible.)
      </p>
    </div>
  );
}