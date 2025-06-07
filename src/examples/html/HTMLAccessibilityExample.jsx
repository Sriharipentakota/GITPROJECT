import React from "react";

export default function HTMLAccessibilityExample() {
  return (
    <div>
      <h3>Accessibility in HTML</h3>
      <ul>
        <li>Use semantic tags for structure (e.g., <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>).</li>
        <li>Provide <code>alt</code> attributes for images.</li>
        <li>Label form elements properly.</li>
        <li>Use ARIA roles and landmarks where necessary.</li>
        <li>Ensure good color contrast and keyboard navigation.</li>
      </ul>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<nav aria-label="Main navigation">
  <ul>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
  </ul>
</nav>
<img src="cat.jpg" alt="A smiling cat" />
<label htmlFor="email">Email:</label>
<input id="email" type="email" />`}
      </pre>
      <h4>Live Render:</h4>
      <nav aria-label="Main navigation" style={{background: "#efefef", padding: 6, borderRadius: 3, marginBottom: 8}}>
        <ul style={{listStyle: "none", margin: 0, padding: 0, display: "flex", gap: 10}}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
      <img src="https://placekitten.com/80/40" alt="A smiling cat" style={{borderRadius: 4, marginBottom: 6}} />
      <br />
      <label htmlFor="email" style={{marginRight: 5}}>Email:</label>
      <input id="email" type="email" />
      <p>
        <b>Tip:</b> Accessibility helps everyone, including users with disabilities and search engines.
      </p>
    </div>
  );
}