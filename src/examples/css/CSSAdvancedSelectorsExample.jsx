import React from "react";

export default function IntermediateAdvancedSelectorsExample() {
  return (
    <div>
      <h3>Advanced Selectors</h3>
      <ul>
        <li><b>Descendant:</b> <code>div p</code> (all <code>p</code> inside <code>div</code>)</li>
        <li><b>Child:</b> <code>ul &gt; li</code> (direct <code>li</code> children of <code>ul</code>)</li>
        <li><b>Attribute:</b> <code>input[type="text"]</code></li>
      </ul>
      <pre style={{background:'#f4f4f4',padding:10,borderRadius:6}}>
{`div p { color: teal; }
ul > li { font-weight: bold; }
input[type="text"] { border: 2px solid #0f0; }
`}
      </pre>
      <div>
        <div>
          <p style={{color:"teal"}}>Styled via descendant selector</p>
        </div>
        <ul>
          <li style={{fontWeight:'bold'}}>Direct child</li>
          <li>Not direct child</li>
        </ul>
        <input type="text" placeholder="Styled input" style={{border:'2px solid #0f0'}} />
      </div>
    </div>
  );
}