import React from "react";

/**
 * Props Example
 * -------------
 * "Props" are how data flows from parent to child components.
 * Here, we pass a "message" prop.
 */
function Message({ message }) {
  return <div style={{ color: "#067" }}>{message}</div>;
}

export default function PropsExample() {
  return (
    <div>
      <Message message="Props make components reusable!" />
      <Message message="Each instance can get different data." />
    </div>
  );
}