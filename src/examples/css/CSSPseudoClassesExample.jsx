import React from "react";

export default function CSSPseudoClassesExample() {
  return (
    <div>
      <h3>Pseudo-classes & Pseudo-elements</h3>
      <p>
        Use <code>:hover</code>, <code>:active</code>, <code>:focus</code> for states.<br />
        Use <code>::before</code>, <code>::after</code> for generated content.
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`button:hover { background: #0cf; }
p::before { content: "★ "; color: gold; }`}
      </pre>
      <h4>Live Render:</h4>
      <div>
        <button style={{padding:8,background:'#08c',color:'#fff',border:'none',borderRadius:4}}>Hover me!</button>
        <p style={{marginTop:10}}><span style={{color:'gold'}}>★</span>Starred paragraph</p>
      </div>
    </div>
  );
}