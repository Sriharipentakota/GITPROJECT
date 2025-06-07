import React from "react";

export default function CSSDisplayPositionExample() {
  return (
    <>
      <div>
        <h3>Display & Position</h3>
        <ul>
          <li><b>Display:</b> <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code></li>
          <li><b>Position:</b> <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code></li>
        </ul>
        <pre style={{ background: '#eee', padding: 10, borderRadius: 6 }}>
          {`span { display: inline-block; background: #ffd; }
.box { position: relative; left: 30px; }`}
        </pre>
        <h4>Live Render:</h4>
        <div>
          <span style={{ display: 'inline-block', background: '#ffd', padding: '2px 8px' }}>Inline-block span</span>
          <div className="box" style={{ position: 'relative', left: 30, background: '#def', padding: 8, marginTop: 8 }}>
            This box is shifted right by 30px (relative).
          </div>
        </div>
      </div>
      <div>
        <h3>Positioning</h3>
        <ul>
          <li><b>static</b> (default), <b>relative</b>, <b>absolute</b>, <b>fixed</b>, <b>sticky</b></li>
        </ul>
        <pre style={{ background: '#f4f4f4', padding: 10, borderRadius: 6 }}>
          {`.relative { position: relative; left: 40px; }
.absolute { position: absolute; top: 40px; left: 0; }
.fixed { position: fixed; top: 0; right: 0; }
`}
        </pre>
        <div style={{ position: 'relative', height: 80, background: '#f8f8f8', marginBottom: 10 }}>
          <div style={{ position: 'relative', left: 40, background: '#cff', padding: 4 }}>Relative Box (moved 40px right)</div>
          <div style={{ position: 'absolute', top: 40, left: 0, background: '#fcf', padding: 4 }}>Absolute Box (inside parent)</div>
        </div>
        <div style={{ position: 'fixed', top: 0, right: 0, background: '#ffe', padding: 4, zIndex: 1000 }}>
          Fixed Box (sticks to corner)
        </div>
      </div>
    </>
  );
}