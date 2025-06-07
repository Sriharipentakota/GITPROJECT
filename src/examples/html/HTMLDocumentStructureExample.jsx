import React from "react";

export default function HTMLDocumentStructureExample() {
  return (
    <div>
      <h3>Document Structure & Metadata</h3>
      <p>
        The <code>&lt;head&gt;</code> section contains metadata about your page, like the title, character encoding, and links to CSS/JS.
      </p>
      <pre style={{background: "#f4f4f4", padding: "1em", borderRadius: 6}}>
{`<head>
  <title>My Page Title</title>
  <meta charset="UTF-8" />
  <meta name="description" content="A sample HTML page." />
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js"></script>
</head>`}
      </pre>
      <p>
        <b>Explanation:</b> 
        <ul>
          <li><code>&lt;title&gt;</code> sets the browser tab name.</li>
          <li><code>&lt;meta charset="UTF-8"&gt;</code> specifies encoding.</li>
          <li><code>&lt;meta name="description"&gt;</code> provides a summary for SEO.</li>
          <li><code>&lt;link rel="stylesheet"&gt;</code> attaches external CSS.</li>
          <li><code>&lt;script&gt;</code> includes external JavaScript.</li>
        </ul>
      </p>
    </div>
  );
}