import React from "react";

export default function CSSVariablesExample() {
  return (
    <div>
      <h3>CSS Variables (Custom Properties)</h3>
      <p>
        Define and reuse values with <code>--my-color: #09c;</code><br />
        Use: <code>color: var(--my-color);</code>
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`:root {
  --main-bg: #f5f9ff;
  --main-color: #09c;
}
.box {
  background: var(--main-bg);
  color: var(--main-color);
}`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{
        background:'#f5f9ff',color:'#09c',padding:14,borderRadius:4
      }}>
        This uses CSS variables!
      </div>
    </div>
  );
}