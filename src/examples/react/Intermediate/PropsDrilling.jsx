import React from "react";

/**
 * Prop Drilling Example
 * ---------------------
 * Data is passed through multiple nested components.
 */
function Level3({ message }) {
  return <div style={{ color: "#0a7" }}>Level 3 received: {message}</div>;
}
function Level2({ message }) {
  return <Level3 message={message} />;
}
function Level1({ message }) {
  return <Level2 message={message} />;
}

export default function PropDrillingExample() {
  return <Level1 message="Hello from the top!" />;
}