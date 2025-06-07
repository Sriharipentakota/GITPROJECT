import React from "react";

export default function HTMLPerformanceExample() {
  return (
    <div>
      <h3>Performance & Best Practices</h3>
      <ul>
        <li>Use semantic tags to improve SEO and accessibility.</li>
        <li>Minimize use of inline styles; use external CSS.</li>
        <li>Add <code>alt</code> text for images.</li>
        <li>Optimize images (size, format).</li>
        <li>Lazy-load images and iframes using <code>loading="lazy"</code>.</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<img src="large.jpg" alt="Description" loading="lazy" />`}
      </pre>
      <h4>Live Render:</h4>
      <img src="https://via.placeholder.com/180" alt="Placeholder" loading="lazy" style={{border: "1px solid #ccc"}} />
    </div>
  );
}