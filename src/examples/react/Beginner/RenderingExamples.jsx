import React from "react";

/**
 * Rendering Elements Example
 * -------------------------
 * React renders elements as returned from the component function.
 * You can use JavaScript to generate dynamic UI.
 */
export default function RenderingElementsExample() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <ul>
      {items.map(fruit => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}