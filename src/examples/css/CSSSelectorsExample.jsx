import React from "react";

export default function CSSSelectorsExample() {
  return (
    <div>
      <h3>CSS Selectors</h3>
      <p>
        CSS selectors target HTML elements you want to style. Common types:
        <ul>
          <li><b>Element:</b> <code>p</code>, <code>h1</code></li>
          <li><b>Class:</b> <code>.my-class</code></li>
          <li><b>ID:</b> <code>#my-id</code></li>
        </ul>
      </p>
      <pre style={{background:'#f4f4f4',padding:10,borderRadius:6}}>
{`p { color: blue; }
.highlight { background: yellow; }
#special { font-weight: bold; }`}
      </pre>
      <h4>Live Example:</h4>
      <p>This is a paragraph (element selector).</p>
      <p className="highlight" style={{background:'yellow'}}>This uses a class selector.</p>
      <p id="special" style={{fontWeight:'bold'}}>This uses an ID selector.</p>
    </div>
  );
}