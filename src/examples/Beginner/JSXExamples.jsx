import React from "react";

/**
 * JSX Example
 * -----------
 * This component demonstrates how JSX lets you mix HTML-like syntax with JavaScript.
 * Note: You must return a single parent element in JSX.

Key Features of JSX
1.	HTML-like Syntax: JSX looks similar to HTML, but it is actually transformed into JavaScript objects by tools like Babel.
2.	Embedding Expressions: You can embed JavaScript expressions inside JSX using curly braces {}.
3.	Attributes: JSX allows you to use attributes just like in HTML, but with camelCase naming convention for attributes (e.g., className instead of class).
4.	Children: JSX can contain children elements, which can be other components, HTML elements, or text.
 */
export default function JSXExample() {
  const name = "React Learner";
  return (
    <div>
      <h3>Hello, {name}!</h3>
      <p>This is rendered using <strong>JSX</strong>.</p>
      {/* You can embed any JS expression using curly braces */}
    </div>
  );
}