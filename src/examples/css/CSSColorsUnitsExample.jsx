import React from "react";

export default function CSSColorsUnitsExample() {
  return (
    <div>
      <h3>Colors, Units, & Typography</h3>
      <ul>
        <li>Colors: Named (<code>red</code>), HEX (<code>#ff0000</code>), RGB (<code>rgb(255,0,0)</code>)</li>
        <li>Units: <code>px</code> (pixels), <code>em</code>, <code>rem</code>, <code>%</code>, <code>vw</code>, <code>vh</code></li>
        <li>Typography: <code>font-size</code>, <code>font-family</code>, <code>font-weight</code></li>
      </ul>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`h2 { color: #ff6600; }
p { font-size: 1.2em; font-family: Arial; }
span { color: rgb(0,128,0); }`}
      </pre>
      <h4>Live Render:</h4>
      <div>
        <h2 style={{color:'#ff6600'}}>Orange Heading</h2>
        <p style={{fontSize:'1.2em',fontFamily:'Arial'}}>Custom font size and family.</p>
        <span style={{color:'rgb(0,128,0)'}}>Green text (RGB)</span>
      </div>
    </div>
  );
}