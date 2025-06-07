import React from "react";

export default function HTMLIntroExample() {
  return (
    <div>
      <h3>What is HTML?</h3>
      <p>
        HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a web page using a system of tags and elements.
      </p>
      <h4>Basic Document Structure Example:</h4>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border: "1px solid #ccc", padding: 12, margin: "1em 0", background: "#fff"}}>
        <h1>Hello, World!</h1>
        <p>This is my first web page.</p>
      </div>
      <p>
        <b>Explanation:</b> <br />
        - <code>&lt;!DOCTYPE html&gt;</code> declares the document as HTML5. <br />
        - <code>&lt;html&gt;</code> is the root element. <br />
        - <code>&lt;head&gt;</code> contains meta-information. <br />
        - <code>&lt;body&gt;</code> contains the visible page content.
      </p>
    </div>
  );
}