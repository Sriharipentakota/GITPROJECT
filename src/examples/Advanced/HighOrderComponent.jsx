import React from "react";

/**
 * Higher-Order Component (HOC) Example
 * ------------------------------------
 * HOC is a function that takes a component and returns a new component.
 */
function withTimestamp(Component) {
  return function Wrapped(props) {
    return (
      <div>
        <Component {...props} />
        <div style={{ fontSize: 12, color: "#888" }}>
          Timestamp: {Date.now()}
        </div>
      </div>
    );
  };
}

function SimpleMessage() {
  return <div>Hello from a HOC!</div>;
}

export default withTimestamp(SimpleMessage);