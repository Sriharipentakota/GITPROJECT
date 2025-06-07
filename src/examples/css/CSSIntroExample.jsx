import React from "react";

export default function CSSIntroExample() {
  return (
    <div>
      <h3>What is CSS?</h3>
      <p>
        CSS (Cascading Style Sheets) is used to control the appearance of web pages. It can be included in HTML in three ways:
      </p>
      <ul>
        <li><b>External:</b> <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></li>
        <li><b>Internal:</b> <code>&lt;style&gt; ... &lt;/style&gt;</code> inside <code>&lt;head&gt;</code></li>
        <li><b>Inline:</b> <code>style="color: red;"</code> on an HTML element</li>
      </ul>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`<style>
  p { color: green; }
</style>
<p>This is a green paragraph.</p>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border:'1px solid #ccc',padding:12,background:'#fff'}}>
        <p style={{color:'green'}}>This is a green paragraph.</p>
      </div>
    </div>
  );
}