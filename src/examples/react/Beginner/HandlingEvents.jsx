import React, { useState } from "react";

/**
 * Handling Events Example
 * ----------------------
 * You attach event handlers (like onClick) directly to elements.
 */
export default function HandlingEventsExample() {
  const [message, setMessage] = useState("Click the button!");

  function handleClick() {
    setMessage("Button was clicked! 🎉");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <div style={{ marginTop: 12 }}>{message}</div>
    </div>
  );
}