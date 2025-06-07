import React from "react";

export default function CSSResponsiveExample() {
  return (
    <div>
      <h3>Responsive Design & Media Queries</h3>
      <p>
        Responsive design uses flexible layouts and <code>@media</code> queries to adapt to different screens.
      </p>
      <pre style={{background:'#eee',padding:10,borderRadius:6}}>
{`@media (max-width: 600px) {
  .box { width: 100%; }
}
@media (min-width: 601px) {
  .box { width: 400px; }
}`}
      </pre>
      <h4>Live Render:</h4>
      <div className="box" style={{
        width: window.innerWidth <= 600 ? '100%' : 400,
        background:'#ffd',padding:12,margin:'auto'
      }}>
        Resize the window to see me change width!
      </div>
    </div>
  );
}