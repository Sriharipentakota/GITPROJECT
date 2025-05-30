import React, { useState } from "react";

/**
 * Conditional Rendering Example
 * ----------------------------
 * Demonstrates showing/hiding content based on state.
 */
export default function ConditionalRenderingExample() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? (
        <div>Welcome, user! <button onClick={() => setLoggedIn(false)}>Logout</button></div>
      ) : (
        <div>
          Please log in. <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
}