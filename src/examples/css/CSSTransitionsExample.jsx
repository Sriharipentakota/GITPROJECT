import React, { useState } from "react";

export default function CSSTransitionsExample() {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <h3>CSS Transitions</h3>
      <p>
        Transitions create smooth changes for property values (like color, size).
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`.box {
  transition: background 0.3s;
}
.box:hover {
  background: #0cf;
}`}
      </pre>
      <h4>Live Render:</h4>
      <div
        style={{
          transition: 'background 0.3s',
          background: hovered ? '#0cf' : '#09c', color:'#fff',
          padding:16,borderRadius:5,display:'inline-block',cursor:'pointer'
        }}
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
      >
        Hover me for a transition!
      </div>
    </div>
  );
}