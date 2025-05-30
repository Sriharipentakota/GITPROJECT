import React, { useEffect, useState } from "react";

/**
 * Custom Hook Example
 * -------------------
 * Reusable logic for toggling a boolean state.
 */
function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue((v) => !v);
  return [value, toggle];
}

export default function CustomHookExample() {
  const [on, toggle] = useToggle();

  useEffect(() => {
    // Log on every toggle
    console.log("Toggled: ", on);
  }, [on]);

  return (
    <div>
      <div>Status: {on ? "ON" : "OFF"}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}