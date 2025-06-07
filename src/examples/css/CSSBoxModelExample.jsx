import React from "react";

export default function CSSBoxModelExample() {
  return (
    <div>
      <h3>The CSS Box Model</h3>
      <p>
        Every element is a box made of: <b>content</b>, <b>padding</b>, <b>border</b>, and <b>margin</b>.<br />
        <code>box-sizing: border-box;</code> makes width include padding and border.
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`.box {
  width: 200px;
  padding: 16px;
  border: 4px solid #009;
  margin: 12px;
  box-sizing: border-box;
}`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{
        width:200, padding:16, border:'4px solid #009', margin:12, boxSizing:'border-box', background:'#eef'
      }}>
        This box is 200px wide (including padding & border).
      </div>
    </div>
  );
}