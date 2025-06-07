import React from "react";

export default function CSSGridExample() {
  return (
    <div>
      <h3>CSS Grid</h3>
      <p>
        CSS Grid is for 2D layouts. Define rows and columns, and place items precisely.
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,background:'#f2f2f2',padding:8}}>
        <div style={{background:'#148',color:'#fff',padding:10,borderRadius:3}}>1</div>
        <div style={{background:'#396',color:'#fff',padding:10,borderRadius:3}}>2</div>
        <div style={{background:'#a53',color:'#fff',padding:10,borderRadius:3}}>3</div>
        <div style={{background:'#888',color:'#fff',padding:10,borderRadius:3}}>4</div>
        <div style={{background:'#c36',color:'#fff',padding:10,borderRadius:3}}>5</div>
        <div style={{background:'#093',color:'#fff',padding:10,borderRadius:3}}>6</div>
      </div>
    </div>
  );
}