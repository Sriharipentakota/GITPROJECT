import React from "react";

export default function HTMLAdvancedFeaturesExample() {
  return (
    <div>
      <h3>Advanced HTML Features</h3>
      <ul>
        <li><b>Custom Data Attributes:</b> Store extra info using <code>data-*</code> attributes.</li>
        <li><b>Microdata:</b> Add machine-readable tags for search engines.</li>
        <li><b>HTML5 APIs:</b> Use <code>&lt;canvas&gt;</code> for graphics, <code>localStorage</code> for data, etc.</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<div data-user-id="42">User Info</div>
<canvas width="100" height="40" id="myCanvas"></canvas>`}
      </pre>
      <h4>Live Render:</h4>
      <div style={{border: "1px solid #ccc", padding: 12, background: "#fff"}}>
        <div data-user-id="42" style={{marginBottom: 8}}>User Info (data-user-id="42")</div>
        <canvas id="myCanvas" width="100" height="40" style={{border: "1px solid #888"}}></canvas>
      </div>
      <p>
        <b>Note:</b> Advanced features like <code>&lt;canvas&gt;</code> require JavaScript for full use. <br />
        <b>SEO:</b> Use microdata or schema.org attributes for rich search results.
      </p>
    </div>
  );
}