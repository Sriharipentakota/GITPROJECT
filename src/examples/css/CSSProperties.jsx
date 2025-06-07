import React from "react";

export default function BeginnerPropertiesExample() {
  return (
    <div>
      <h3>CSS Properties</h3>
      <p>
        Properties define how elements look. For example:
        <ul>
          <li><code>color</code> — text color</li>
          <li><code>background-color</code> — element background</li>
          <li><code>font-size</code> — text size</li>
        </ul>
      </p>
      <pre style={{background:'#f4f4f4',padding:10,borderRadius:6}}>
{`h2 { color: red; }
.box { background-color: #eee; font-size: 18px; }`}
      </pre>
      <h4>Live Example:</h4>
      <h2 style={{color:"red"}}>Red Heading</h2>
      <div className="box" style={{background:'#eee',fontSize:18}}>Box with background and font size</div>
    </div>
  );
}