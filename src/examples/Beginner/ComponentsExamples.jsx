import React from "react";

/**
 * Components Example
 * ------------------
 * This shows a parent component using a child component.
 * Both are function components.


Key Features of React Components
1.	Reusability: Components can be reused across different parts of an application, promoting code reuse and reducing redundancy.
2.	Isolation: Each component operates independently, which helps in isolating concerns and making the codebase more manageable.
3.	Composition: Components can be composed together to build complex UIs. A component can include other components as children.
4.	State Management: Components can manage their own state, which allows them to maintain and update data over time.
5.	Lifecycle Methods: Class components have lifecycle methods that allow you to run code at specific points in a component's lifecycle (e.g., when it mounts, updates, or unmounts).
 */

// Child component
function Greeting({ who }) {
  return <p>Hello, {who}!</p>;
}

// Parent component
export default function ComponentsExample() {
  return (
    <div>
      <h4>Greeting Component:</h4>
      <Greeting who="World" />
      <Greeting who="React Developer" />
    </div>
  );
}