import React, { useState } from "react";

/**
 * Lists and Keys Example
 * ----------------------
 * Demonstrates rendering a dynamic list and using unique keys for each item.
 */
export default function ListsAndKeysExample() {
  const [items, setItems] = useState([
    { id: 1, text: "Learn JSX" },
    { id: 2, text: "Understand Props" },
    { id: 3, text: "Master State" },
  ]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li> // Key must be unique
        ))}
      </ul>
    </div>
  );
}